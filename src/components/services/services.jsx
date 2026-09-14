import "./services.styles.scss";
import { services } from "../../utils/data";

export default function Services() {
  return (
    <div className="services" id="services">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">OUR SERVICES</p>
          <h2>
            Indulge in <em>you.</em>
          </h2>
          <p className="description">
            From head to toe, every treatment is created to help you look and
            feel your absolute best.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, key) => (
            <div className="service-card" key={key}>
              <div className="service-card__icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <a href="#appointment">
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
