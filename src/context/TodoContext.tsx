"use client";

import { todoService } from "@/services/todoService";
import { CreateTodo, Todo, TodoContextType } from "@/types/todo";
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

  // CREATE TODO
  const createTodo = async (data: CreateTodo) => {
    const res = await todoService.create(data);
    setTodos((prev) => [{ ...res.data, id: Date.now()}, ...prev])
  }

  // UPDATE TODO
  const updateTodo = async (id: number, data: Partial<Todo>) => {
    await todoService.update(id, data);
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, ...data } : t)));
  };

  // DELETE TODO
  const deleteTodo = async (id: number) => {
    await todoService.delete(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, loading, error, createTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("must be use within TodoProvider");
  }
  return context;
}
