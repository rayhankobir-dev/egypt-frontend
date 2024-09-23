"use client";
import * as Yup from "yup";
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/error-message";
import { Eye, EyeOff, LockKeyhole, LogIn, Mail } from "lucide-react";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log({ values });
      formik.resetForm();
    },
  });

  return (
    <section className="min-w-96 w-fit flex flex-col gap-8 mx-auto p-7 overflow-hidden rounded-xl md:border shadow-lg my-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          className="h-16 w-auto"
          src="/logo.png"
          width={500}
          height={400}
          alt="Logo"
        />
        {/* <h1 className="font-bold text-2xl text-green-800">Egypt Tour</h1> */}
      </div>

      <div className="space-y-2 text-start">
        <h1 className="text-xl font-bold">Login Your Account</h1>
        <p className="font-light text-sm text-gray-500">
          Enter your credentials to access your account
        </p>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full relative flex flex-col gap-5"
      >
        <div className="space-y-2">
          {/* Email input */}
          <div className="relative">
            <Mail className="absolute left-3.5 top-3.5 h-5 w-5 text-muted-foreground" />
            <Input
              autoComplete="true"
              id="email"
              name="email"
              type="email"
              className="pl-12 h-12 rounded-xl"
              placeholder="Email address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <ErrorMessage className="mt-1" field="email" formik={formik} />
          </div>

          {/* Password input */}
          <div className="relative group">
            <LockKeyhole className="absolute left-3.5 top-3.5 h-5 w-5 text-muted-foreground" />
            <Input
              id="password"
              name="password"
              className="pl-12 h-12 rounded-xl"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {isPasswordVisible ? (
              <button
                className="absolute z-10 right-3.5 top-3.5 h-5 w-5"
                type="button"
                onClick={() => setIsPasswordVisible(false)}
              >
                <EyeOff className="text-gray-400 hover:text-gray-700 cursor-pointer duration-300" />
              </button>
            ) : (
              <button
                className="absolute z-10 right-3.5 top-3.5 h-5 w-5"
                type="button"
                onClick={() => setIsPasswordVisible(true)}
              >
                <Eye className="text-gray-400 hover:text-gray-700 cursor-pointer duration-300" />
              </button>
            )}
            <ErrorMessage className="mt-1" field="password" formik={formik} />
          </div>
        </div>

        <Button
          className="w-full h-11 flex gap-2 rounded-xl bg-green-900 hover:bg-green-800"
          type="submit"
          disabled={formik.isSubmitting}
        >
          Login <LogIn size={16} />
        </Button>
      </form>
    </section>
  );
}
