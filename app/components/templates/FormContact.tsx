"use client";

import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { PulseLoader } from "react-spinners";

const FormContact = () => {
  const [from, setFrom] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>("");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      setIsError(true);
      setErrMessage("Please verify that you are not a robot!");
      return;
    }

    if (!from || !subject || !message) {
      setIsError(true);
      setErrMessage("All fields (From, Subject, Message) are required.");
      return;
    }

    try {
      setIsLoading(true);
      const formData = {
        from: from,
        subject: subject,
        message: message,
      };

      const response = await fetch("http://localhost:3000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFrom("");
        setSubject("");
        setMessage("");
        setIsLoading(false);
        setCaptchaValue(null);

        alert("Email sent successfully!");
      } else {
        setIsError(true);
        setIsLoading(false);
        setErrMessage("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again later.");
      setIsLoading(false);
    }
  };

  const SITEKEY = process.env.NEXT_PUBLIC_GOOGLE_RECAPTHCA_SITE_KEY ?? "";

  useEffect(() => {
    if (from && subject && message && captchaValue) {
      setIsError(false);
      setErrMessage("");
    }
  }, [from, subject, message, captchaValue]);

  return (
    <form onSubmit={handleSubmit} className="w-[80%] md:w-[500px] flex flex-col gap-y-4 mt-8 border border-slate-400 p-5 rounded-lg shadow-lg">
      {isError && (!from || !subject || !message) && <div className="mx-auto text-red-500">{errMessage}</div>}
      <label className="flex flex-col gap-y-1">
        <span className="font-semibold">From</span>
        <input type="email" placeholder="Enter email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={from} onChange={(e) => setFrom(e.target.value)} />
      </label>

      <label className="flex flex-col gap-y-1">
        <span className="font-semibold">Subject</span>
        <input type="text" placeholder="Enter subject" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </label>

      <label className="flex flex-col gap-y-1">
        <span className="font-semibold">Message</span>
        <textarea placeholder="Enter your message" rows={5} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>

      {/* reCAPTCHA */}
      <div className="flex justify-center my-2">
        <ReCAPTCHA ref={recaptchaRef} sitekey={SITEKEY} onChange={(value) => setCaptchaValue(value)} />
      </div>

      <button
        type="submit"
        disabled={captchaValue === null || isLoading}
        className={`w-full ${captchaValue === null ? "bg-slate-500 cursor-not-allowed" : "bg-slate-700 cursor-pointer"}  text-white font-semibold py-2 rounded-md hover:bg-slate-950 transition-all `}
      >
        <span className="flex justify-center items-center gap-x-2">
          <p>Send Message</p> <PulseLoader color="#ffffff" size={5} loading={isLoading && !isError} />
        </span>
      </button>
    </form>
  );
};

export default FormContact;
