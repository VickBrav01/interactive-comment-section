import "./App.css";
import Comments from "./Components/Comments";
import UserComment from "./Components/SendComment";

function App() {
  return (
    <div className="container">
      <Comments />
      <UserComment commentType="send" />
    </div>
  );
}

export default App;