import React, { lazy, Suspense, useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useInViewport } from "../hooks/useInViewport";

const EarthCanvas = lazy(() => import("./canvas/Earth"));

const NAME_PATTERN = /^[A-Za-z][A-Za-z .'-]{1,79}$/;
const EMAIL_PATTERN =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

const isValidEmail = (email) => {
  const [localPart, domain] = email.split("@");

  return (
    EMAIL_PATTERN.test(email) &&
    !email.includes("..") &&
    localPart?.length <= 64 &&
    domain?.length <= 253
  );
};

const getContactValidationError = ({ name, email, message }) => {
  if (!name || !email || !message) {
    return "Please fill in all contact form fields before sending.";
  }

  if (!NAME_PATTERN.test(name)) {
    return "Please enter a real name using letters, spaces, hyphens, apostrophes, or periods.";
  }

  if (!isValidEmail(email)) {
    return "Please enter a valid email address. Gmail, Outlook, and company domain emails are all accepted.";
  }

  return "";
};

const ContactVisualFallback = () => (
  <div
    className='relative flex h-full min-h-[350px] items-center justify-center overflow-hidden rounded-3xl bg-black-100'
    aria-hidden='true'
  >
    <div className='absolute h-[78%] w-[78%] rounded-full bg-[radial-gradient(circle_at_34%_28%,rgba(255,255,255,0.28),rgba(0,206,168,0.2)_24%,rgba(5,8,22,0.1)_38%,rgba(191,97,255,0.22)_62%,rgba(5,8,22,0.9)_78%)] shadow-[inset_-36px_-38px_70px_rgba(0,0,0,0.55),0_28px_90px_rgba(0,206,168,0.18)]' />
    <div className='absolute h-[86%] w-[86%] rounded-full border border-white/10' />
    <div className='absolute h-[58%] w-[58%] rounded-full border border-[#00cea8]/20' />
    <div className='absolute bottom-8 left-1/2 h-10 w-[60%] -translate-x-1/2 rounded-full bg-[#00cea8]/12 blur-xl' />
  </div>
);

const Contact = ({ enable3D = false }) => {
  const formRef = useRef();
  const visualRef = useRef(null);
  const isVisualInViewport = useInViewport(visualRef, "300px");
  const showEarth = enable3D && isVisualInViewport;
  const emailJsServiceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const emailJsPublicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
  const emailJsToEmail = import.meta.env.VITE_APP_EMAILJS_TO_EMAIL;

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [website, setWebsite] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    if (website.trim()) {
      return;
    }

    const validationError = getContactValidationError(trimmedForm);

    if (validationError) {
      alert(validationError);
      return;
    }

    if (
      !emailJsServiceId ||
      !emailJsTemplateId ||
      !emailJsPublicKey ||
      !emailJsToEmail
    ) {
      console.error("Missing EmailJS environment variables.");
      alert("Contact form is not configured yet. Please try again later.");
      return;
    }

    setLoading(true);

    try {
      const { default: emailjs } = await import("@emailjs/browser");

      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          from_name: trimmedForm.name,
          to_name: "Karan",
          from_email: trimmedForm.email,
          to_email: emailJsToEmail,
          reply_to: trimmedForm.email,
          message: trimmedForm.message,
        },
        emailJsPublicKey
      );

      alert("Thank you. I will get back to you as soon as possible.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      alert(
        `EmailJS error: ${error?.text || error?.message || "Please try again."}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <input
            type='text'
            name='website'
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            className='hidden'
            tabIndex='-1'
            autoComplete='off'
            aria-hidden='true'
          />
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              required
              aria-required='true'
              minLength={2}
              maxLength={80}
              autoComplete='name'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              required
              aria-required='true'
              maxLength={254}
              inputMode='email'
              autoComplete='email'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              required
              aria-required='true'
              maxLength={2000}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        ref={visualRef}
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        {showEarth ? (
          <Suspense fallback={<ContactVisualFallback />}>
            <EarthCanvas />
          </Suspense>
        ) : (
          <ContactVisualFallback />
        )}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
