import "./hero.styles.scss";
import { LB } from "../../utils/data";

export default function Hero() {
  return (
    <div className="main-hero-container" id="home">
      <div className="container hero__content">
        <div className="hero__text">
          <h1>Beauty & wellness {LB} elevated.</h1>

          <p className="hero-description">
            A luxury salon experience specialising in healthy hair, scalp
            wellness, restoratiove beauty & elevated self care.
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
