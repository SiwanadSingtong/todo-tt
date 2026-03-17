export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface CreateTodo {
  title: string;
  completed: boolean;
}

export interface TodoContextType {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  createTodo: (data: CreateTodo) => Promise<void>;
  updateTodo: (id: number, data: Partial<Todo>) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
}

export interface TodoModalProps {
  open: boolean;
  onClose: () => void;
  todo?: Todo | null;
}

export interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  loading?: boolean;
}
