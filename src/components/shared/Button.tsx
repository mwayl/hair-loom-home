// type ButtonProps = {
//     text: string;
//     className?: string;
//     backgroundColor?: string;
//     textColor?: string;
//     borderColor?: string;
//     hoverBgColor?: string;
//     hoverTextColor?: string;
//     hoverBorderColor?: string;
//   };
  
//   export default function Button({
//     text,
//     className = "",
//     backgroundColor = "bg-black",
//     textColor = "text-white",
//     borderColor = "border-black",
//     hoverBgColor = "hover:bg-white",
//     hoverTextColor = "hover:text-black",
//     hoverBorderColor = "hover:border-black",
//   }: ButtonProps) {
//     return (
//       <button
//         className={`
//           inline-flex items-center justify-center
//           border px-6 py-3 transition-all duration-300
//           ${backgroundColor}
//           ${textColor}
//           ${borderColor}
//           ${hoverBgColor}
//           ${hoverTextColor}
//           ${hoverBorderColor}
//           ${className}
//         `}
//       >
//         {text}
//       </button>
//     );
//   }







type ButtonProps = {
  text: string;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
};

export default function Button({
  text,
  className = "",
  backgroundColor = "bg-transparent",
  textColor = "text-[#161616]",
  borderColor = "border-[#161616]",
}: ButtonProps) {
  return (
    <button
      className={`
        group relative inline-flex items-center justify-center overflow-hidden
        border
        ${backgroundColor}
        ${textColor}
        ${borderColor}

        origin-center
        transition-all duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:scale-[1.08]
        hover:border-[#161616]
        active:scale-[1.03]

        ${className}
      `}
    >
      {/* subtle hover background */}
      <span
        className="
          absolute inset-0 z-0 bg-transparent
          transition-colors duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:bg-white/20
        "
      />

      {/* text */}
      <span
        className="
          relative z-10
          transition-all duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:text-[#7f8b78]
          group-hover:tracking-[0.04em]
        "
      >
        {text}
      </span>
    </button>
  );
}