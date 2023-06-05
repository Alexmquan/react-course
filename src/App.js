import Modal from "./components/Modal.js";
import Todo from "./components/Todo.js";
import Backdrop from "./components/Backdrop.js";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Get interview" />
      <Todo text="acquire job" />
    </div>
  );
}

export default App;
