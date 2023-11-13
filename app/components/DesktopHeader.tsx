type DesktopHeaderProps = {
  pages: string[]
}

export default function DesktopHeader({ pages }: DesktopHeaderProps) {
  return (
    <ul className="
          pt-1
          hidden 
          md:flex
          gap-8 lg:gap-12
          h-full
        ">
      {pages.map((page, index) => (
        <li key={index} className="
          pb-1
          text-[--grayish-blue]
          h-full
          flex
          bg-[--very-light-gray]
          active:bg-gradient-to-r
          from-[--lime-green]
          to-[--bright-cyan]
        ">
          <span className="
            bg-[--very-light-gray] 
            flex
            items-center
            cursor-pointer
          ">
            {page}
          </span>
        </li>
      ))}
    </ul>
  )
}
