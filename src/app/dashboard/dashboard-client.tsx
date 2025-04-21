'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarProvider,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarFooter,
  SidebarSeparator,
  useSidebar,
} from '@/components/ui/sidebar';
import { NavUser } from '@/components/nav-user';
import { Users, Package, LayoutDashboard, Settings, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardClientProps {
  children: ReactNode;
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

export default function DashboardClient({ children, user }: DashboardClientProps) {
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Overview',
      href: '/dashboard',
      icon: <LayoutDashboard className="h-4 w-4" />,
    },
    {
      name: 'Users',
      href: '/dashboard/users',
      icon: <Users className="h-4 w-4" />,
    },
    {
      name: 'Products',
      href: '/dashboard/products',
      icon: <Package className="h-4 w-4" />,
    },
    {
      name: 'Settings',
      href: '/dashboard/settings',
      icon: <Settings className="h-4 w-4" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <SidebarProvider defaultOpen={true}>
        <div className="flex flex-1 overflow-hidden">
          <div className="relative">
            <FloatingSidebarToggle />
            <Sidebar collapsible="offcanvas" className="overflow-hidden">
              <SidebarHeader className="flex h-16 items-center border-b px-4 justify-center">
                <div className="relative w-12 h-12">
                  <Image src="/logo.svg" alt="NJS Logo" fill className="dark:invert" priority />
                </div>
              </SidebarHeader>
              <SidebarContent className="p-2">
                <SidebarGroup>
                  <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {navItems.map((item) => (
                        <SidebarMenuButton
                          key={item.href}
                          isActive={pathname === item.href}
                          tooltip={item.name}
                          asChild
                        >
                          <Link href={item.href} className="flex items-center">
                            {item.icon}
                            <span className="ml-2">{item.name}</span>
                          </Link>
                        </SidebarMenuButton>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>

              <SidebarFooter className="border-t p-2">
                <SidebarSeparator className="my-2" />
                <NavUser user={user} />
              </SidebarFooter>
            </Sidebar>
          </div>

          {/* Main content */}
          <main className="flex-1 p-12 overflow-auto">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
}

function FloatingSidebarToggle() {
  const { toggleSidebar, state } = useSidebar();
  const isExpanded = state === 'expanded';

  return (
    <Button
      onClick={toggleSidebar}
      variant="outline"
      size="sm"
      className={`absolute top-4 z-50 h-8 w-8 rounded-full p-0 shadow-md bg-background border-muted-foreground/20
                 ${isExpanded ? 'left-[15.5rem]' : 'left-[10px]'} transition-all duration-300`}
      aria-label={isExpanded ? 'Close sidebar' : 'Open sidebar'}
    >
      {isExpanded ? <X className="h-3 w-3" /> : <Menu className="h-3 w-3" />}
    </Button>
  );
}
