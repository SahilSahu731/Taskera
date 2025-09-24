import { Button } from "@/components/ui/button";
import type { Route } from "../../+types/root";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Taskera" },
    { name: "Taskera", content: "Manage all your project and tasks at one place!" },
  ];
}

export default function HomePage() {
  return (
    <div className="w-full h-screen flex items-center justify-center gap-4">
      <Link to="/login">
        <Button size="lg" className="bg-blue-600 text-white">Get Started</Button>
      </Link>
      <Link to="/signup" className="ml-4">
        <Button size="lg" variant="outline" className="border-blue-600 text-blue-600">Sign Up</Button>
      </Link>
    </div>
  )
}
