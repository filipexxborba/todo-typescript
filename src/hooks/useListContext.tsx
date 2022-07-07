import { useContext } from "react";
import { GlobalContext, TTaskContextType } from "../context/TaskListContext";

export const useListContext = () =>
  useContext(GlobalContext) as TTaskContextType;
