import "./App.css";
import Header from "./header"
function App() {
  return (
    <>
      <Header />
      <main>
        <div className="hero-container">
          <div className="myName">Александр Соловьев</div>
          <div className="myDream">хочу стать frontend-разработчиком</div>
          <div className="myStack-container">
            <div className="myStack">Мой Stack</div>
            <div className="stack">
              JavaScript, (TypeScript), React, (React hooks), Vite, Git/Github,
              (Git actions), HTML, CSS, (Fetch API / REST API), (npm),
              (адаптивная верстка){" "}
            </div>
          </div>
          <div className="myPortfolio">Мои проекты</div>
        </div>
      </main>
    </>
  );
}

export default App;
