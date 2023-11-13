import FeatureCard from "./FeatureCard";

import online from "@/public/icons/icon-online.svg";
import budgeting from "@/public/icons/icon-budgeting.svg";
import onboarding from "@/public/icons/icon-online.svg";
import api from "@/public/icons/icon-api.svg";

export default function WhyUs() {
  return (
    <section className="bg-[--light-grayish-blue]">
      <div className="
        px-9
        py-14
        pt-20
        max-w-7xl 
        m-auto
      ">
        <h2 className="
            text-[--dark-blue]
            text-center md:text-left
            text-3xl
        ">Why choose Easybank?</h2>
        <p
          className="
            mt-6
            text-[--grayish-blue]
            text-center md:text-left
            text-sm
          ">We leverage Open Banking to turn your bank account into your financial hub.<br className="hidden md:block" /> Control your finances like never before.
        </p>

        <div className="
          mt-10 md:mt-14
          md:mb-12
          grid 
          grid-cols-1 md:grid-cols-4
          gap-8
        ">
          <FeatureCard icon={online} title="Online Banking" text="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world." />
          <FeatureCard icon={budgeting} title="Simple Budgeting" text="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits." />
          <FeatureCard icon={onboarding} title="Fast Onboarding" text="We don’t do branches. Open your account in minutes online and start taking control of your finances right away." />
          <FeatureCard icon={api} title="Open API" text="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier." />
        </div>
      </div>
    </section>
  )
}
