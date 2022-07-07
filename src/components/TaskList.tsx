import React from "react";
import { GlobalContext, TTaskContextType } from "../context/TaskListContext";
import { useListContext } from "../hooks/useListContext";
import { ITask } from "../interfaces/Task";

const TaskList = () => {
  const { taskList } = useListContext();

  return (
    <>
      {taskList && (
        <ul>
          {taskList.map((task: ITask) => (
            <li key={task.id}>a</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TaskList;
