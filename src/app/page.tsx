"use client";

import TodoCard from "@/components/TodoCard";
import TaskModal from "@/components/ui/TaskModal";
import { useTodo } from "@/context/TodoContext";
import { Button } from "@mui/material";
import { ListTodo, LoaderCircle, PlusIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { todos, loading, error } = useTodo();
  
  const handleClose = () => setIsModalOpen(false);

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if(filter === "completed") return t.completed
    return true;
  })

  return (
    <main className="py-12 max-w-2xl mx-auto flex flex-col gap-12">
      {/* HEADER */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          {/* TITLE */}
          <h1 className="text-4xl font-bold text-black  tracking-tight">
            Todo List
          </h1>
          <p className="text-lg text-black/40 font-medium">
            Manage your professional workflow
          </p>
        </div>
      </div>
      {/* FILTERS AND ADD TASK */}
      <div className="flex items-center justify-between">
        {/* Filter */}
        <div className="p-1 w-fit bg-[#f1f5f9] rounded-lg *:shadow-none! *:text-sm! *:transition-all! *:font-medium! *:duration-200! *:rounded-md!">
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            className={`${filter === "all" ? "bg-white! text-primary! font-semibold!" : "bg-transparent! text-black/50!"}`}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            className={`${filter === "active" ? "bg-white! text-primary! font-semibold!" : "bg-transparent! text-black/50!"}`}
            onClick={() => setFilter("active")}
          >
            Active
          </Button>
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            className={`${filter === "completed" ? "bg-white! text-primary! font-semibold!" : "bg-transparent! text-black/50!"}`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </Button>
        </div>
        {/* Add Task */}
        <Button
          variant="contained"
          startIcon={<PlusIcon />}
          sx={{ textTransform: "none" }}
          className="bg-primary! shadow-none! hover:shadow-sm!"
          onClick={() => setIsModalOpen(true)}
        >
          Add Task
        </Button>
      </div>
      {/* TASK */}
      <div className="flex items-center justify-center">
        {loading ? (
          // Loading
          <div className="w-full flex items-center justify-center h-56">
            <LoaderCircle size={32} className="animate-spin text-primary" />
          </div>
        ) : // Check empty
        todos.length === 0 ? (
          <div className="w-full h-56 flex flex-col gap-2 items-center justify-center">
            <ListTodo size={48} strokeWidth={2.5} className="text-black/40" />
            <p className="text-md font-medium text-black/90">No tasks yet</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 w-full">
            <p className="text-xs font-medium text-black/60">
              You have {filteredTodos.length} {filteredTodos.length > 1 ? "tasks" : "task"} todo
            </p>
            {filteredTodos.map((t) => (
              <TodoCard key={t.id} todo={t} />
            ))}
          </div>
        )}
      </div>


      {/* MODAL */}
      <TaskModal open={isModalOpen} onClose={handleClose} />
    </main>
  );
}
