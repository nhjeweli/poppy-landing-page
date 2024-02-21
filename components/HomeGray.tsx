import Image from "next/image"
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6"

const HomeGray = () => {
  return (
    <section className="home-gray">
      <div className="padding-container max-container">
        <div className="text-center my-20">
          <h2 className="regular-40 bold-40">When will you need Poppy?</h2>
          <p className="regular-20 text-gray-30 ">Click to select the timing for our services.</p>
        </div>

        <div className="flex justify-center md:flex-col sm:flex-col md:gap-4 sm:gap-6">
          <div className="grow basis-0 max-w-full">
            <Link href="basic-contact.php" className="home_gray_card hover:shadow-lg transition">
              <div className="ml-20">
                <Image src="/5f778621cd59b4fe3a00e6ef_services future.png" alt="" width={240} height={300} />
                <p className="mb-3">
                  <strong className="text-gray-800 mb-4 text-lg leading-7 font-semibold">Now</strong>
                </p>
                <p className="mb-3">Someone recently passed away.</p>
                <div className="flex items-center gap-2 text-hotPink-10 text-sm font-bold p-0 uppercase">
                  Get Started <FaArrowRightLong />
                </div>
              </div>
            </Link>
          </div>
          <div className="grow basis-0 max-w-full">
            <Link href="#home_gray" className="home_gray_card hover:shadow-lg transition">
              <div className="ml-20">
                <Image src="/5f77862163b7828a6055edbe_servicesnow.png" alt="" width={240} height={300} />
                <p className="mb-3">
                  <strong className="text-gray-800 mb-4 text-lg leading-7 font-semibold">In the Future</strong>
                </p>
                <p className="mb-3">I am planning for a loved one who may pass soon.</p>
                <div className="flex items-center gap-2 text-hotPink-10 text-sm font-bold p-0 uppercase">
                  Get Started
                  <FaArrowRightLong />
                </div>
              </div>
            </Link>
          </div>

          {/* <div className="services_modal">
            <div className="services_modal-content">
              <i className="uil uil-times services_modal-close"></i>

              <div className="contact-us-card popup_card">
                <div className="block-text-contact">
                  <div className="flex">
                    <span className="welcome-line"></span>
                    <h4>get in touch</h4>
                  </div>
                  <h3>Pre-arrange today</h3>
                  <p>If you believe a loved-one may pass soon, leave your information or call us, and we can arrange everything before your time of need.</p>

                  <p>Pre-arranging can help reduce the burden of filling out paperwork in a time of grief, and you won't be charged until you need our services.</p>
                </div>
                <div className="form">
                  <form id="form-Contact-Us" name="" data-name="">
                    <ul className="container_grid popup_grid">
                      <li>
                        <label className="field-label">First Name</label>
                        <input type="text" className="input" name="First" data-name="First" placeholder="First" id="First" required />
                      </li>
                      <li>
                        <label className="field-label">Last Name</label>
                        <input type="text" className="input" name="Last" data-name="Last" placeholder="Last" id="Last" required />
                      </li>
                      <li>
                        <label className="field-label">Email</label>
                        <input type="text" className="input" name="Email-3" data-name="Email 3" placeholder="Email" id="Email-3" required />
                      </li>
                      <li>
                        <label className="field-label">Phone</label>
                        <input type="text" className="input" name="Phone-Number" data-name="Phone Number" placeholder="(541) 754-3010" id="Phone-Number" required />
                      </li>
                    </ul>
                    <input type="submit" value="submit message" data-wait="Please wait..." className="button-primary" />
                  </form>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default HomeGray
