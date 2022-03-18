import React, { useEffect } from "react"
import gsap from "gsap"

const Navbar = () => {
  const tl = gsap.timeline()

  useEffect(() => {
    gsap.to("body, .main-container", 0, { css: { visibility: "visible" } })

    tl.from(".logoline, .span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 0.9,
      skewY: 10,
      opacity: 0,
      stagger: {
        amount: 0.3,
      },
    })
    .to(".logoline, .span", 1.8, {
      ease: "power4.out",
      delay: 0.9,
      opacity: 1,
      stagger: {
        amount: 0.3,
      },
    })
  }, [])
  return (
    <div>
      <nav>
        <ul>
          <li className="logo">
            <div className="logoline">
              <span className="span">Merka</span>
            </div>
          </li>
          <li>Home</li>
          <li>Projects</li>
          <li>Service</li>
          <li>Blog</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
