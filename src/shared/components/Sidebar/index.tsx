import React, { useState } from "react";
import { Drawer } from "antd";
import { CgLogOut } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoAlarmSharp, IoClose } from "react-icons/io5";
import { MdComputer, MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.scss";
import { Logo } from "../../../config/constants/imagesPath";

interface ISidebarProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<ISidebarProps> = ({ visible, setVisible }) => {
  const onClose = (): void => {
    setVisible(false);
  };

  const logOutHandler = (): void => {
    console.log("Logged out");
  };

  return (
    <div className={classes.container}>
      <Drawer
        title={
          <div className={classes.logo}>
            <img src={Logo} alt="Logo" />
          </div>
        }
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={250}
        className={classes.drawer}
      >
        <div className={classes.sidebar}>
          <NavLink to="/" onClick={onClose} className={classes.navLink}>
            <MdDashboard />
            <h3>Dashboard</h3>
          </NavLink>
          <NavLink to="/new-deal" onClick={onClose} className={classes.navLink}>
            <FaUsers />
            <h3>New Deal Form</h3>
          </NavLink>
          <NavLink to="/threats" onClick={onClose} className={classes.navLink}>
            <MdComputer />
            <h3>Deal Tracking</h3>
          </NavLink>
        </div>

        {/* Uncomment if you want to enable logout */}
        {/* <div className={classes.logoutContainer}>
          <NavLink
            to="/login"
            onClick={logOutHandler}
            className={classes.navLink}
          >
            <CgLogOut />
            <h3>Logout</h3>
          </NavLink>
        </div> */}
      </Drawer>
    </div>
  );
};

export default Sidebar;
