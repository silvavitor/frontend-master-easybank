"use client";

import { useState } from "react";
import Image from "next/image";

import logo from "@/public/logo.svg";
import hamburger from "@/public/icons/icon-hamburger.svg";
import close from "@/public/icons/icon-close.svg";

import Button from "./Button";
import MobileMenuOpen from "./MobileMenuOpen";
import DesktopHeader from "./DesktopHeader";

const pages: Array<string> = [
  "Home",
  "About",
  "Contact",
  "Blog",
  "Carrers"
];

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  function handleMenuClick() {
    setOpen((prev) => !prev);
  }

  return (
    <header className="bg-[--very-light-gray]">
      <nav className="
        px-9
        h-24
        flex
        justify-between
        items-center
        max-w-7xl
        m-auto
        z-10
      ">
        <Image src={logo} alt="Logo" />

        <div className="md:hidden">
          <div className="flex justify-center items-center cursor-pointer" onClick={handleMenuClick}>
            <Image className={`${!open ? "block" : "hidden"}`} src={hamburger} alt="Menu" height={12} />
            <Image className={`${open ? "block pr-1" : "hidden"}`} src={close} alt="Close menu" height={24} />
          </div>
        </div>

        <DesktopHeader pages={pages} />

        <div className="hidden md:block">
          <Button text="Request Invite" />
        </div>
      </nav>

      {open && <MobileMenuOpen pages={pages} />}
    </header>
  )
}
