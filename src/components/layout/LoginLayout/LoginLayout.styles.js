import { Container, styled } from "@mui/material";

export const LoginContainer = styled(Container)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "top",
  justifyContent: "center",
  paddingTop: "50px",
  [theme.breakpoints.up("md")]: {
    paddingTop: "100px",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: theme.breakpoints.values.md,
  },
}));

export const LoginBackground = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  height: "100vh",
  margin: "0",
  padding: "0",
  maxWidth: "100% !important",
}));
