import "./hero.styles.scss";

export default function Hero() {
  return (
    <div className="main-hero-container" id="home">
      <div className="container hero__content">
        <div className="hero__text">
          <h1>
            Beauty begins
            <span>with relaxation.</span>
          </h1>

          <p className="hero-description">
            Escape the everyday & discover a luxurious experience designed to
            make you feel refreshed, confident, and beautiful.
          </p>

          <div className="hero-buttons">
            <a href="#appointment" className="btn btn--gold">
              Book Your Visit
            </a>

            <a href="#services" className="btn btn--outline">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 
 *           <div className="hero__circle">
            <div className="hero__circle-inner">
              <span>EST.</span>
              <strong>2014</strong>
            </div>
          </div>
 * 
 * 
 */
