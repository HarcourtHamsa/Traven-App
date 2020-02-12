import React from "react";
import my_event_pic from "../pictures/new_event.jpg";

export default function Main() {
  return (
    <div>
      <div className="container">
        <p className="text-center h2">Upcoming Projects <i className="fa fa-star"></i></p>

        <div className="row mt-5">
          {/* <!-- Content Column --> */}
          <div className="col mb-4 ">
            {/* <!-- Project Card Example --> */}
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-md-6 mb-4 text-center">
                  <div className="card border-0 shadow rounded-lg">
                    <img src={my_event_pic} class="card-img-top" alt="..." />
                    <div className="card-body text-center">
                      <p className="card-title h5 text-primary">
                        Give back week
                      </p>
                      <p>
                        This is an event that seeks to solve real life problems.
                        This is an event that seeks to solve real life problems.
                      </p>
                      <a href="/" className="btn btn-outline-primary">
                        Learn more
                      </a>
                      <p className="mb-0 text-right">
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-md-6 mb-4 text-center">
                  <div className="card border-0 shadow rounded-lg">
                    <img src={my_event_pic} class="card-img-top" alt="..." />
                    <div className="card-body text-center">
                      <p className="card-title h5 text-primary">Polixe</p>
                      <p>
                        This is an event that seeks to solve real life problems.
                        This is an event that seeks to solve real life problems.
                      </p>
                      <a href="/" className="btn btn-outline-primary">
                        Learn more
                      </a>
                      <p className="mb-0 text-right">
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" p-5">
        <p className="h2 text-center mt-5">A little bit about me! <i className="fa fa-laptop"></i></p>
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-sm p-3 text-left">
              My name is Harcourt Hamsa, I am a nigerian (yeah i know) . I am a
              passionate software developer and to be sincere, I am self taught.
              I loveeee <i className="fa fa-heart text-danger"></i> collabortion
              & networking ( i think i am actually obsessed ) . I code using the
              PERN stack (Postgres, React, Express and Node.js).
              <div className="mt-3">
                <i className="fa fa-facebook h1 pl-2"></i>
                <i className="fa fa-twitter h1 pl-2"></i>
                <i className="fa fa-github h1 pl-2"></i>
                <i className="fa fa-instagram h1 pl-2"></i>
              </div>
            </div>
            <div className="col-sm">
              <img src="" alt="my_picture" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="h2 text-center">Yikes i am  social <i className="fa fa-thumbs-up"></i></p>
        <div className="h3 p-3 text-center">
          <i className="fa fa-facebook h1 pl-2"></i>
          <i className="fa fa-twitter h1 pl-2"></i>
          <i className="fa fa-github h1 pl-2"></i>
          <i className="fa fa-instagram h1 pl-2"></i>
        </div>
      </div>
    </div>
  );
}
