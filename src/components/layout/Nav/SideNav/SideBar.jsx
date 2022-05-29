import { List, Typography } from "@mui/material";
import { SideBarData } from "./SideBarData";
import { useNavigate, useLocation } from "react-router-dom";
import IconLink from "../../../common/IconLink";
import { SideBarContainer, resting, active } from "./SideBar.Styles";

export default function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <SideBarContainer component="div">
      <List>
        {SideBarData.map((menu) => {
          const { id, title, path, icon } = menu;

          return (
            <IconLink
              key={id}
              to={path}
              onClick={() => {
                navigate(path);
              }}
              icon={icon}
              title={title}
              sx={location.pathname === path ? active : resting}
              primary={<Typography variant="menuItem">{title}</Typography>}
            />
          );
        })}
      </List>
    </SideBarContainer>
  );
}
