import React from 'react'
import "./Intro.css"
import user from "../../images/user.png";


function Intro() {
  return (
    <section className="container py-5 my-md-5">
        <div className="d-flex flex-wrap justify-content-center align-items-center hero-sec">
            <div className="col-lg-6 col-12 px-3 text-lg-start text-center">
                <h1 className="pb-2">NITHIN</h1>
                <p className="m-0">
                    Developer, Programmer
                    <br /> &amp; Tech Enthusiast
                </p>
                <div className="d-flex social pt-3">
                    <div className="pe-3">
                        <a className="text-white" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nithin142/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="pe-3">
                        <a className="text-white" target="_blank" rel="noreferrer" href="https://github.com/nithinK-142">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    <div className="pe-3">
                        <a className="text-white" target="_blank" rel="noreferrer" href="https://www.instagram.com/_nithin142/">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    <div className="pe-3">
                        <a className="text-white" target="_blank" rel="noreferrer" href="https://twitter.com/_nithin142">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                    <div className="pe-3">
                        <a className="text-white" href="mailto:nithin.sagar.359@gmail.com">
                            <i className="fa fa-envelope"></i>
                        </a>
                    </div>
                </div>
                <div className="pt-5">
                    <a  className="custom-button px-4 py-2" target="_blank" rel="noreferrer" href="https://www.fiverr.com/nithin_webdev?up_rollout=true">
                        Hire Me
                    </a>
                </div>
            </div>
            <div className="col-lg-6 d-lg-block d-none">
                <img src={user} alt="Nithin K" className="avatar w-10" />
            </div>
        </div>
    </section>
  )
}

export default Intro