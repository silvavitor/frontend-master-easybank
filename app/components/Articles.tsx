import ArticleCard from "./ArticleCard";

import currency from "@/public/image-currency.jpg";
import restaurant from "@/public/image-restaurant.jpg";
import plane from "@/public/image-plane.jpg";
import confetti from "@/public/image-confetti.jpg";

export default function Articles() {
  return (
    <section className="bg-[--very-light-gray]">
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
        ">Latest Articles</h2>
        <div className="
          mt-10 md:mt-14
          md:mb-12
          grid 
          grid-cols-1 md:grid-cols-4
          gap-8
        ">
          <ArticleCard image={currency} author="Claire Robinson" title="Receive money in any currency with no fees" text="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …" />
          <ArticleCard image={restaurant} author="Wilson Hutton" title="Treat yourself without worrying about money" text="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …" />
          <ArticleCard image={plane} author="Wilson Hutton" title="Take your Easybank card wherever you go" text="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …" />
          <ArticleCard image={confetti} author="Claire Robinson" title="Our invite-only Beta accounts are now live!" text="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …" />
        </div>
      </div>
    </section>
  )
}
