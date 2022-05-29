import { Typography } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../utils/context/AuthContext";

import IconLink from "../common/IconLink";

export default function LogoutBtn() {
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();
  const logOut = () => {
    console.log("clicked");
    setAuth(null);
    navigate("/");
  };

  return (
    <IconLink
      onClick={logOut}
      icon={<Logout sx={{ color: "text.primary" }} fontSize="small" />}
      primary={<Typography variant="subtitle1">Log Out</Typography>}
    />
  );
}
