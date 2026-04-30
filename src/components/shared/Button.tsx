type ButtonProps = {
    text: string;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    hoverBgColor?: string;
    hoverTextColor?: string;
    hoverBorderColor?: string;
  };
  
  export default function Button({
    text,
    className = "",
    backgroundColor = "bg-black",
    textColor = "text-white",
    borderColor = "border-black",
    hoverBgColor = "hover:bg-white",
    hoverTextColor = "hover:text-black",
    hoverBorderColor = "hover:border-black",
  }: ButtonProps) {
    return (
      <button
        className={`
          inline-flex items-center justify-center
          border px-6 py-3 transition-all duration-300
          ${backgroundColor}
          ${textColor}
          ${borderColor}
          ${hoverBgColor}
          ${hoverTextColor}
          ${hoverBorderColor}
          ${className}
        `}
      >
        {text}
      </button>
    );
  }