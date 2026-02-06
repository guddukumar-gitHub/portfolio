"use client";

import * as React from "react";
import {
  Command,
  Frame,
  LifeBuoy,
  House,
  UserRoundPen,
  Map,
  PieChart,
  Send,
  SquareTerminal,
  FileDown,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-developer";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavActions } from "./nav-actions";
import Link from "next/link";

const data = {
  developer: {
    name: "GUDDU KUMAR",
    email: "gk4communication@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon: House,
      isActive: true,
    },
    {
      title: "About",
      url: "/about",
      icon: UserRoundPen,
      isActive: false,
    },
    {
      title: "Skills",
      url: "/skills",
      icon: SquareTerminal,
      isActive: false,
    },
  ],
  projects: [
    {
      name: "GhostWire",
      url: "/projects/ghostwire",
      icon: Frame,
    },
    {
      name: "Dashboard",
      url: "/projects/dashboard",
      icon: PieChart,
    },
    {
      name: "Portfolio",
      url: "/projects/portfolio",
      icon: Map,
    },
  ],
  actions: [
    {
      title: "Contact",
      url: "/contact",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
    {
      title: "Resume",
      url: "/resume",
      icon: FileDown,
    },

  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <div
      className="min-h-screen"
    >
      <div className="sticky top-0 z-10 bg-background/80">
        <Sidebar variant="inset" {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link className="text-2xl font-bold" href="/">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Guddu Kumar</span>
                    <span className="truncate text-xs">Software Developer</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
          <NavProjects projects={data.projects} />
          <NavActions items={data.actions}/>
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.developer} />
        </SidebarFooter>
      </Sidebar>
      </div>
    </div>
  );
}
