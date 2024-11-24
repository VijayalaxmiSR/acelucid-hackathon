import React, { useState } from "react";
import {
  Avatar,
  Menu,
  MenuItem,
  Box,
  Typography,
  ListItemIcon,
} from "@mui/material";

import {
  NotificationsNoneSharp,
  AccountCircleOutlined,
  Person,
  AccountBalanceWallet,
  DeviceUnknownOutlined,
  SettingsOutlined,
  LogoutOutlined,
  ArrowDropDown,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "../../index.css";
interface HeaderProps {
  activeMenu: string;
}

const Header: React.FC<HeaderProps> = ({ activeMenu }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();

    navigate("/");
  };

  return (
    <div className="flex items-center justify-between p-4 shadow-md w-full bg-white">
      <div className="text-lg font-semibold text-gray-700">
        <p>{activeMenu}</p>
      </div>

      <div className="flex items-center gap-x-4 ml-auto">
        <Avatar
          sx={{
            backgroundColor: "transparent",
            color: "black",
            "&:hover": { backgroundColor: "#e0e0e0" },
          }}
          variant="rounded"
        >
          <NotificationsNoneSharp />
        </Avatar>

        <Avatar
          sx={{
            backgroundColor: "transparent",
            color: "black",
            "&:hover": { backgroundColor: "#e0e0e0" },
          }}
          variant="rounded"
        >
          <AccountCircleOutlined />
        </Avatar>

        <Box onClick={handleMenuClick} sx={{ cursor: "pointer" }}>
          <Typography className="text-sm font-medium text-gray-700">
            Hi User <ArrowDropDown />
          </Typography>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Person fontSize="small" />
            </ListItemIcon>
            Your Account
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <AccountBalanceWallet fontSize="small" />
            </ListItemIcon>
            Billing
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DeviceUnknownOutlined fontSize="small" />
            </ListItemIcon>
            Help & Support
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SettingsOutlined fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>

          <MenuItem onClick={handleLogout} sx={{ color: "red" }}>
            <ListItemIcon sx={{ color: "red" }}>
              <LogoutOutlined fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
