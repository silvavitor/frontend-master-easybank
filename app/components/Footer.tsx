import Image from "next/image";

import logo from "@/public/logo-white.svg";

import facebook from "@/public/icons/icon-facebook.svg";
import youtube from "@/public/icons/icon-youtube.svg";
import twitter from "@/public/icons/icon-twitter.svg";
import pinterest from "@/public/icons/icon-pinterest.svg";
import instagram from "@/public/icons/icon-instagram.svg";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-[--dark-blue]">
      <div className="
        max-w-7xl
        m-auto
        p-10
        flex
        flex-col
        md:grid
        md:grid-cols-4
      ">

        <div className="
        md:col-span-1
        flex
        flex-col
        items-center
        justify-center
        ">
          <Image src={logo} alt="logo" className="cursor-pointer" />
          <div className="mt-6 md:mt-10 flex gap-4">
            <Image src={facebook} alt="Facebook" className="cursor-pointer" />
            <Image src={youtube} alt="Youtube" className="cursor-pointer" />
            <Image src={twitter} alt="Twitter" className="cursor-pointer" />
            <Image src={pinterest} alt="Pinterest" className="cursor-pointer" />
            <Image src={instagram} alt="Instagram" className="cursor-pointer" />
          </div>
        </div>

        <div className="
        mt-8 md:mt-0
        md:ml-8
        md:col-span-2
        flex
        justify-center md:justify-start
        ">
          <ul className="
          text-[--very-light-gray]
          font-light
          text-center md:text-left
          text-sm
          flex md:grid
          flex-col md:grid-rows-3 md:grid-flow-col
          gap-3 md:gap-x-24
          ">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Carrers</li>
            <li className="cursor-pointer">Support</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div className="
          mt-8 md:mt-0
          md:col-span-1 
          flex 
          flex-col 
          items-center md:items-end
          justify-center
        ">
          <Button text="Request Invite" />
          <span className="mt-5 text-[--grayish-blue] text-sm">© Easybank. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  )
}
