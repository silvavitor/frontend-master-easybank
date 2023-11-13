type MobileMenuOpenProps = {
  pages: string[]
}

export default function MobileMenuOpen({ pages }: MobileMenuOpenProps) {
  return (
    <div className="
      md:hidden
      fixed
      z-20
      bg-gradient-to-b
      from-[--dark-blue]
      to-[transparent]
      h-full
      w-full
    ">
      <ul className="
        flex
        flex-col
        items-center
        m-5
        p-5
        rounded
        bg-[--very-light-gray]
        gap-y-4
      ">
        {pages.map((page, index) =>
          <li className="text-[--dark-blue] cursor-pointer" key={index}>{page}</li>
        )}
      </ul>
    </div>
  )
}
