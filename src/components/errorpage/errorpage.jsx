import "./errorpage.styles.scss";

export default function Errorpage() {
  return (
    <div className="error-container">
      <h3>
        Oooooops! You've reached the 404 errorpage sorry about that! Click the
        button below to go back home or restart your browser!
      </h3>

      <a href="#home">
        <button type="button" className="error-btn">
          Home
        </button>
      </a>
    </div>
  );
}
