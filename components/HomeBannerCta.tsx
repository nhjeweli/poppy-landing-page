import Image from "next/image"
import React from "react"
import Button from "./Button"

const HomeBannerCta = () => {
  return (
    <section className="home_banner-3">
      <div className="padding-container max-container">
        <div className="row">
          <div className="text-center w-[600px] md:w-full sm:w-full m-auto">
            <h2 className="text-white text-4xl">Purchase your cremation package with Poppy.</h2>
            <p className="text-white mb-8">Checkout online, or over the phone. </p>
            <Button type="button" title="Learn More" variant="btn_hot_pink"></Button>
          </div>
          {/* <Image src="https://assets-global.website-files.com/5f6147bccdfd345d7053123d/5f6cb37af24ea8bdc22e1a5d_leaves.svg" width={50} height={50} alt="" className="banner_bg_element" /> */}
        </div>
      </div>
    </section>
  )
}

export default HomeBannerCta
