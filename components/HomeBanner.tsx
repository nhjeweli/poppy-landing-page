import Image from "next/image"
import React from "react"
import Button from "./Button"

const HomeBanner = () => {
  return (
    <section className="home_banner">
      <div className="padding-container max-container">
        <div className="home_cta_banner ">
          <div className="cta_banner_content">
            <div className="flex">
              <span className="line"></span>
              <h4 className="text-hotPink-10 uppercase">Welcome</h4>
            </div>
            <h2 className="text-gray-800 text-5xl font-normal mb-5">Transparent pricing, for everyone.</h2>
            <p className="text-gray-600 mb-10">No custom quotes, no misleading extras or add-ons. We include everything you'll need, from transportation to cremation, and delivery of your loved one's ashes back to you. </p>
            <Button type="button" title="See Pricing" variant="btn_hot_pink"></Button>
          </div>
          <div className="cta_banner_bg">
            <Image src="/5f6cb98a48bcf55c67aa302c_5f6a8154ab435569106ad819_creamation-online.jpg" alt="" width={425} height={541} className="md:w-full sm:w-full" />
          </div>
          <Image src="/5f6a835e6028c3042579f1b0_deckle-edge.jpg" alt="" className="cta_after_bg w-4/5 -z-50 md:w-full sm:w-full" width={240} height={300} />
        </div>
      </div>
    </section>
  )
}

export default HomeBanner
