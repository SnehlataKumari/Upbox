import { roboto } from "@/utils/fonts";
import Image from "next/image";
import work1 from "@/assets/work1.svg"

type Work1IconProps = {
  id: number;
};

const Work1Icon: React.FC<Work1IconProps> = ({ id }: Work1IconProps) => (
  // <div className="relative sm:h-[390px] md:h-[309.92px] md:w-[256.68px] pb-2 *:z-[-1]">
  //   {/* <h1 className={`text-pink  md:relative absolute sm:top-[5.92px] md:top-[2] left-[45.22px] text-[13.75rem] ${roboto.className} `}>{id}</h1>
  //   <Image className={"sm:absolute relative top-[6.92px] "} src={work1} alt={""} width={323} height={390} /> */}
  //   <h1 className={`text-pink  md:relative relative sm:top-[5.92px] md:top-[2] top-[289px] sm:z-[100] z-[100] md:z-[100] left-[40.22px] text-[13.75rem] ${roboto.className} `}>{id}</h1>
  //   <Image className={"sm:absolute relative top-[10px] "} src={work1} alt={""} width={323} height={390} />
  // </div>
  <div className="relative h-[600px] z-[-1]">
    {/* <h1 className={`text-pink  md:relative absolute sm:top-[5.92px] md:top-[2] left-[45.22px] text-[13.75rem] ${roboto.className} `}>{id}</h1>
  <Image className={"sm:absolute relative top-[6.92px] "} src={work1} alt={""} width={323} height={390} /> */}
    <h1 className={`text-pink h-[89px] w-[97px] absolute left-[17px] top-[76px]  text-[13.75rem] ${roboto.className} z-10`}>{id}</h1>
    <Image className={"relative top-[30px] h-[600px] "} src={work1} alt={""} width={323} height={390} />
  </div>
)

export default Work1Icon;
