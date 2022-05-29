import { styled, Card } from "@mui/material";

export const StyledLoginCard = styled(Card)(({ theme }) => ({
  padding: "20px 20px 40px 20px",

  [theme.breakpoints.up("md")]: {
    width: "480px",
  },
}));
