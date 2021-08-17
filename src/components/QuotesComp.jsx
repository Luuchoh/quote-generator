import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/button-styles.css";

const QuotesComp = () => {

  const [quote, setQuote] = useState("");

  const API = async () => {
    try {
      const { data } = await axios.get("https://api.quotable.io/random");
      setQuote(data);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    API();
  }, []);

  return (
    <div>
      <section className="vh-100 bg-light">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-5">
              <div className="card text-white">
                <div className="card-body p-5">
                  <i className="fas fa-quote-left fa-2x mb-4 text-black"></i>

                  <p className="lead text-black">{quote.content}</p>

                  <hr />

                  <div className="d-flex justify-content-between">
                    <p className="mb-0 text-black">{quote.author}</p>
                    <h6 className="mb-0">
                      <span className="badge rounded-pill text-black">
                        {quote.dateAdded}
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="container-wrapper">
                <button className="next" onClick={API}>
                  <span>Siguiente</span>
                </button>
                <a className="twitter" href={`https://twitter.com/intent/tweet?text=${quote.content}%0A%0A${quote.author}`} target="_blank">
                  <i className="fab fa-twitter text-primary"></i>
                  <span>Twittear</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotesComp;
