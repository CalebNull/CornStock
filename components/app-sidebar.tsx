"use client";
import React from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Barn, StackIcon } from "@phosphor-icons/react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const data = {
    navMain: [
      {
        title: "Analytics",
        href: "",
        items: [
          {
            title: "Web Traffic",
            href: "#",
          },
          {
            title: "Revenue",
            href: "#",
          },
        ],
      },
    ],
  };
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-sm text-sidebar-primary outline-1">
                  <Barn weight="fill" />
                </div>
                <div className="flex flex-col gap-0.5 leadin-none">
                  <span className="font-medium">Corn Stock</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
    </Sidebar>
  );
}
