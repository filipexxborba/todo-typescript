// remove unused imports
import React, { ChangeEvent, FormEvent } from "react";
import { Plus } from "phosphor-react";
import { useListContext } from "../hooks/useListContext";

const TaskForm = () => {
  const { taskList, setTaskList } = useListContext();
  const [taskTitle, setTaskTitle] = React.useState<string>("");

  const handleTaskTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Thank you @Breno (lirbre) for the help, you're awesome!
    taskList
      ? setTaskList([
          ...taskList,
          { id: taskList.length + 1, title: taskTitle, isCompleted: false },
        ])
      : setTaskList([{ id: 0, title: taskTitle, isCompleted: false }]);
    setTaskTitle("");
  };

  return (
    <section className="container max-w-sm m-auto py-4 flex flex-col items-center">
      <h2 className="text-center font-normal text-xl text-slate-800">
        What are we doing today?
      </h2>
	  <p className="text-center text-sm text-gray-400">When you're done, click on it to mark as completed.</p>
      <form className="flex items-center my-4" onSubmit={handleFormSubmit}>
        <input
          className="px-4 py-2 outline-none border-none"
          type="text"
          value={taskTitle}
          onChange={handleTaskTitleChange}
        />
        <button
          disabled={taskTitle.length === 0}
          className="flex items-center gap-1 bg-blue-700 px-4 py-2 text-white disabled:bg-slate-300 disabled:cursor-not-allowed ease-in transition"
        >
          <Plus weight="bold" />
          <p>Add</p>
        </button>
      </form>
    </section>
  );
};

export default TaskForm;
