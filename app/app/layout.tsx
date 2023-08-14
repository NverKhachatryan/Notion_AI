import Sidebar from "@/ui/editor/components/sidebar";
import { ReactNode } from "react";

export default function AppLayout(props: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col pl-72">
      <Sidebar />
      {props.children}
    </main>
  );
}
