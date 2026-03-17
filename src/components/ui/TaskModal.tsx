import { Dialog, DialogTitle, IconButton } from '@mui/material'
import { X } from 'lucide-react'
import React from 'react'

function TaskModal({ open, onClose}) {
  return (
    <Dialog open={open} onClose={onClose}>
         <DialogTitle sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
         }}>
          <p>Add new Task</p>
          <IconButton>
            <X size={24} />
          </IconButton>
        </DialogTitle>
    </Dialog>
  )
}

export default TaskModal