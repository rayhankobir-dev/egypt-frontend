/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Send } from "lucide-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/ui/date-picker";
import ErrorMessage from "@/components/ui/error-message";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  date: Date | null;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  date: Yup.date().nullable().required("Estimate travel date is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm: React.FC = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const initialValues: FormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
    date: null,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      if (!captchaValue) {
        alert("Please complete the reCAPTCHA");
        return;
      }
      console.log("Form Submitted:", values);
      resetForm();
      setCaptchaValue(null);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2.5">
      <div className="flex flex-col gap-1.5">
        <Label className="text-gray-800" htmlFor="name">
          Full name
        </Label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full h-12 rounded-lg py-3 px-4 text-gray-800 text-sm border-green-900"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <ErrorMessage field="name" formik={formik} />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label className="text-gray-800" htmlFor="email">
          Email address
        </Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full h-12 rounded-lg py-3 px-4 text-gray-800 text-sm border-green-900"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <ErrorMessage field="email" formik={formik} />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label className="text-gray-800" htmlFor="subject">
          Subject
        </Label>
        <Input
          id="subject"
          type="text"
          name="subject"
          placeholder="Enter the subject"
          className="w-full h-12 rounded-lg py-3 px-4 text-gray-800 text-sm border-green-900"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <ErrorMessage field="subject" formik={formik} />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label className="text-gray-800" htmlFor="date">
          Estimate Travel Date
        </Label>
        <DatePicker
          className="border-green-900"
          date={formik.values.date || undefined}
          onDateChange={(date) => formik.setFieldValue("date", date)}
        />
        <ErrorMessage field="date" formik={formik} />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label className="text-gray-800" htmlFor="message">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Enter your message or query"
          className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm border-green-900"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <ErrorMessage field="message" formik={formik} />
      </div>

      <div className="flex">
        <ReCAPTCHA
          sitekey={String(process.env.NEXT_PUBLIC_CAPTCHA_KEY)}
          onChange={(value) => setCaptchaValue(value)}
        />
      </div>

      <Button
        type="submit"
        className="w-full h-12 flex items-center justify-center gap-2 px-4 py-3 text-sm text-white tracking-wide bg-green-900 hover:bg-opacity-95 rounded-xl transition-all duration-300"
      >
        <Send size={18} />
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
