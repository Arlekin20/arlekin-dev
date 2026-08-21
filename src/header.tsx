import "./header.css";
import hhLogo from "./assets/HeadHunter_logo.png";
function Header() {
  return (
    <div className="link-container">
      <div className="button-container">
        <a
          className="link-HH link-button"
          href="https://hh.ru/resume/d25e4649ff108679c30039ed1f627a66633236?hhtmFrom=main"
          target="_blank"
          rel="noreferrer"
        >
          <img src={hhLogo} alt="HeadHunter" />
        </a>
        <a
          className="link-habr link-button"
          href="https://career.habr.com/arlekin20"
          target="_blank"
          rel="noreferrer"
        >
          <div className="habr-text">habr</div>
        </a>
        <a
          className="link-resume link-button"
          href="none"
          target="_blank"
          rel="noreferrer"
        >
          <div className="resume-text">резюме</div>
        </a>
        <a
          className="link-projects link-button"
          href="https://mockforge.arlekin-dev.ru/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-text">проекты</div>
        </a>
      </div>
      <div className="contacts-container">
        <a
          className="link-tg link-button"
          href="https://t.me/arlekin_11"
          target="_blank"
          rel="noreferrer"
        >
          <div className="tg-text">tg</div>
        </a>
        <a
          className="link-number link-button"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <div className="number-text">+7 960 691 85 78</div>
        </a>
      </div>
    </div>
  );
}
export default Header;
