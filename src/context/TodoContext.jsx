import { createContext, useContext } from 'react';

// s-1
const TodoContext = createContext();

// s-2 : Provider
export default function TodoContextProvider({ children }) {
  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
}

// s-5 : custom Hook
export function useTodos() {
  return useContext(TodoContext);
}
