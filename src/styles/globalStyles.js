import { GlobalStyles } from "@mui/material";

export const inputGlobalStyles = (
  <GlobalStyles
    styles={{
      html: {
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
        outline: "none",
      },
      "*,*:before,*:after": {
        transition: "background-color 0.5s ease",
        boxSizing: "inherit",
      },
      body: {
        minHeight: "100vh",
        margin: "0",
      },
      a: {
        textDecoration: "none",
      },
    }}
  />
);
