import Nav from "./dashboard/Nav";
import SideBar from "./dashboard/SideBar";
import Main from "./dashboard/Main";
import "../index.css";

function Dashboard() {
  return (
    <>
      <Nav />
      <main>
        <SideBar />
        <Main />
      </main>
    </>
  );
}

export default Dashboard;
