import { DeleteModalProps } from "@/types/todo";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Loader2, X } from "lucide-react";

function DeleteModal({ open, onClose, loading, onConfirm }: DeleteModalProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle className="font-semibold!">Delete Task</DialogTitle>
      <DialogContent>
        <p className="text-sm text-black/60">
          Are you sure you want to delete this item?
        </p>
      </DialogContent>
      <DialogActions className="mb-2 pr-6!">
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
          disabled={loading}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{
            textTransform: "none",
            boxShadow: "none",
            fontWeight: 600,
            borderRadius: "8px",
            minWidth: "80px",
            minHeight: "36px",
          }}
          onClick={onConfirm}
          disabled={loading}
        >
          {loading ? <Loader2 size={25} className="animate-spin" /> : "Delete"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteModal;
