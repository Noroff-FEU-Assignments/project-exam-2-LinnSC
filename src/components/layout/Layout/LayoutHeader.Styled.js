import { styled } from "@mui/material";

export const StyledLayoutHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  margin: theme.spacing(3, 0),
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
