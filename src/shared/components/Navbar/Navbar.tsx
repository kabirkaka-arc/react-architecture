import { Avatar, Image } from "antd";
import { FaPlus } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import DropDown from "../DropDown";
import classes from "./NavBar.module.scss";
import { Logo } from "../../../config/constants/imagesPath";
import { useState } from "react";
import Sidebar from "../Sidebar";

function NavBar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.navItems}>
          <div className={classes.menuLogoContainer}>
            <div
              className={classes.menuIcon}
              onClick={() => setShow((prev) => !prev)}
            >
              <HiMenu />
            </div>
            <div
              className={classes.logoContainer}
              onClick={() => navigate("/")}
            >
              <Image className={classes.logo} src={Logo} preview={false} />
            </div>
          </div>
          <div className={classes.navItem}>
            <Link className={classes.navLink} to={""}>
              <FaPlus />
              <span>New Deal Form</span>
            </Link>
          </div>

          <div className={classes.navItem}>
            <DropDown
              title="Deal Tracking"
              items={
                [
                  // {
                  //   key: '1',
                  //   label: <Link to={'/employee/list'}>List</Link>,
                  // },
                  // {
                  //   key: '2',
                  //   label: <Link to={'/employee/registration'}>Create</Link>,
                  // },
                ]
              }
            />
          </div>
          <div className={classes.navItem}>
            <DropDown
              title="Deal Tracking Report"
              items={
                [
                  // {
                  //   key: '1',
                  //   label: <Link to={'/employee/list'}>List</Link>,
                  // },
                  // {
                  //   key: '2',
                  //   label: <Link to={'/employee/registration'}>Create</Link>,
                  // },
                ]
              }
            />
          </div>
        </div>{" "}
        <div className={classes.navItems}>
          <div className={`${classes.navItem} ${classes.icons}`}>
            <IoSearch />
            <IoMdNotifications />
          </div>
          <div className={`${classes.navItem} ${classes.profile}`}>
            <Avatar className={classes.avatar}>UK</Avatar>
            <DropDown title="Unknown" />
          </div>
        </div>
      </nav>
      {show && <Sidebar visible={show} setVisible={setShow} />}
    </>
  );
}

export default NavBar;
