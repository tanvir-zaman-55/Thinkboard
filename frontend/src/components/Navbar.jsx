import React from "react";
import { Link } from "react-router";
import { PlusIcon } from "lucide-react";
const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-8xl px-5 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-secondary font-sans tracking-tight">
            Thinkboard
          </h1>
          <div className="flex gap-4 items-center">
            <Link to={"/create"} className="btn btn-outline btn-secondary ">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
