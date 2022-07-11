// remove unused imports
import React, { ReactNode } from "react";
import { ITask } from "../interfaces/Task";

export type TTaskContextType = {
  taskList: ITask[] | null;
  setTaskList: React.Dispatch<React.SetStateAction<ITask[] | null>>;
};

export const GlobalContext = React.createContext<TTaskContextType | null>(null);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [taskList, setTaskList] = React.useState<ITask[] | null>(null);

  return (
    <GlobalContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </GlobalContext.Provider>
  );
};
