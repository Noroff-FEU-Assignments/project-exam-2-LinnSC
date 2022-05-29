import { styled, AppBar, Toolbar } from "@mui/material";

export const StyledTopBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: "white",
  [theme.breakpoints.up("md")]: {
    backgroundColor: "transparent",
    boxShadow: "none",
    display: "flex",
    alignItems: "end",
  },
}));

export const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledLogo = styled("img")(({ theme }) => ({
  width: "35px",
}));
