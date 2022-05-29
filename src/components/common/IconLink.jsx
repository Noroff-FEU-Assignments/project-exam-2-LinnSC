import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PropTypes from "prop-types";

export default function IconLink({
  id,
  title,
  path,
  icon,
  onClick,
  sx,
  primary,
}) {
  return (
    <ListItem button sx={sx} key={id} to={path} onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText disableTypography={true} primary={primary}>
        {title}
      </ListItemText>
    </ListItem>
  );
}

IconLink.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  sx: PropTypes.object,
  primary: PropTypes.node.isRequired,
};
