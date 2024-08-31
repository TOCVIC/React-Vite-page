import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
        <h2>PARTNERSHIP AND AFFILIATION</h2>
        <p>ONE is open to collaborating with accredited Universities across Africa to expand the opportunity we
offer.
However, our agency is currently affiliated with two universities to provide efficient learning scope to
our students. Our curriculum is well detailed and meets the standard of Nursing Councils across the
globe.
<li>ISSIC UNIVERSITY BENIN
Derriere Mosque Seyive, PK11
Cotonou, Benin Repulic</li>
<li>VALLEY VIEW UNIVERSITY
Mile 19, Off the Adenta-Dodowa Road
RV2J+886</li>

Oyibi, Ghana</p>
          <h2>What our clients say</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
