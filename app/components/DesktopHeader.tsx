type DesktopHeaderProps = {
  pages: string[]
}

export default function DesktopHeader({ pages }: DesktopHeaderProps) {
  return (
    <ul className="
          hidden 
          md:flex
          gap-8
        ">
      {pages.map((page, index) => (
        <li key={index} className="text-[--grayish-blue] cursor-pointer">{page}</li>
      ))}
    </ul>
  )
}
