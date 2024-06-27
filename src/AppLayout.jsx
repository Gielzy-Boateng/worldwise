// import AppNav from "./AppNav";
// import { Outlet } from "react-router-dom";
import Map from "./components/Map";
import SideBar from "./components/SideBar.jsx";
import styles from "./pages/AppLayout.module.css";
import User from "./components/User";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
