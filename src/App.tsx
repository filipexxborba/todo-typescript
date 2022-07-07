import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Header />
      <div className="my-5 min-h-[50vh]">
        <TaskForm />
        <TaskList />
      </div>
      <Footer />
    </>
  );
}

export default App;
