"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const MobileNav = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link
            href={"/"}
            className="flex cursor-pointer gap-1 px-4 mb-8 items-center"
          >
            <Image
              src="/icons/logo.svg"
              alt="best-logo"
              width={34}
              height={34}
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold ">Horizon</h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col text-white pt-16 gap-6">
                {sidebarLinks.map((i) => {
                  const isactive =
                    pathname === i.route || pathname.startsWith(`${i.route}/`);

                  return (
                    <SheetClose asChild key={i.route}>
                      <Link
                        href={i.route}
                        key={i.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isactive,
                        })}
                      >
                        <Image
                          src={i.imgURL}
                          alt={i.label}
                          width={25}
                          height={25}
                          className={cn({
                            "brightness-[3] invert-0": isactive,
                          })}
                        />
                        <p
                          className={cn("text-16 text-black-2 font-semibold ", {
                            "text-white": isactive,
                          })}
                        >
                          {i.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                User
              </nav>
            </SheetClose>
            <div className="py-6">
              <Footer user={user} type="mobile" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};
export default MobileNav;
