import React from "react";
import { GlobalContext, TTaskContextType } from "../context/TaskListContext";
import { ITask } from "../interfaces/Task";

const TaskList = () => {
  const { taskList } = React.useContext(GlobalContext) as TTaskContextType;

  return (
    <ul>
      {taskList?.map((task: ITask) => <li key={task.id}>a</li>)}
    </ul>
  );
};

export default TaskList;
