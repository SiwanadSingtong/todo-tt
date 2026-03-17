import { Todo } from "@/types/todo";
import { Box, Checkbox } from "@mui/material";
import { Circle, CircleCheck, Ellipsis } from "lucide-react";

function TodoCard({ todo }: { todo: Todo }) {
  return (
    <Box className="bg-white p-2 rounded-lg flex justify-between items-center">
      <div className="flex items-center gap-1">
        <Checkbox
          size="small"
          icon={<Circle size={20} />}
          checkedIcon={<CircleCheck size={20} className="text-primary!" />}
        />
        {todo.title}
      </div>
      <Ellipsis size={18} />
    </Box>
  );
}

export default TodoCard;
