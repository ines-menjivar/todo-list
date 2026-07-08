import "./styles/App.css";

function App() {
  const todos = [
    "Set up my weekly React project",
    "Commit and push to GitHub",
    "Render my first React UI"
  ];

  return (
    <div className="cute-wrapper">
      <h1 className="cute-title">My Weekly React Project</h1>
      <ul className="cute-list">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
