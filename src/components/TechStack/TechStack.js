import React from 'react'
import "./TechStack.css"

function TechStack() {
  return (
    <>
    <div className="d-flex flex-wrap py-md-5 py-3 mt-5">
        <div className="container">
            <h2 className="col-12 text-center pb-4">M y&nbsp;&nbsp;T e c h&nbsp;&nbsp;S t a c k</h2>
            <div className="row gap-4">
                <div className="col text-center">
                    <div className="d-flex align-items-center justify-content-center mb-4 rounded-circle mx-auto"><i className="fab fa-html5 fa-2x"></i></div>
                    <h4 className="mb-4 border-bottom pb-4"><strong>FrontEnd</strong></h4>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Redux</p>
                    <p>TailwindCSS</p>
                    <p>Bootstrap</p>
                    <p>jQuery</p>
                    <p>APIs</p>
                </div>
                <div className="col text-center">
                    <div className="d-flex align-items-center justify-content-center w-16 h-16 mb-4 rounded-circle mx-auto"><i className="fa-solid fa-code fa-2x"></i></div> 
                    <h4 className="mb-4 border-bottom pb-4"><strong>BackEnd</strong></h4>
                    <p>NodeJS</p>
                    <p>MySQL</p>
                    <p>PHP</p>
                    <p>MongoDB</p>
                    <p>Mongoose</p>
                    <p>Python</p>
                    <p>Java</p>
                </div>
                <div className="col text-center">
                    <div className="d-flex align-items-center justify-content-center w-16 h-16 mb-4 rounded-circle mx-auto"><i className="fa-solid fa-screwdriver-wrench fa-2x"></i></div>
                    <h4 className="mb-4 border-bottom pb-4"><strong>Tools</strong></h4>
                    <p>Git</p>
                    <p>GitHub</p>
                    <p>Heroku</p>
                    <p>Netlify</p>
                    <p>Firebase</p>
                    <p>VSCode</p>
                    <p>Postman</p>
                    <p>TypeScript</p>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default TechStack