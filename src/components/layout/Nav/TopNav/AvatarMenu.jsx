import * as React from "react";
import { IconButton, MenuItem, Divider, Tooltip } from "@mui/material";
import { useContext, useState } from "react";
import AuthContext from "../../../../utils/context/AuthContext";

import DropDownMenu from "./DropDownMenu";
import LogoutBtn from "../../../Buttons/LogoutBtn";

import { StyledAvatar, StyledMenuHeader } from "./AvatarMenu.Styles";
import Header from "../../../Typography/Header";

function stringAvatar(name) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function AvatarMenu() {
  const [auth, setAuth] = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title={open ? "" : "Profil meny"}>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <StyledAvatar {...stringAvatar(auth.user.username)} />
        </IconButton>
      </Tooltip>

      <DropDownMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <StyledMenuHeader>
          <Header variant="subtitle1">{auth.user.username}</Header>
          <Header variant="subtitle2">Avdeling Jobbkretser</Header>
        </StyledMenuHeader>

        <Divider />
        <MenuItem sx={{ p: 0 }}>
          <LogoutBtn />
        </MenuItem>
      </DropDownMenu>
    </>
  );
}
