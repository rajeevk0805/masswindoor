"use client";

import React from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/component/admin-sidebar";

export default function AdminLayout({ children }) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </SidebarProvider>
  );
}
