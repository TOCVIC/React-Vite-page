import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Who Can Apply</h2>
          <p>
            To be admitted into any of our affiliate universities, candidate
            must have, at least, a (Second Class Lower) Bachelor’s degree in
            health-related courses such as 
            <li>Public Health</li>
             <li>Microbiology Anatomy</li>
           <li> Physiology</li> 
            <li>Biomedical sciences</li> 
            <li>Medical Laboratory science Nutrition</li>
            <li>Medicine</li>
            <li>Pharmacy etc</li>
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
