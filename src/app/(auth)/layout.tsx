"use client";
import React from "react";
import SessionWrapper from "../providers";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <SessionWrapper>{children}</SessionWrapper>;
}

export default AuthLayout;
