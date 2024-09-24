"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import UserAccount from "./user/UserAccount";

interface Props { }

const Navbar: React.FC<Props> = () => {
  const { user } = useKindeBrowserClient();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <header className="sticky z-[80] h-14 inset-x-0 top-0 w-full border-b border-border bg-white/50 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-border">
          <Link href="/" className="flex z-40 font-semibold text-xl">
            Task <span className="text-blue-600">Master</span>
          </Link>

          <div className="flex items-center space-x-6 h-full">
            {user ? (
              <>
                {isAdmin && (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({ size: "sm", variant: "ghost" })}
                  >
                    Dashboard ⚡
                  </Link>
                )}
                <Link
                  href="/dashboard"
                  className="hidden sm:flex items-center gap-1"
                >
                  Designs
                </Link>
                <UserAccount user={user} />
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Sign up
                </Link>
                <Link
                  href="/api/auth/login"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Login
                </Link>
                <div className="h-6 w-px bg-border"></div>
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Start Learning
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;