import { roboto } from "@/utils/fonts";
import Image from "next/image";
import work2 from "@/assets/work2.svg"
import boxShadow from "@/assets/box-shadow.svg"

type Work2IconProps = {
  id: number;
};

const Work2Icon: React.FC<Work2IconProps> = ({ id }: Work2IconProps) => (
  <div className="relative h-[500px] z-[-1]">
    <h1 className={`text-pink h-[89px] w-[97px] absolute left-[48.22px]  text-[13.75rem] ${roboto.className} z-10`}>{id}</h1>
    {/* <Image className={"hidden md:block md:absolute top-[30px] h-[600px] md:z-[-1]"} src={boxShadow} alt={""} width={400} height={390} /> */}
    <Image className={"relative top-[30px] h-[600px]"} src={work2} alt={""} width={400} height={390} />
  </div>
  // <div className="relative h-[600px] z-[-1] ">
  //   <h1 className={`text-pink h-[89px] w-[97px] absolute left-[-100px] top-[320px] text-[13.75rem] ${roboto.className} z-10`}>{id}</h1>
  //   <Image className={"hidden md:block md:absolute top-[30px] h-[600px] md:z-[-1]"} src={boxShadow} alt={""} width={400} height={390} />
  //   <Image className={"relative top-[60px] h-[600px] right-[100px]"} src={work2} alt={""} width={980} height={591} />
  // </div>
)

export default Work2Icon;
