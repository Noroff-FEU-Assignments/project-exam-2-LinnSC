import { styled, Avatar, MenuItem } from "@mui/material";

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  [theme.breakpoints.up("md")]: {
    width: "45px",
    height: "45px",
  },
}));

export const StyledMenuHeader = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(1, 3),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}));
