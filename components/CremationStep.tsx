import { CremtionStep } from "@/constants"
import Image from "next/image"
import { MdOutlineDoubleArrow } from "react-icons/md"

const CremationStep = () => {
  return (
    <section className="cremation_inner_section">
      <div className="padding-container max-container">
        <div className="w-1/2 md:w-full sm:w-full mr-auto ml-auto pr-6 pl-6 text-center">
          <h2 className="text-5xl">
            Cremation doesn't have to be complicated<span className="text-hotPink-10">.</span>
          </h2>
        </div>

        <div className="process-wrap">
          {CremtionStep.map(cremtionstep => (
            <Step image={cremtionstep.image} title={cremtionstep.title} description={cremtionstep.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

type Step = {
  image: string
  title: string
  description: string
}

const Step = ({ image, title, description }: Step) => {
  return (
    <div className="block_wrap">
      <div className="block">
        <MdOutlineDoubleArrow size={50} className="opacity-20" />
      </div>
      <div className="content_wrap">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CremationStep
