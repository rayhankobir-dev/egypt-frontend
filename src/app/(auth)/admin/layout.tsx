"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticating, isAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticating && !isAuth) {
      router.push("/login");
    }
  }, [isAuth, isAuthenticating, router]);

  if (isAuthenticating) {
    return <div>Loading...</div>;
  }
  if (isAuth) {
    return <div>{children}</div>;
  }
  return null;
}

export default AdminLayout;
