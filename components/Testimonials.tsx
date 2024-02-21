import { TESTIMONIALS } from "@/constants"
import Image from "next/image"
import React from "react"

const Testimonials = () => {
  return (
    <section className="testimonial">
      <div className="padding-container max-container">
        <div className="section_title">
          <h3>
            We make it easy
            <span className="text-hotPink-10">.</span>
          </h3>
          <p className="w-1/2 ml-12 mb-4 text-lg leading-7 text-gray-600">We prioritize quality of service over everything. No pushy sales calls, just helpful answers when you're ready. </p>
        </div>

        <div className="testimonial_wrapper">
          {TESTIMONIALS.map(testimonial => (
            <TestimonialsItem image={testimonial.image} description={testimonial.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

type TestimonialsItem = {
  image: string
  description: string
}

const TestimonialsItem = ({ image, description }: TestimonialsItem) => {
  return (
    <div className="testimonial_content">
      <Image src={image} width={50} height={50} alt="" />
      <p>"{description}"</p>
    </div>
  )
}

export default Testimonials
