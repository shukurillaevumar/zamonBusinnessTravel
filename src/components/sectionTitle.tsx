interface SectionTitleProps {
  title: string;
  description: string;
  className?: string;
}

export default function SectionTitle({
  title = "",
  description = "",
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={`flex gap-5 flex-col ${className} max-md:w-full max-md:p-2`}
    >
      <p className="text-4xl font-bold max-md:text-3xl">{title}</p>
      <p className="text-xl text-gray-400 font-semibold max-md:text-lg">
        {description}
      </p>
    </div>
  );
}
