import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="py-4 dark-bg footer">
        <div className="text-center">
            <h2 className="mb-4">Let's Connect</h2>
            <p className="m-0">
                <small>Bangalore, India</small>
            </p>
            <a href="mailto:nithin.sagar.359@gmail.com" className="m-0 text-white">
                <strong>nithin.sagar.359@gmail.com</strong>
            </a>
            <p>(+91) 78922 82185</p>
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
            <p className="mt-4 mb-0 me-3 copyright">Copyright &copy; 2023 All Righs Reserved.</p>
        </div>
    </section>
  );
}

export default Footer;
