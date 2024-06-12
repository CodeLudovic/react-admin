import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import user from "../../assets/userDan.jpeg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

/* eslint-disable */

const menuItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "Manage Team",
    to: "/team",
    icon: <PeopleOutlinedIcon />,
  },
  {
    title: "Contacts",
    to: "/contacts",
    icon: <ContactsOutlinedIcon />,
  },
  {
    title: "Invoices",
    to: "/invoices",
    icon: <ReceiptOutlinedIcon />,
  },
  {
    title: "Profile Form",
    to: "/form",
    icon: <PersonOutlinedIcon />,
  },
  {
    title: "Calendar",
    to: "/calendar",
    icon: <CalendarTodayOutlinedIcon />,
  },
  {
    title: "Bar Chart",
    to: "/bar",
    icon: <BarChartOutlinedIcon />,
  },
  {
    title: "Pie Chart",
    to: "/pie",
    icon: <PieChartOutlinedIcon />,
  },
  {
    title: "Line Chart",
    to: "/line",
    icon: <TimelineOutlinedIcon />,
  },
  {
    title: "Geography Chart",
    to: "/geography",
    icon: <MapOutlinedIcon />,
  },
  {
    title: "FAQ Page",
    to: "/faq",
    icon: <HelpOutlinedIcon />,
  },
];

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [hover, setHover] = useState(false);

  return (
    <MenuItem
      key={title}
      active={selected === title}
      style={{
        color: colors.gray[100],
        position: "relative",
        zIndex: hover ? 2 : 1,
      }}
      onClick={() => setSelected(title)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
          position: "relative",
          zIndex: 2,
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
          borderLeft: isCollapsed ? "3px solid black" : "",
        },
        "& .pro-menu-item:hover": {
          backgroundColor: "black",
          width: "200px",
          zIndex: 2,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.gray[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.gray[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="UserImage"
                  width="100px"
                  height="100px"
                  src={user}
                  style={{ cursor: "pointer", borderRadius: "50px" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.gray[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Daniel Ospina
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Administrator
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menu Items */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {menuItems.map((element, index) => (
              <div key={element.title}>
                {element.title === "FAQ Page" && (
                  <Typography
                    variant="h6"
                    color={colors.gray[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                  >
                    Help
                  </Typography>
                )}
                <Item
                  title={element.title}
                  to={element.to}
                  icon={element.icon}
                  selected={selected}
                  setSelected={setSelected}
                />

                {element.title === "Dashboard" && (
                  <Typography
                    variant="h6"
                    color={colors.gray[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                  >
                    Data
                  </Typography>
                )}

                {element.title === "Invoices" && (
                  <Typography
                    variant="h6"
                    color={colors.gray[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                  >
                    Pages
                  </Typography>
                )}

                {element.title === "Bar Chart" && (
                  <Typography
                    variant="h6"
                    color={colors.gray[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                  >
                    Data
                  </Typography>
                )}
              </div>
            ))}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};
