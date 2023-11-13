import Image from "next/image";

type FeatureCardProps = {
  icon: string
  title: string
  text: string
}

export default function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <div className="
      flex 
      flex-col 
      justify-center
      items-center md:items-start
      ">
      <Image src={icon} alt={title} height={64} />
      <h3 className="
        h-10
        mt-6
        text-[--dark-blue]
        text-lg
      ">{title}</h3>
      <p className="
        h-20
        mt-2
        text-[--grayish-blue]
        text-center md:text-left
        text-sm
      ">{text}</p>
    </div>
  )
}
