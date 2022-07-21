import logo from "../../assets/image 1.svg"
import './styles.css'

function Header() {
  return (
    <header>
      <div className="dsemeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por{" "}
          <a href="https://github.com/HYuleZ" target="_blank">
            @HYuleZ
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
