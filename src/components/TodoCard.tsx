import { Todo } from "@/types/todo";
import { Box, Checkbox } from "@mui/material";
import { Circle, CircleCheck, SquarePen, Trash } from "lucide-react";
import { useState } from "react";
import TaskModal from "./ui/TaskModal";

function TodoCard({ todo }: { todo: Todo }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  return (
    <>
    <Box className="bg-white p-2 rounded-lg flex justify-between items-center group">
      <div className="flex items-center gap-1">
        <Checkbox
          size="small"
          // checked={todo.completed}
          icon={<Circle size={20} />}
          checkedIcon={<CircleCheck size={20} className="text-primary!" />}
        />
        <p
          className={`text-lg font-medium ${todo.completed && "line-through text-black/40"}`}
        >
          {todo.title}
        </p>
      </div>
      {/* MANAGE */}
      <div className="hidden group-hover:flex gap-4 transition-all duration-300">
        <SquarePen
          size={18}
          onClick={() => setIsEditOpen(true)}
          className="text-blue-500 cursor-pointer"
        />
        <Trash size={18} className="text-red-500" />
      </div>
    </Box>

    {/* EDIT MODAL */}
    <TaskModal open={isEditOpen} onClose={() => setIsEditOpen(false)} todo={todo} />
    </>
  );
}

export default TodoCard;
