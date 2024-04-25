import { roboto } from "@/utils/fonts";
import { ReactElement } from "react";

type CardProps = {
  BannerImage: React.FC<{ id: number }>;
  id: number;
  title: string;
  description: string;
};
export default function Card({ BannerImage, id, title, description }: CardProps) {
  return (
    <div className={`md:flex gap-x-20 ${id % 2 === 0 ? "md:flex-col" : "md:flex-row"}`}>
      <div className="">
        {BannerImage && <BannerImage id={id} />}
      </div>
      <div className="m-4 py-2">
        <h1 className={`font-normal py-1 my-4 text-4xl ${roboto.className}`}>{title}</h1>
        <p className={`font-normal py-1 my-4 text-lg ${roboto.className}`}>{description}</p>
      </div>
    </div>
  )
}


