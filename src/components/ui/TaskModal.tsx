import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { X } from "lucide-react";
import React from "react";

function TaskModal({ open, onClose }) {
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
        <p className="text-xl font-semibold">Add new Task</p>
        <IconButton onClick={onClose}>
          <X size={24} />
        </IconButton>
      </DialogTitle>

      <DialogContent className="mt-6">
        <div className="flex flex-col gap-2">
          {/* TASK NAME */}
          <label className="font-semibold text-sm">Task Name</label>
          <TextField
            id="TaskName"
            placeholder="e.g. Design System Update"
            fullWidth
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
        </div>
      </DialogContent>

      <DialogActions className="mb-2">
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
          }}
        >
          Create Task
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TaskModal;
