import { styled, TextField } from "@mui/material";

export const StyledTextInput = styled(TextField)(({ theme }) => ({
  "& label": {
    color: theme.palette.primary.dark,
    backgroundColor: "white",
    paddingRight: "5px",
  },

  "& .MuiInputBase-root": {
    "&:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: `2px solid ${theme.palette.primary.dark}`,
      },
    },

    color: theme.palette.text.primary,
    fontSize: "14px",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.dark,
    },
  },
}));
