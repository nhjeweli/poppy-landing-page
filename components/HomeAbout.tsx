import Image from "next/image"
import React from "react"
import Button from "./Button"

const HomeAbout = () => {
  return (
    <section className="about">
      <div className="padding-container max-container">
        <div className="about_cta_banner">
          <Image src="/5f6a8ac28ee75603331e9323_shutterstock_696084358 1.jpg" alt="" height={425} width={538} />
          <div className="about_banner_content">
            <div className="flex">
              <span className="line"></span>
              <h4 className="text-hotPink-10 uppercase">ABOUT POPPY</h4>
            </div>
            <h2>
              Flexibility to choose how and where to celebrate a life <span className="text-hotPink-10">.</span>
            </h2>
            <p>Direct cremation with Poppy means you can hold a memorial on your terms, when loved ones can gather safely, and say goodbye together.</p>
            <Button type="button" title="Learn More" variant="btn_dark_green"></Button>
          </div>
        </div>
      </div>
      <Image src="https://assets-global.website-files.com/5f6147bccdfd345d7053123d/5f6a8d2532ee9483c9eb8b10_bouquet%203%202%20(Traced).svg" alt="" className="bouquet-bottom-right md:hidden sm:hidden" height={778.41} width={595.65} />
      <Image src="https://assets-global.website-files.com/5f6147bccdfd345d7053123d/5f6a8d2532ee9483c9eb8b10_bouquet%203%202%20(Traced).svg" alt="" className="bouquet-top-left md:hidden sm:hidden" height={757} width={595.65} />
    </section>
  )
}

export default HomeAbout
