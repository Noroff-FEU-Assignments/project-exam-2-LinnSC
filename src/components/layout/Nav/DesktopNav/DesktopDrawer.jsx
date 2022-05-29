import { Box, IconButton, Link } from "@mui/material";
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SideBar from "../SideNav/SideBar";
import Logo from "../../../../assets/images/logo.png";
import { drawerStyles } from "../SideNav/SideBar.Styles";
import { StyledLogo } from "../MobileNav/MobileDrawer.Styles";
import {
  paperpropStyles,
  StyledArrowRight,
  StyledArrowLeft,
  StyledDesktopDrawer,
} from "./DesktopNav.Styled";

function DesktopDrawer() {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <StyledDesktopDrawer
      PaperProps={paperpropStyles}
      variant="permanent"
      open={open}
    >
      <Box sx={drawerStyles}>
        <Box mb={5}>
          <StyledArrowRight
            p={2}
            sx={{
              ...(open && { display: "none" }),
            }}
          >
            <IconButton
              size="large"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
            >
              <ChevronRightIcon />
            </IconButton>
          </StyledArrowRight>
          <StyledArrowLeft
            p={2}
            sx={{
              ...(!open && { display: "none" }),
            }}
          >
            <Link href="/dashboard">
              <StyledLogo src={Logo} alt="JK Portalen Logo" />
            </Link>

            <IconButton
              size="large"
              color="inherit"
              aria-label="close drawer"
              onClick={handleDrawerClose}
            >
              <ChevronLeftIcon />
            </IconButton>
          </StyledArrowLeft>
        </Box>
        <SideBar />
      </Box>
    </StyledDesktopDrawer>
  );
}

export default DesktopDrawer;
