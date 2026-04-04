"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import {
  BarnIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  PencilSimpleIcon,
  GearIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { NavUser } from "./ui/nav-user";

type NavItem = {
  title: string;
  url: string;
  icon?: React.ElementType;
};

const example_data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/john-doe.png",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const dashboard_data = {
    navMain: [
      {
        title: "Main Navigation",
        url: "#",
        items: [
          {
            title: "Web Traffic",
            url: "#",
            icon: ChartBarIcon,
          },
          {
            title: "Revenue",
            url: "#",
            icon: CurrencyDollarIcon,
          },
          {
            title: "Editor",
            url: "#",
            icon: PencilSimpleIcon,
          },
          {
            title: "Settings",
            url: "#",
            icon: GearIcon,
          },
        ] satisfies NavItem[],
      },
    ],
  };
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="#">
                <div className="flex aspect-square size-8 items-center justify-center text-sidebar-primary">
                  <BarnIcon weight="fill" />
                </div>
                <div className="flex flex-col gap-0.5 leadin-none">
                  <span className="font-medium">Corn Stock</span>
                  <span className="">v1.0.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <Separator className="my-2" />

          <SidebarContent>
            {dashboard_data.navMain.map((item) => (
              <SidebarGroup key={item.title}>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title} className="py-1 px-1">
                        <SidebarMenuButton asChild>
                          <Link href={item.url}>
                            {item.icon && <item.icon />}
                            {item.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>
        </SidebarMenu>
      </SidebarHeader>
      <div className="flex-1" />
      <SidebarFooter>
        <Separator className="mb-2" />
        <SidebarMenu>
          <SidebarMenuItem>
            <NavUser user={example_data.user} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
