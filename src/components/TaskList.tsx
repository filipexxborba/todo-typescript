// remove unused imports
import { useMemo } from "react";
import { useListContext } from "../hooks/useListContext";
import { ITask } from "../interfaces/Task";
import { Check } from "phosphor-react";

const TaskList = () => {
  const { taskList, setTaskList } = useListContext();
  // memoized validation if you need a new task 
  const newList = useMemo(() => (taskList ? [...taskList] : null), [taskList]);

  // remove unused variables / props as well
  const handleTask = (index: number) => {
    // stop using direclty the state, it isn't a good aproach
    newList![index].isCompleted ? newList![index].isCompleted = false : newList![index].isCompleted = true
    setTaskList([...newList!]); 
  };

  return (
    <>
      {taskList && (
        <ul className="container max-w-sm mx-auto flex flex-col gap-5 mb-10">
          {taskList
            .sort((a) => (a.isCompleted === true ? 1 : -1))
            .map((task: ITask, index: number) => (
              <li
                onClick={(e) => handleTask(index)}
                className={`group relative w-full p-3 bg-slate-200 hover:cursor-pointer ${task.isCompleted ? 'opacity-70 line-through' : ''}`}
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
                  <></>
                )}
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default TaskList;
