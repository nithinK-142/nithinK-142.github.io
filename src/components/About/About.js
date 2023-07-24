import React from "react";

function About() {
  return (
   <div className="p-2 dark-bg">
      <div className="container py-5 px-3">
         <h2>About Me</h2>
         <div className="d-flex flex-wrap justify-content-center align-items-center">
            <div className="col-lg-6 col-12 mb-auto">
                  <p className="col-11">
                     Passionate &amp; proficient in Front-End technologies such as
                     HTML5, CSS3, Bootstrap, JavaScript, React.Js apart from this,
                     I have good knowledge in PHP &amp; MySQL for Back-End. Focused
                     on user-friendly interfaces &amp; continuous learning to stay
                     ahead in the ever-evolving industry. Collaborative team player &amp;
                     dedicated to staying updated on the latest trends.
                  </p>
            </div>
            <div className="col-lg-6 col-12">
                  <h4 className="mb-3">
                     <strong>Any Query &amp; Discussion</strong>{" "}
                  </h4>
                  <h5>
                     {" "}
                     <a className="text-white" href="mailto:nithin.sagar.359@gmail.com">
                     <i className="fas fa-envelope pe-2"></i>{" "}
                        nithin.sagar.359@gmail.com
                     </a>
                  </h5>
                  <div className="pt-4">
                     <a href="./NithinV1.pdf" className="custom-button px-4 py-2">
                        <i className="fa fa-download"></i> Resume
                     </a>
                  </div>
            </div>
         </div>
      </div>
   </div>
  );
}

export default About;
