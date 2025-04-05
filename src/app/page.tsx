"use client";
import { HeroSection } from "@/components/HeroSection";
import { PricingTable } from "@/components/PricingTable";
import { useAuthStore } from "@/store/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const loggedIn = useAuthStore(
    (state: { loggedIn: boolean }) => state.loggedIn
  );

  return (
    <>
      {loggedIn ? <PricingTable /> : <HeroSection />}
      <ToastContainer position="top-center" />
    </>
  );
}
