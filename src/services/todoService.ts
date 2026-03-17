import axiosInstance from "@/libs/axios";
import { Todo } from "@/types/todo";

export const todoService = {
    getAll: () => axiosInstance.get("/todos?_limit=10"),
    create: (data: Partial<Todo>) => axiosInstance.post<Todo>("/todos", data),
    update: (id: number, data: Partial<Todo>) => axiosInstance.patch(`/todos/${id}`, data),
    delete: (id: number) => axiosInstance.delete(`/todos/${id}`)
}