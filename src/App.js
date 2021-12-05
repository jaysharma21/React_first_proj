import "./styles.css";

var headingText = "inside out";
var color = "turquoise";
var textcolor = "gold";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color, color: textcolor }}>
        {headingText}
      </h1>
    </div>
  );
}
