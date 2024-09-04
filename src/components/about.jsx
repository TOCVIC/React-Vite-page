import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>

          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          {" "}
          <img src="img/about2.jpg" className="img-responsive" alt="" />{" "}
        </div>
        <h2>What we do</h2>
        <ul>
          <p>
            As everyone knows, the demand for nurses and nursing education is
            high in the United States, United Kingdom and Canada. ONE is a
            liaison company aimed at helping those intending to migrate to these
            countries get quality nursing education. We do this by partnering
            with renowned and accredited schools of nursing across the African
            continent. It is an accelerated program that lasts through a period
            of 18 months with comprehensive curriculum that encompasses broad
            knowledge of nursing science, comprising of coursework and clinical
            education. Graduates will earn a B.S. Nursing degree and can
            challenge the NCLEX exams upon arrival in the United States or
            Canada or the NMC exams in the United Kingdom.
          </p>
        </ul>
      </div>
    </div>
  );
};
