import { ProjectStatus } from "@/types";
import type { Task, TaskStatus } from "@/types";

export const publicRoutes = [
  "/",
  "/login",
  "/signup",
  "/verify-email",
  "/reset-password",
  "/forgot-password",
  "*",
];

export const getTaskStatusColor = (status: ProjectStatus) => {
  console.log("Status:", status);
  switch (status) {
    case "In Progress":
      return "bg-blue-100/80 text-blue-800 font-medium";
    case "Completed":
      return "bg-green-100/80 px-3 py-1 text-green-800 font-medium";
    case "Cancelled":
      return "bg-red-100/80 px-3 py-1 text-red-800 font-medium";
    case "On Hold":
      return "bg-yellow-100/80 px-3 py-1 text-yellow-800 font-medium";
    case "Planning":
      return "bg-purple-100/80 px-3 py-1 text-purple-800 font-medium";
    default:
      return "bg-gray-100/80 px-3 py-1 text-gray-800 font-medium";
  }
};

export const getProjectProgress = (tasks: { status: TaskStatus }[]) => {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task?.status === "Done").length;

  const progress =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  return progress;
};