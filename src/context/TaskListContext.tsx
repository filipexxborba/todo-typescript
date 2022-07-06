import React, { Dispatch, ReactNode } from "react";
import { ITask } from "../interfaces/Task";

export type TTaskContextType = {
	taskList: ITask[];
	setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
};

export const GlobalContext = React.createContext<TTaskContextType | null>(null);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
	const [taskList, setTaskList] = React.useState<ITask[]>([]);

	React.useEffect(() => {
		if (localStorage.getItem("taskList")) {
			setTaskList(JSON.parse(localStorage.getItem("taskList")!));
		}
	}, []);
	return (
		<GlobalContext.Provider value={{ taskList, setTaskList }}>
			{children}
		</GlobalContext.Provider>
	);
};
