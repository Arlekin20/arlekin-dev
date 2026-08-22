import "./App.css";
import Header from "./header";
import gitLogo from "./assets/gitLogo.png";
function App() {
  return (
    <>
      <div className="all-site-setting">
        <Header />
        <main>
          <div className="main-container">
            <div className="hero-container">
              <div className="myName">Александр Соловьев</div>
              <div className="blue-box">
                <div className="blue-text">
                  <div className="myDream">
                    хочу стать frontend-разработчиком
                  </div>
                  <div className="myStack-container">
                    <div className="myStack">Мой Stack</div>
                    <div className="stack">
                      JavaScript · TypeScript · React <br /> HTML · CSS Vite ·
                      Git · REST API
                      <br /> GitHub Actions
                    </div>
                  </div>
                </div>
              </div>

              <div className="myPortfolio">
                мои проекты |
                <a
                  className="link-git link-button"
                  href="https://github.com/Arlekin20"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="git-container">
                    <img src={gitLogo} alt="githubLogo" />
                    <div className="gitName">GitHub</div>
                  </div>
                </a>
              </div>
              <div className="projects-container">
                <div className="project-card">
                  <div className="black">MockForge</div>
                </div>

                <div className="project-card"><div className="black"></div></div>

                <div className="project-card"><div className="black"></div></div>
              </div>
            </div>
            <div className="about-container">
              <div className="about-me">
                <div className="about-me__p">Обо мне</div>
                <div className="about-me__maintext">
                  Развиваюсь во frontend-разработке и создаю веб-приложения{" "}
                  <br />
                  на React и TypeScript. Люблю разбираться не только
                  <br /> в интерфейсе, но и в том, как приложение работает
                  целиком: API, Git, деплой и взаимодействие с backend.
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
