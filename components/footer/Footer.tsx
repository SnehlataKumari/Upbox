import Image from "next/image";
import footerLogoSvg from "@/assets/footerLogo.svg";
import instagramSvg from "@/assets/instagram.svg";
import facebookSvg from "@/assets/facebook.svg";
import twitterSvg from "@/assets/twitter.svg";
export default function Footer() {
  return (
    <footer className="flex justify-between align-middle bg-hero border-2 border-[#C4C4C4] h-28 m-1 my-2 py-4">
      <Image src={footerLogoSvg} alt="Logo" className="px-2" />
      <div className="flex px-2">
        <Image src={instagramSvg} alt="Logo" />
        <Image src={facebookSvg} alt="Logo" />
        <Image src={twitterSvg} alt="Logo" />
      </div>
    </footer>
  )
}