"use client";
import "./404.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    let home = setTimeout(() => {
      router.replace("/");
    }, 5000);
    clearInterval(home);
  }, []);
  return (
    <div className="global-error">
      <h3>Oops! Page Not Found</h3>
      <Link href="/" className="homePage">
        Go HomePage
      </Link>
    </div>
  );
}
