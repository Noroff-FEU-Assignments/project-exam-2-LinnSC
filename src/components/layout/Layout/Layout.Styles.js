import { styled, Box } from "@mui/material";

export const StyledLayout = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  padding: theme.spacing(0, 2),
}));

export const StyledMain = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexGrow: 1,
  marginBottom: "100px",
  // [theme.breakpoints.up("md")]: {
  //   margin: theme.spacing(0, 3),
  // },
}));
