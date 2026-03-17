"use client"

import { todoService } from "@/services/todoService";
import { Todo, TodoContextType,  } from "@/types/todo";
import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await todoService.getAll();
        setTodos(res.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, loading, error}}>
        {children}
    </TodoContext.Provider>
  )
}

export function useTodo() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("must be use within TodoProvider")
    }
    return context;
}
