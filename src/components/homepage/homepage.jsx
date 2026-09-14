import "./homepage.styles.scss";
import { Navbar, Hero, Services } from "../componentExports";
import { div } from "../../utils/data";

export default function Homepage() {
  return (
    <>
      <section className="main-header-container">
        <Navbar />
      </section>

      <section className="main-body-container">
        <Hero />
        {div}
        <Services />
      </section>

      <section className="main-footer-container"></section>
    </>
  );
}
