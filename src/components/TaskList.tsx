import React from "react";
import { GlobalContext, TTaskContextType } from "../context/TaskListContext";
import { useListContext } from "../hooks/useListContext";
import { ITask } from "../interfaces/Task";
import { Check } from "phosphor-react";

const TaskList = () => {
  const { taskList, setTaskList } = useListContext();
  const handleTaskClick = (e: React.MouseEvent, index: number) => {
    taskList![index].isCompleted = true;
    setTaskList([...taskList!]);
  };

  return (
    <>
      {taskList && (
        <ul className="container max-w-sm mx-auto flex flex-col gap-5 mb-10">
          {taskList.sort((a) => a.isCompleted === true ? 1 : -1).map((task: ITask, index: number) => (
            <li
              onClick={(e) => handleTaskClick(e, index)}
              className="group relative w-full p-3 bg-slate-200 hover:cursor-pointer"
              key={task.id}
            >
              <h2 className="text-md max-w-[90%] overflow-hidden break-words">
                {task.title}
              </h2>
              {task.isCompleted ? (
                <Check
                  className="absolute right-3 top-1/2 -translate-y-1/2 block "
                  color="green"
                  size="18px"
                />
              ) : (
                <Check
                  className="absolute right-3 top-1/2 -translate-y-1/2 invisible group-hover:visible"
                  color="gray"
                  size="18px"
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TaskList;
