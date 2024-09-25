"use client";
import Image from "next/image";
import LoginForm from "@/components/login-form";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const { isAuthenticating, isAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticating && isAuth) {
      router.push("/admin");
    }
  }, [isAuth, isAuthenticating, router]);

  if (isAuth) return null;
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

      <LoginForm />
    </section>
  );
}
