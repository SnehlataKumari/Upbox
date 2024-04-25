import Image from "next/image"
import { dmSerifText, roboto } from "@/utils/fonts"
import Card from "../card/Card"
import { works } from "@/utils/dummyData"
import OutlineSvg from "@/assets/outline.svg"

export default function Section() {
  return (
    <section className="flex flex-col p-5 gap-5  ">
      <div className="text-center">
        <h1 className={`sm:${dmSerifText.className} text-5xl font-normal sm:leading-[56px]`}>How it works?</h1>
        <Image src={OutlineSvg} className="mx-auto" alt="Top bar image" />
      </div>
      <div>
        {
          works.map(work => {
            return (
              <Card key={work.id} {...work} />
            )
          })
        }
      </div>


    </section>
  )
}