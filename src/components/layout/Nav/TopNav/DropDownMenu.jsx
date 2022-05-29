import { Menu } from "@mui/material";
import { paperPropStyles } from "./DropDown.Styles";

export default function DropDownMenu({ children, ...otherProps }) {
  return (
    <Menu
      {...otherProps}
      id="account-menu"
      PaperProps={paperPropStyles}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {children}
    </Menu>
  );
}
