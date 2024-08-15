import React from 'react'

export default function About(props) {
    return (
        <>

            {/* <div id="carouselExampleIndicators" className="carousel slide bg-secondary">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://static.vecteezy.com/packs/media/vector/hero-800px-cc1b446b.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.istockphoto.com/id/1163589059/photo/about-us.jpg?s=612x612&w=0&k=20&c=xiAumkYaKpQc3xepslDpn-lFhYPae6ivX_rRkgSXJgs=" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}


            <div className="mb-3 my-3 " >
                <label for="exampleFormControlInput1" className="form-label"><h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.heading1}</h2></label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"><h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.heading2}</h2></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button onClick={props.EnableDarkMode} type="button" className="btn btn-secondary mx-3 my-3">Switch {props.mode} Theme</button>

        </>
    )
}
