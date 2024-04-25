import { dmSansText } from "@/utils/fonts";

export default function Button({ className = "", text = "" }) {
  return (
    <button className={`sm:${dmSansText.className} font-extrabold text-base border-4 border-pink rounded-full p-2 ${className}`}>
      {text} {">"}
    </button>
  )
}