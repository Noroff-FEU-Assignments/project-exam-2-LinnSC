import { Button, styled } from "@mui/material";

export const StyledBackBtn = styled(Button)(({ theme }) => ({
  margin: "-40px 0 0-2px",
  padding: 0,

  [theme.breakpoints.up("md")]: {
    margin: "-165px 0 0 -2px",
    zIndex: 2000,
  },
}));
