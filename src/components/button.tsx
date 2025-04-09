interface ButtonProps {
  text: string;
}

export default function Button({ text = "Go there" }: ButtonProps) {
  return (
    <button className="bg-cyan-700 text-white font-semibold text-xl rounded-full px-5 py-3 cursor-pointer">
      {text}
    </button>
  );
}
