interface ButtonProps {
  text: string;
}

export default function Button({ text = "Go there" }: ButtonProps) {
  return (
    <button className="bg-[#22B3C1] text-white font-semibold text-xl rounded-full px-5 py-3 cursor-pointer max-md:text-sm max-md:px-2 max-md:py-2">
      {text}
    </button>
  );
}
