import Image from "next/image";
//import BoxPng from "@/assets/box.svg"
import BoxPng from "@/assets/box.png";
import BoxTablet from "@/assets/box-tablet.svg"

export default function Box({ className = "" }) {
  return <>
    <Image src={BoxPng} className={`${className} md:hidden`} alt="Top bar image" />
    <Image src={BoxTablet} className={`${className} hidden md:block`} alt="Top bar image" />
  </>
}