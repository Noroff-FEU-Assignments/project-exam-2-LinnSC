import { Box, IconButton, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import SideBar from "../SideNav/SideBar";
import Logo from "../../../../assets/images/logo.png";
import { MobileDrawerStyled, StyledLogo } from "./MobileDrawer.Styles";
import { drawerStyles } from "../SideNav/SideBar.Styles";

export const paperpropStyles = {
  style: {
    width: "250px",
  },
};

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{
          mr: 2,
        }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon />
      </IconButton>

      <MobileDrawerStyled
        PaperProps={paperpropStyles}
        anchor="left"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {
          setOpen(true);
        }}
      >
        <Box sx={drawerStyles}>
          <Box textAlign="start" p={2} mb={5}>
            <Link href="/dashboard">
              <StyledLogo src={Logo} alt="JK Portalen Logo" />
            </Link>
          </Box>
          <SideBar />
        </Box>
      </MobileDrawerStyled>
    </>
  );
}
