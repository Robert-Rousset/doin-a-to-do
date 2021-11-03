import React from "react";
import Nav from "./dashboard/Nav";
import SideBar from "./dashboard/SideBar";
import AddTodo from "./dashboard/AddTodo";

function Dashboard() {
  return (
    <>
      <Nav />
      <main className="container">
        <AddTodo />
        <SideBar />
      </main>
    </>
  );
}

export default Dashboard;
