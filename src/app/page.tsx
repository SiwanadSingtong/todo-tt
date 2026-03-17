"use client";

import { Button } from "@mui/material";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  return (
    <main className="bg-[#f8fafc] h-screen py-12">
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
      <div className="flex items-center gap-56 justify-center mt-8">
        {/* Filter */}
        <div className="p-1 w-fit bg-[#f1f5f9] rounded-lg *:shadow-none! *:text-sm! *:transition-all! *:font-medium! *:duration-200! *:rounded-md!">
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            className={` ${filter === "all" ? "bg-white! text-primary! font-semibold!" : "bg-transparent! text-black/50!"}`}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            className={` ${filter === "active" ? "bg-white! text-primary! font-semibold!" : "bg-transparent! text-black/50!"}`}
            onClick={() => setFilter("active")}
          >
            Active
          </Button>
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            className={` ${filter === "completed" ? "bg-white! text-primary! font-semibold!" : "bg-transparent! text-black/50!"}`}
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
          className="bg-primary! shadow-none!"
        >
          Add Task
        </Button>
      </div>
    </main>
  );
}
