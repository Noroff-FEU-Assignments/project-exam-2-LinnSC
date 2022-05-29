import { styled, Box } from "@mui/material";

export const SideBarContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {},
}));

export const active = {
  height: "65px",
  backgroundColor: "primary.dark",
  color: "white",
  "	.MuiListItemIcon-root": {
    color: "white",
  },
  "&:hover": {
    backgroundColor: "rgba(100, 145, 178, 0.4)",
    color: "text.primary",
    "	.MuiListItemIcon-root": {
      color: "text.primary",
    },
  },
};

export const resting = {
  height: "65px",
  backgroundColor: "transparent",
  color: "text.primary",
  "	.MuiListItemIcon-root": {
    color: "text.primary",
  },
  "&:hover": {
    backgroundColor: "rgba(100, 145, 178, 0.4)",
  },
};

export const drawerStyles = {
  height: "100vh",
  backgroundColor: "primaryShades.three",
};
