import propType from "prop-types";

import { Navbar } from "../components/sharedComponents/Navbar";
import { Sidebar } from "../components/Sidebar";
export const SidebarLayout = ({ children }) => {
  return (
    <main className="min-h-screen grid grid-cols-12 gap-4">
      <Sidebar />
      <section className="col-span-12 md:col-span-9 transition-all duration-150 ease-in-out lg:col-span-10 bg-white p-4 pb-10 shadow-lg max-h-screen overflow-y-scroll">
        <Navbar />
        {children}
      </section>
    </main>
  );
};

SidebarLayout.propTypes = {
  children: propType.any,
};
