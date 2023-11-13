import Image, { StaticImageData } from "next/image"

type ArticleCardProps = {
  image: StaticImageData
  author: string
  title: string
  text: string
}

export default function ArticleCard({ image, author, title, text }: ArticleCardProps) {
  return (
    <div className="
      rounded-md 
      cursor-pointer
      group
    ">
      <div className="
        rounded-t-md
        w-full
        h-48
      ">
        <Image className="w-full rounded-t-md h-full object-cover" src={image} alt={title} />
      </div>

      <div className="p-6 bg-[--very-light-gray]">
        <span className="text-[--grayish-blue] text-[10px]">By {author}</span>
        <h4 className="
          bg-transparent
          mt-2 
          text-[--dark-blue]
          group-active:bg-gradient-to-r
          from-[--lime-green]
          to-[--bright-cyan]
          group-active:text-transparent 
          group-active:bg-clip-text 
        ">{title}</h4>
        <p className="mt-2 text-[--grayish-blue] text-sm">{text}</p>
      </div>
    </div>
  )
}
