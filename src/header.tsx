import "./header.css";

import hhLogo from "./assets/HeadHunter_logo.png";

import { useState } from "react";

import type { MouseEvent } from "react";

function Header() {
  const phone = "+79606918578";

  const [copied, setCopied] = useState(false);

  async function phoneClick(
    event: MouseEvent<HTMLAnchorElement>,
  ) {
    const isMobile =
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth <= 700;

    /*
      На телефоне href="tel:"
      сам открывает звонок.
    */
    if (isMobile) {
      return;
    }

    /*
      На компьютере копируем номер.
    */
    event.preventDefault();

    try {
      await navigator.clipboard.writeText(phone);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      console.log("Не удалось скопировать номер");
    }
  }

  return (
    <header className="link-container">
      <div className="button-container">
        <a
          className="link-HH link-button"
          href="https://hh.ru/resume/d25e4649ff108679c30039ed1f627a66633236?hhtmFrom=main"
          target="_blank"
          rel="noreferrer"
          aria-label="HeadHunter"
        >
          <img
            src={hhLogo}
            alt="HeadHunter"
          />
        </a>

        <a
          className="link-habr link-button link-underline"
          href="https://career.habr.com/arlekin20"
          target="_blank"
          rel="noreferrer"
        >
          <div className="habr-text">
            habr
          </div>
        </a>

        <a
          className="link-resume link-button link-underline"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <div className="resume-text">
            резюме
          </div>
        </a>

        <a
          className="link-projects link-button link-underline"
          href="#projects"
        >
          <div className="project-text">
            проекты
          </div>
        </a>
      </div>

      <div className="contacts-container">
        <div className="tg-container">
          <div className="preferred-contact">
            предпочтительный способ связи

            <span className="preferred-arrow">
              →
            </span>
          </div>

          <a
            className="link-tg link-button link-underline"
            href="https://t.me/arlekin_11"
            target="_blank"
            rel="noreferrer"
          >
            <div className="tg-text">
              tg
            </div>
          </a>
        </div>

        <div className="phone-container">
          <a
            className="link-number link-button link-underline"
            href={`tel:${phone}`}
            onClick={phoneClick}
          >
            <div className="number-text">
              +7 960 691 85 78
            </div>
          </a>

          {copied && (
            <div className="copy-message">
              номер скопирован ✓
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;