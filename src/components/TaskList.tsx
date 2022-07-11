// remove unused imports
import { useMemo } from "react";
import { useListContext } from "../hooks/useListContext";
import { ITask } from "../interfaces/Task";
import { Check, Trash } from "phosphor-react";

const TaskList = () => {
  const { taskList, setTaskList } = useListContext();
  // memoized validation if you need a new task
  const newList = useMemo(() => (taskList ? [...taskList] : null), [taskList]);

  // remove unused variables / props as well
  const handleTask = (index: number) => {
    // stop using direclty the state, it isn't a good aproach
    newList![index].isCompleted
      ? (newList![index].isCompleted = false)
      : (newList![index].isCompleted = true);

    setTaskList([...newList!]);
  };

  // delete function to cleanup complete todos
  const deleteTask = (index: number) => {
    // stop using direclty the state, it isn't a good aproach
    newList?.splice(index, 1);

    setTaskList([...newList!]);
  };

  return (
    <>
      {taskList && (
        <ul className="container max-w-sm mx-auto flex flex-col gap-5 mb-10">
          {taskList
            // remove sort since this could bring problems while deleting / editing
            .map((task: ITask, index: number) => (
              <li
                // add a effect to make completed todos more visible
                className={`flex justify-between items-center w-full p-3 bg-slate-200 ${
                  task.isCompleted ? "opacity-70 line-through" : ""
                }`}
                key={task.id}
              >
                <h2
                  className="text-md max-w-[90%] w-full overflow-hidden break-words hover:cursor-pointer"
                  onClick={() => handleTask(index)}
                >
                  {task.title}
                </h2>
                <div className="flex gap-4">
                  {task.isCompleted ? (
                    <Check
                      color="green"
                      size="18px"
                      className="hover:cursor-pointer"
                      onClick={() => handleTask(index)}
                    />
                  ) : (
                    <></>
                  )}
                  {task.isCompleted ? (
                    <Trash
                      size="18px"
                      className="z-10 hover:cursor-pointer"
                      onClick={() => deleteTask(index)}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default TaskList;
