import { dmSansText, dmSerifText, roboto } from "@/utils/fonts";
import Button from "../button/Button";
import Box from "../box/Box";

const Hero1 = () => {
  return (
    <div className="flex flex-col md:flex-row p-5 sm:gap-5 bg-hero ">
      <div className="">
        <h1 className={`${dmSerifText.className} md:${roboto.className} p-2 text-5xl font-normal leading-[56px]`}>
          Look good without leaving your house.
        </h1>
        <h3 className={`${dmSansText.className} md:${roboto.className} font-normal p-2 text-lg leading-[24px]`}>
          Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month.
        </h3>
        <div >
          <Button className="w-44 my-4" text="SIGN UP" />
        </div>
      </div>
      <div>
        <Box className="" />
      </div>
    </div>
  )
};

export default Hero1;