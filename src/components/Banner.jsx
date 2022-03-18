import React, { useEffect } from "react"
import icon from "../static/package.svg"
import Group from "../static/Group.svg"
import bitcoinLogo from "../static/bitcoin-logo.png"
import socials from "../static/social.svg"
import hero from "../static/hero-bg.svg"
import logo1 from "../static/logo1.png"
import logo2 from "../static/logo4.png"
import logo3 from "../static/logo3.png"
import logo4 from "../static/logo5.png"
import connections from "../static/connections.svg"
import gsap from "gsap"
import Connections from "./svgs/connections"

const Banner = () => {
  const tl = gsap.timeline()

  useEffect(() => {
    gsap.to("body, .Banner__wrapper", 0, { css: { visibility: "visible" } })

    tl.from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 2,
      skewY: 10,
      stagger: {
        amount: 0.3,
      },
    })
    .to(".top", 1.6, {
      height: 0,
      ease: "power4.out",
      // stagger: 0.4
    })
  }, [])

  return (
    <>
      <div className="Banner__wrapper">
        <div className="Banner__content">
          <div className="Banner__content-inner">
            <div className="Banner__content-inner_icon">
              <h4>PK194-ABI</h4>
              <p>San Francisco</p>
              <img
                src={icon}
                alt=""
                className="Banner__content-inner_icon_image"
              />
            </div>
            <div className="Banner__content-inner_header">
              <h1>
                <div className="line">
                  <span>
                    MERKLABS BLOCKCHAIN <br />
                  </span>
                </div>
                <div className="line">
                  <span>
                    DEVELOPMENT AND{" "}
                    <img
                      src={icon}
                      alt=""
                      className="Banner__content-inner_header_image"
                    />
                    <br />
                  </span>
                </div>
                <div className="line">
                  <span>SECURITY SOLUTIONS</span>
                </div>
              </h1>
              <button className="Banner__content-inner_button">
                Explore More
              </button>
            </div>
            <div className="Banner__content-inner_image">
              <img
                src={Group}
                alt=""
                className="Banner__content-inner_btc-bg"
              />
              <img
                src={bitcoinLogo}
                alt=""
                className="Banner__content-inner_btc"
              />
            </div>
            <div className="Banner__content-inner-socials">
              <img
                src={socials}
                alt=""
                className="Banner__content-inner-socials__icon"
              />
            </div>
          </div>
        </div>
        <div className="Banner__content-hero">
          <img src={hero} alt="" className="Banner__content-hero__image" />
          <div className="Banner__content-hero__connection">
            {/* <img src={connections} alt="" /> */}
            <Connections />
          </div>
        </div>
        <div className="overlay">
          <div className="top"></div>
        </div>
        <div className="Banner__card">
          <div className="Banner__intro-card">
            <div className="Banner__intro-card_inner">
              <div className="Banner__intro-card_header">
                <h3>Trusted by Leading Dapp Teams and Enterprises</h3>
                <div className="Banner__intro-card_contents">
                  <img src={logo1} alt="" />
                  <img src={logo2} alt="" />
                  <img src={logo3} alt="" />
                  <img src={logo4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
