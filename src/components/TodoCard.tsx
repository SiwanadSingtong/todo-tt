import { Todo } from "@/types/todo";
import { Box, Checkbox } from "@mui/material";
import { Ellipsis } from "lucide-react";

function todoCard({ todo }: { todo: Todo }) {
  return (
    <Box className="bg-white p-2 rounded-lg flex justify-between items-center">
      <div className="flex items-center gap-1">
        <Checkbox size="small" />
        {todo.title}
      </div>
      <Ellipsis size={18} />
    </Box>
  );
}

export default todoCard;
