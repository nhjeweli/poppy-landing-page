"use client"

import { Accordion, AccordionItem } from "@nextui-org/react"

const HomeAccordion = () => {
  const itemClasses = {
    base: "border-solid border border-gray-200 rounded cursor-pointer mb-6 px-6",
    title: "mr-6 text-gray-800 text-xl leading-6 ",
    trigger: "px-2 py-0 focus:outline-none rounded-lg h-14 flex items-center p-[16px] ",
    indicator: "text-medium ml-auto",
    content: "text-gray-600 text-lg leading-7 font-normal"
  }

  const defaultContent = "Direct or immediate cremation is the simplest form of cremation, meaning it usually takes place without viewing of the body, visitation, embalming, or many of the traditional and more expensive aspects of ceremonial funerals"

  return (
    <section className="accordion">
      <div className="padding-container max-container">
        <div className="accordion-title pb-10">
          <h2>
            We are here to answer your questions
            <span className="text-hotPink-10">.</span>
          </h2>
          <p>When it comes to end-of-life arrangements, no question is off limits. If you don't find what you're looking for here, we'll be happy to answer your question over email or phone. </p>
        </div>

        <Accordion className="grid gap-4 grid-cols-2 grid-rows-2 md:grid-cols-[1fr] sm:grid-cols-[1fr] shadow-medium-none" showDivider={false} variant="shadow" itemClasses={itemClasses}>
          <AccordionItem className="mt-6" key="1" aria-label="What exactly is direct cremation?" title="What exactly is direct cremation?">
            {defaultContent}
          </AccordionItem>
          <AccordionItem className="mt-6" key="2" aria-label="Do I need to purchase an urn?" title="Do I need to purchase an urn?">
            {defaultContent}
          </AccordionItem>
          <AccordionItem className="mt-6" key="3" aria-label="How long does it take? " title="How long does it take? ">
            {defaultContent}
          </AccordionItem>
          <AccordionItem className="mt-6" key="4" aria-label="Do I need to purchase a casket?" title="Do I need to purchase a casket?">
            {defaultContent}
          </AccordionItem>
          <AccordionItem className="mt-6" key="5" aria-label="What preparations are necessary before the cremation? " title="What preparations are necessary before the cremation? ">
            {defaultContent}
          </AccordionItem>
          <AccordionItem className="mt-6" key="6" aria-label="Do all faiths support cremation? " title="Do all faiths support cremation? ">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default HomeAccordion
