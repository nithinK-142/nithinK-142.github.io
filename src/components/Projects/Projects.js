import React from 'react'
import "./Projects.css";
import ytstats from "../../images/ytstats.png"
import colorfire from "../../images/colorfire.png"
import tmdb from "../../images/tmdb.svg"
import nasa from "../../images/nasa.svg"

function Projects() {
  return (
    <section className="container pb-5">
    <div className="d-flex flex-wrap py-5">
        <h2 className="col-12 text-center pb-4">M y&nbsp;&nbsp;P r o j e c t s</h2>
        <div className="col-md-10 col-12 py-4 me-auto d-flex justify-content-center">
            <div className="col-12 p-5  workshop-bg-1 d-flex">
                <div className="col-md-8 col-12">
                    <h2><img src={ytstats} alt='ytstats'/>YouTube Video Stats</h2>
                    <p>This web application can retrieve statistics for a given YouTube video. It uses the YouTube API to fetch the view count, like count, and comment count for the video, and also displays the title, channel, published date, and can play that video. Additionally, it retrieves the dislike count for the video using a third-party API.</p>
                    <div className="pe-3">
                        <a className="text-dark" target="_blank" rel="noreferrer" href="https://github.com/nithinK-142/yt-video-stats-with-dislikes">
                            <i className="fab fa-github project"></i>
                        </a>
                    </div> 
                </div>
                <div className="my-auto text-end col-4 d-md-block d-none"><a target='_blank' rel="noreferrer" href="https://ytvideostats.netlify.app/"><i className="fas fa-3x fa-arrow-circle-right" style={{color: 'rgb(240, 109, 85)'}}>Live Demo</i></a></div>
            </div>
        </div>
        <div className="col-md-10 col-12 py-4 ms-auto d-flex justify-content-center">
            <div className="col-12 p-5  workshop-bg-2 d-flex">
                <div className="col-md-8 col-12">
                    <h2><img src={colorfire} alt='colorfire'/>Color Fire</h2>
                    <p>Color Fire is a web application that allows users to generate and save their favorite colors. It provides various features to manage and explore colors conveniently. </p>
                    <div className="pb-3">
                        <a className="text-dark" target="_blank" rel="noreferrer" href="https://github.com/nithinK-142/color-fire/"><i className="fab fa-github project"></i></a>
                    </div>
                </div>
                <div className="my-auto text-end col-4 d-md-block d-none"><a target="_blank" rel="noreferrer" href="https://colorfire.netlify.app/"><i className="fas fa-3x fa-arrow-circle-right" style={{color: 'black'}}>LIVE DEMO</i></a></div>
            </div>
        </div>

        <div className="col-md-10 col-12 py-4 me-auto d-flex justify-content-center">
            <div className="col-12 p-5  workshop-bg-1 d-flex">
                <div className="col-md-8 col-12">
                    <h2><img src={tmdb} alt='tmdb'/>TMDB Flicks</h2>
                    <p>This web app allows users to explore popular and top-rated movies sourced from the TMDB (The Movie Database). Users can conveniently switch between the two categories to explore different movie options.</p>
                    <div className="pe-3">
                        <a className="text-dark" target="_blank" rel="noreferrer" href="https://github.com/nithinK-142/tmdb-movies">
                            <i className="fab fa-github project"></i>
                        </a>
                    </div> 
                </div>
                <div className="my-auto text-end col-4 d-md-block d-none"><a target="_blank" rel="noreferrer" href="https://tmdbflicks.netlify.app/"><i className="fas fa-3x fa-arrow-circle-right" style={{color: 'rgb(240, 109, 85)'}}>Live Demo</i></a></div>
            </div>
        </div>
        <div className="col-md-10 col-12 py-4 ms-auto d-flex justify-content-center">
            <div className="col-12 p-5  workshop-bg-2 d-flex">
                <div className="col-md-8 col-12">
                    <h2><img src={nasa} alt='nasa'/>Nasa API Usage</h2>
                    <p>This web app uses NASA's API to display images from the NASA gallery. It includes a homepage and a navigation menu navigates to different sections of the website, such as the Astronomy Picture of the Day, a search function for the NASA gallery, and Mars pictures. The website also includes a CSS file for styling and a JavaScript file for functionality.</p>
                    <div className="pb-3">
                        <div className="pe-3"><a className="text-dark" target="_blank" rel="noreferrer" href="https://github.com/nithinK-142/NASA-API-usage/"><i className="fab fa-github project"></i></a></div>
                    </div>
                </div>
                <div className="my-auto text-end col-4 d-md-block d-none"><a target="_blank" rel="noreferrer" href="https://nasaapiusage.netlify.app/"><i className="fas fa-3x fa-arrow-circle-right" style={{color: 'black'}}>LIVE DEMO</i></a></div>
            </div>
        </div>
    </div>
    <div className="d-flex flex-wrap py-lg-5 py-3">
        <div className="col-lg-6 col-12 mx-auto work-inquiry p-lg-5 p-4 d-flex flex-wrap">
            <div className="col-lg-9 col-12">
                <h2>Work Inquiry</h2>
                <p className="m-0">Let's work together and I'll provide my utmost assistance.</p>
            </div>
            <div className="col-lg-3 col-6 my-auto pt-lg-auto pt-4"><a className="custom-button px-4 py-2" target="_blank" rel="noreferrer"  href="https://www.fiverr.com/nithin_webdev?up_rollout=true">Hire Me</a></div>
        </div>
    </div>

{/* <div class="d-flex flex-wrap py-lg-5 py-3">
    <div class="col-lg-4 col-md-6 col-12 mx-auto work-inquiry p-lg-4 p-3 d-flex flex-wrap">
        <div class="col-12">
            <h2>Work Inquiry</h2>
            <p class="m-0">Let's work together and I'll provide my utmost assistance</p>
            <div class="col-12 my-auto pt-lg-auto pt-3">
                <a className="custom-button px-4 py-2" target="_blank" rel="noreferrer"  href="https://www.fiverr.com/nithin_webdev?up_rollout=true">Hire Me</a>
            </div>
        </div>
    </div>
</div> */}
    </section>
  )
}

export default Projects