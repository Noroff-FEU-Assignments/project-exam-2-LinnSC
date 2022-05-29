import { styled, ListItem, Paper } from "@mui/material";
import { StyledTextInput } from "../FormsUI/FormUI.Styles";

export const StyledSearch = styled(StyledTextInput)(({ theme }) => ({
  zIndex: 1001,
  width: "80%",
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: "-2px",
  position: "absolute",
  zIndex: 1000,
  width: "80%",
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: "10px",
  cursor: "pointer",
  "&:hover": { backgroundColor: theme.palette.primaryShades.two },

  [theme.breakpoints.up("sm")]: {
    padding: "16px",
  },
}));
