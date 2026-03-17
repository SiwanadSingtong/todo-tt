import { useTodo } from "@/context/TodoContext";
import { TodoModalProps } from "@/types/todo";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  TextField,
} from "@mui/material";
import { Circle, CircleCheck, Loader2, X } from "lucide-react";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";

function TaskModal({ open, onClose, todo }: TodoModalProps) {
  const { updateTodo, createTodo } = useTodo();
  const isEdit = !!todo;

  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) {
      setTitle(todo?.title ?? "");
      setCompleted(todo?.completed ?? false);
    }
  }, [open, todo]);

  //   SUBMIT
  const handleSubmit = async () => {
    if (!title.trim()) return;
    try {
      setSaving(true);
      if (isEdit) {
        await updateTodo(todo.id, { title, completed });
        enqueueSnackbar("Update Successfully", { variant: "success" });
      } else {
        await createTodo({ title, completed });
        enqueueSnackbar("Task Created Successfully", { variant: "success" });
      }
      onClose();
    } catch {
      enqueueSnackbar(
        isEdit ? "Failed to update task" : "Failed to create task",
        { variant: "error" },
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      sx={{ borderRadius: "8px" }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="border-b border-gray-200"
      >
        <p className="text-xl font-semibold tracking-tight">
          {isEdit ? "Edit Task" : "Add New Task"}
        </p>
        <IconButton onClick={onClose} size="small">
          <X size={24} />
        </IconButton>
      </DialogTitle>

      <DialogContent className="mt-6">
        <div className="flex flex-col gap-2">
          {/* TASK NAME */}
          <label className="font-semibold text-sm">Task Name</label>
          <TextField
            id="TaskName"
            placeholder="e.g. Watch Game of Thrones"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ec5b13",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ec5b13",
                },
              },
              "& .MuiOutlinedInput-input::placeholder": {
                color: "grey.500",
                fontWeight: 500,
                fontSize: "11px ",
                opacity: 1,
              },
              borderRadius: "8px",
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
                icon={<Circle size={14} />}
                checkedIcon={
                  <CircleCheck
                    size={14}
                    strokeWidth={3}
                    className="text-primary!"
                  />
                }
              />
            }
            label={<p className="text-xs font-semibold">Task is Completed?</p>}
            className="w-fit"
          />
        </div>
      </DialogContent>

      <DialogActions className="mb-2 pr-6!">
        {/* CANCEL */}
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            borderColor: "grey.200",
            borderWidth: 2,
            color: "grey.700",
            fontWeight: 600,
            borderRadius: "8px",
          }}
          onClick={onClose}
        >
          Cancel
        </Button>
        {/* SUBMIT */}
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            boxShadow: "none",
            backgroundColor: "#ec5b13",
            borderWidth: 2,
            color: "white",
            fontWeight: 600,
            borderRadius: "8px",
            minWidth: "120px",
            minHeight: "36px",
          }}
          onClick={handleSubmit}
          disabled={saving}
        >
          {saving ? (
            <Loader2 size={25} className="animate-spin" />
          ) : isEdit ? (
            "Update Task"
          ) : (
            "Create Task"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TaskModal;
