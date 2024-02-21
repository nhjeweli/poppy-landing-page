import React from "react"

const AboutCustomers = () => {
  return (
    <section className="about_customer">
      <div className="flex md:flex-col sm:flex-col gap-20 padding-container max-container">
        <aside className="content-wrap-left">
          <div className="sticky-sidebar">
            <div className="flex flex-col">
              <h2>
                What our customers say about us
                <span className="text-hotPink-10">.</span>
              </h2>
              <p className="text-gray-600">When you need help, we'll be there for you too. </p>
            </div>
          </div>
        </aside>

        <div className="content-wrap-right">
          <div className="card_base-2 ">
            <p className="mb-8">Getting to spread my mom’s ashes at the pond next to our farm was the perfect way to put her to rest. I didn’t want to go back and forth to a funeral parlor. No one really enjoys thinking about this aspect of the end of life, but you made it painless. Thank you.</p>

            <div className="author_content">
              {/* <Image src="https://assets-global.website-files.com/5f6147bccdfd345d7053123d/5f6cc5de185d1053cab90ecf_Mary_testimonial.jpg" alt="" width={50} height={50} /> */}
              <h4>
                Maryann G.<span> | Golden, Colorado</span>
              </h4>
            </div>
          </div>
          <div className="card_base-2">
            <p className="mb-8">I was visiting family in Maine, and my father was back home in Colorado. Hearing he passed was not easy, and he didn’t have any plans for how he wanted his memorial, besides being cremated. Poppy was the only provider I found who made things clear and straightforward. </p>
            <div className="author_content">
              {/* <Image src="https://assets-global.website-files.com/5f6147bccdfd345d7053123d/5f6cc5de185d1053cab90ecf_Mary_testimonial.jpg" alt="" width={50} height={50} /> */}
              <h4>
                Steve H.<span> | Denver, Colorado</span>
              </h4>
            </div>
          </div>
          <div className="card_base-2">
            <p className="mb-8">I was visiting family in Maine, and my father was back home in Colorado. Hearing he passed was not easy, and he didn’t have any plans for how he wanted his memorial, besides being cremated. Poppy was the only provider I found who made things clear and straightforward. </p>
            <div className="author_content">
              {/* <Image src="https://assets-global.website-files.com/5f6147bccdfd345d7053123d/5f6cc5de185d1053cab90ecf_Mary_testimonial.jpg" alt="" width={50} height={50} /> */}
              <h4>
                Steve H.<span> | Denver, Colorado</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCustomers
