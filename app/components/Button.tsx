type ButtonProps = {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button
      className="
        rounded-full
        px-8
        py-3
        text-[--white]
        text-sm
        bg-gradient-to-r
        from-[--lime-green]
        to-[--bright-cyan]
        hover:opacity-60
        transition 
        ease-linear
      "
    >
      {text}
    </button>
  )
}
