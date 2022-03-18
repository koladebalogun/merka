import React, { useEffect } from "react"

import dotted from "../static/dotted.png"
import group66 from "../static/Group66.png"
import illus from "../static/illus.png"
import neon1 from "../static/Neon1.svg"
import neon2 from "../static/Neon2.svg"
import neon4 from "../static/Neon4.svg"
import box1 from "../static/box1.png"
import up from "../static/up.svg"
import circle from "../static/circle.png"
import box2 from "../static/box2.png"
import down from "../static/down.svg"
import dev from "../static/deve-illust.png"
import discuss from "../static/discuss.png"
import box3 from "../static/box3.png"
import box4 from "../static/box4.png"
import box5 from "../static/box5.png"
import line from "../static/line.svg"
import line2 from "../static/line2.svg"
import ill from "../static/2.svg"
import Person from "./svgs/person"


const Section = () => {
  

  return (
    <>
      <div className="section__wrapper">
        <div className="dotted-image">
          <img src={dotted} alt="" />
        </div>
        <div className="section__content">
          <div className="section__content-inner">
            <div className="section__content-inner-first">
              <div className="section__content-inner-first-contents">
                <h3 className="section__content-inner-first-contents-header">
                  We provide The Best To Protect Your <br />
                  Users And Their Investments
                </h3>
                <p className="section__content-inner-first-contents-text">
                  Merklabs is a reputed name in the field of <br /> blockchain
                  technology encompassing all the <br /> segments of this
                  revolutionary field. Pioneering <br /> the essence of
                  blockchain security and audits, we <br /> secure your present
                  and future through the <br />
                  parameters of technology.{" "}
                </p>
              </div>
              <div className="section__content-inner-first-image-wrapper">
                <div className="section__content-inner-first-image">
                  <img src={group66} alt="" />
                </div>
                <div className="section__content-inner-first-image-texts">
                  <div className="section__content-inner-first-image-texts-one">
                    <h3>100+</h3>
                    <p>blockchain companies protected</p>
                  </div>
                  <div className="section__content-inner-first-image-texts-two">
                    <h3>200+</h3>
                    <p>issues discovered</p>
                  </div>
                  <div className="section__content-inner-first-image-texts-three">
                    <h3>10,000+</h3>
                    <p>analyses available per month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__second-wrapper">
          <div className="section__second-image">
            <img src={illus} alt="" />
            <svg
              width="733"
              height="606"
              viewBox="0 0 733 606"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="neon"
            >
              <path
                d="M614.349 146.573C614.349 146.573 729.456 306.993 647.485 399.112C555.281 502.732 244.407 377.49 84.2485 247.521"
                stroke="url(#paint0_linear_0_1181)"
              />
              <g filter="url(#filter0_d_0_1181)">
                <circle
                  cx="82.3363"
                  cy="244.008"
                  r="8"
                  transform="rotate(151.441 82.3363 244.008)"
                  fill="white"
                />
                <circle
                  cx="82.3363"
                  cy="244.008"
                  r="13"
                  transform="rotate(151.441 82.3363 244.008)"
                  stroke="#08A0F5"
                  stroke-width="10"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_0_1181"
                  x="0.332886"
                  y="166.005"
                  width="164.007"
                  height="164.007"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="24"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_0_1181"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="20" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0313726 0 0 0 0 0.627451 0 0 0 0 0.960784 0 0 0 0.32 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_1181"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_1181"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_0_1181"
                  x1="132.834"
                  y1="267.756"
                  x2="570.834"
                  y2="485.126"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="section__second-content-wrapper">
            <div className="section__second-content-inner">
              <div className="section__second-content-inner-header">
                <h4>DEFI</h4>
                <h3>Scale the world of DeFi</h3>
              </div>
              <div className="section__second-content-text">
                <p>
                  Being the veterans in the blockchain <br /> industry, we
                  understand the hype of <br /> decentralized finance and the
                  contemporary <br /> optimizations in the financial sector and{" "}
                  <br /> hence taking the grasp of the moment , we <br /> have
                  developed exceptional projects in the <br /> world of DeFi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section__third-wrapper">
          <div className="section__third-content-wrapper">
            <div className="section__third-content-inner">
              <div className="section__third-content-inner-header">
                <h4>DAPPS</h4>
                <h3>Technology made easier</h3>
              </div>
              <div className="section__third-content-text">
                <p>
                  Decentralized applications have found a <br /> huge user base
                  right in the initial stage , and <br /> therefore we as a team
                  have gained <br />
                  extensive expertise into the creation of <br /> dapps.
                </p>
              </div>
            </div>
          </div>
          <div className="section__third-content-image">
            <img src={box1} alt="" className="box1" />
            <img src={up} alt="" className="up" />
            <img src={circle} alt="" className="circle" />
            <img src={down} alt="" className="down" />
            <img src={box2} alt="" className="box2" />
          </div>
        </div>
        <div className="section__fourth-wrapper">
          <div className="section__fourth-image">
            <img src={dev} alt="" />
            {/* <img src={neon2} alt="" className="neon" /> */}
            <svg
              width="733"
              height="606"
              viewBox="0 0 733 606"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="neon"
            >
              <path
                d="M118.166 145.735C118.166 145.735 3.05892 306.155 85.0298 398.274C177.234 501.894 488.108 376.652 648.266 246.684"
                stroke="url(#paint0_linear_0_1120)"
              />
              <g filter="url(#filter0_d_0_1120)">
                <circle
                  r="8"
                  transform="matrix(0.878322 0.478069 0.478069 -0.878322 650.179 243.17)"
                  fill="white"
                />
                <circle
                  r="13"
                  transform="matrix(0.878322 0.478069 0.478069 -0.878322 650.179 243.17)"
                  stroke="#08A0F5"
                  stroke-width="10"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_0_1120"
                  x="568.175"
                  y="165.167"
                  width="164.007"
                  height="164.007"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="24"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_0_1120"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="20" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0313726 0 0 0 0 0.627451 0 0 0 0 0.960784 0 0 0 0.32 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_1120"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_1120"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_0_1120"
                  x1="599.681"
                  y1="266.918"
                  x2="161.681"
                  y2="484.288"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="section__fourth-content-wrapper">
            <div className="section__fourth-content-inner">
              <div className="section__fourth-content-inner-header">
                <h4>AUDIT</h4>
                <h3>Stay secure and safe</h3>
              </div>
              <div className="section__fourth-content-text">
                <p>
                  Above all that matters is a secure and safe <br /> smart
                  contract that is free from any <br /> vulnerability and does
                  not hamper the <br />
                  investment of the various people who have <br /> trusted you.
                  We also provide auditing <br /> services , so that you can
                  stay assured of the <br />
                  security as we are quick in auditing and <br /> exposing the
                  bugs of your smart contract.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section__fifth-wrapper">
          <div className="section__fifth-content-wrapper">
            <div className="section__fifth-content-inner">
              <div className="section__fifth-content-inner-header">
                <h4>Expert</h4>
                <h3>Expert Review</h3>
              </div>
              <div className="section__fifth-content-text">
                <p>
                  Experience the guidance of various trained <br />{" "}
                  professionals and developers who are with <br /> you at every
                  phase of your projects. We not <br /> only develop your
                  project but also give out <br /> the best recommendations for
                  turning it into <br /> a huge success
                </p>
              </div>
            </div>
          </div>
          <div className="section__fifth-content-image">
            <img src={discuss} alt="" />
          </div>
        </div>
        <div className="section__six-wrapper">
          <div className="section__six-image">
            <img src={box3} alt="" className="box3" />
            <img src={box4} alt="" className="box4" />
            <img src={box5} alt="" className="box5" />
            <img src={line} alt="" className="line" />
            <img src={line2} alt="" className="line2" />
            <svg
              width="733"
              height="606"
              viewBox="0 0 733 606"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="line2"
            >
              <path
                d="M614.349 146.573C614.349 146.573 729.456 306.993 647.485 399.112C555.281 502.732 244.407 377.49 84.2485 247.521"
                stroke="url(#paint0_linear_0_1181)"
              />
              <g filter="url(#filter0_d_0_1181)">
                <circle
                  cx="82.3363"
                  cy="244.008"
                  r="8"
                  transform="rotate(151.441 82.3363 244.008)"
                  fill="white"
                />
                <circle
                  cx="82.3363"
                  cy="244.008"
                  r="13"
                  transform="rotate(151.441 82.3363 244.008)"
                  stroke="#08A0F5"
                  stroke-width="10"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_0_1181"
                  x="0.332886"
                  y="166.005"
                  width="164.007"
                  height="164.007"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="24"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_0_1181"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="20" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0313726 0 0 0 0 0.627451 0 0 0 0 0.960784 0 0 0 0.32 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_1181"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_1181"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_0_1181"
                  x1="132.834"
                  y1="267.756"
                  x2="570.834"
                  y2="485.126"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="section__six-content-wrapper">
            <div className="section__six-content-inner">
              <div className="section__six-content-inner-header">
                <h4>SMART CONTRACT</h4>
                <h3>Experience the Revolution</h3>
              </div>
              <div className="section__six-content-text">
                <p>
                  Merklabs has efficient developers with <br /> exceptional
                  coding skills that can create any <br /> type of smart
                  contract you desire and with <br /> scalable and secure code.
                  You desire, we <br /> create it for you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section__seventh-wrapper">
          <div className="section__seventh-content-wrapper">
            <div className="section__seventh-content-inner">
              <div className="section__seventh-content-inner-header">
                <h4>LAUNCHPAD</h4>
                <h3>Stabilize and Promote</h3>
              </div>
              <div className="section__seventh-content-text">
                <p>
                  Amidst the competition in the Defi space,
                  <br /> good marketing strategy and <br /> implementation plays
                  the key role to stabilize <br />
                  and promote your growth in the blockchain <br /> industry.
                  Retaining this awareness, we can <br /> develop launchpad and
                  IDO for your presale <br /> and ICO.
                </p>
              </div>
            </div>
          </div>
          <div className="section__seventh-content-image">
            {/* <img src={ill} alt="" /> */}
            <Person />
          </div>
        </div>
      </div>
    </>
  )
}

export default Section
