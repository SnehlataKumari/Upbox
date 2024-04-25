import { roboto } from "@/utils/fonts";
import Image from "next/image";
import work3 from "@/assets/work3.svg"

type Work3IconProps = {
  id: number;
};

const Work3Icon: React.FC<Work3IconProps> = ({ id }: Work3IconProps) => (
  <div className="relative h-[600px] z-[-1]">
    <h1 className={`text-pink h-[89px] w-[97px] absolute left-[48.22px]  text-[13.75rem] ${roboto.className} z-10`}>{id}</h1>
    <Image className={"relative top-[30px] h-[600px]"} src={work3} alt={""} width={400} height={390} />
  </div>

)

export default Work3Icon;
