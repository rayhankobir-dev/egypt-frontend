"use client";
import { AuthProvider } from "@/context/authContext";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default AuthLayout;
