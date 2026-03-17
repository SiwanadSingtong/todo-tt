import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f8fafc] h-screen py-12">
      {/* HEADER */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          {/* TITLE */}
          <h1 className="text-4xl font-bold text-black  tracking-tight">
            Todo List
          </h1>
          <p className="text-lg text-black/40">Manage your workflow</p>
        </div>
        {/* FILTERS AND ADD TASK */}
        <div>
          {/* Filter */}
          
        </div>
      </div>
    </main>
  );
}
