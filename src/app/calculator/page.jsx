"use client";

import HeroSection from "@/component/HeroSection";
import WindowCustomizer from "@/component/WindowConfigrator";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

function CalculatorContent() {
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");

  return (
    <div>
      <HeroSection
        title={editId ? "Edit Booking" : "Book Free Consultation"}
        description="Discover who we are, what we stand for, and how we're transforming the window & door industry with smarter, lasting solutions."
      />
      <WindowCustomizer editId={editId} />
    </div>
  );
}

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CalculatorContent />
    </Suspense>
  );
}

export default Page;
