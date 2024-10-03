"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import PlaidLink from "./PlaidLink";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href={"/"} className="mb-12 cursor-pointer gap-2 items-center">
          <Image
            src="/icons/logo.svg"
            alt="best-logo"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Bestank</h1>
        </Link>
        {sidebarLinks.map((i) => {
          const isactive =
            pathname === i.route || pathname.startsWith(`${i.route}/`);

          return (
            <Link
              href={i.route}
              key={i.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isactive })}
            >
              <div className="relative size-6">
                <Image
                  src={i.imgURL}
                  alt={i.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": isactive })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isactive })}>
                {i.label}
              </p>
            </Link>
          );
        })}
        <PlaidLink user={user} />
      </nav>
    <Footer user={user} />
    </section>
  );
};
export default Sidebar;
