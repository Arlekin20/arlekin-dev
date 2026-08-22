import "./App.css";

import Header from "./header";

import gitLogo from "./assets/gitLogo.png";

function App() {
  return (
    <div className="all-site-setting">
      <Header />

      <main>
        <div className="main-container">
          <div className="hero-container">
            <div className="myName">
              Александр Соловьев
            </div>

            <div className="blue-box">
              <div className="blue-text">
                <div className="myDream">
                  Frontend-разработчик
                </div>

                <div className="myStack-container">
                  <div className="myStack">
                    Мой Stack
                  </div>

                  <div className="stack">
                    JavaScript · TypeScript · React
                    <br />
                    HTML · CSS · Vite · Git · REST API
                    <br />
                    GitHub Actions
                  </div>
                </div>
              </div>
            </div>

            <div className="myPortfolio">
              <a
                className="link-git link-button"
                href="https://github.com/Arlekin20"
                target="_blank"
                rel="noreferrer"
              >
                <div className="git-container">
                  <img
                    src={gitLogo}
                    alt="GitHub"
                  />

                  <div className="gitName">
                    GitHub ↗
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="about-container">
            <div className="about-me">
              <div className="about-me__p">
                Обо мне
              </div>

              <div className="about-me__maintext">
                Развиваюсь во frontend-разработке и создаю
                веб-приложения на React и TypeScript.
                <br />
                <br />
                Люблю разбираться не только в интерфейсе,
                но и в том, как приложение работает целиком:
                API, Git, деплой и взаимодействие с backend.
              </div>
            </div>
          </div>
        </div>

        <section
          className="projects-section"
          id="projects"
        >
          <div className="projects-title">
            Проекты
          </div>

          <div className="projects-container">
            <div className="project-card project-card-main">
              <div className="project-number">
                01
              </div>

              <div className="project-name">
                MockForge
              </div>

              <div className="project-description">
                Сервис для создания mock API endpoints
                для frontend-разработки.
              </div>

              <div className="project-stack">
                React · TypeScript · Node.js · Express
              </div>

              <div className="project-links">
                <a
                  href="https://mockforge.arlekin-dev.ru/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live ↗
                </a>

                <a
                  href="https://github.com/Arlekin20/MockForge"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <div className="project-card project-card-soon">
              <div className="project-number">
                02
              </div>

              <div className="project-name">
                Coming soon
              </div>

              <div className="project-description">
                Следующий проект уже скоро.
              </div>
            </div>

            <div className="project-card project-card-soon">
              <div className="project-number">
                03
              </div>

              <div className="project-name">
                Coming soon
              </div>

              <div className="project-description">
                Здесь появится новый проект.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;