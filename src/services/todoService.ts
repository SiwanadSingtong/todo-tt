import axiosInstance from "@/libs/axios";

export const todoService = {
    getAll: () => axiosInstance.get("/todos?_limit=10")
}