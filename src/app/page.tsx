"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  

  return (
    <div className=" bg-black">
      <main className="min-h-screen flex space-x-0 items-center justify-center ">
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-bold items-center text-green-400">
            Contact App
          </h1>
          <div className="text-xl  font-bold items-center text-green-400">
            Next.js + Tailwind + shadcn
          </div>
          <Button variant={"secondary"}>
            <Link href={"/contact"}>Contact List</Link>{" "}
          </Button>
        </div>
      </main>
      {/* <ContactList contacts={contacts} /> */}
    </div>
  );
}
