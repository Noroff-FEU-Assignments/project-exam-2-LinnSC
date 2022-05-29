import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function Header({ sx, children, variant }) {
  return (
    <Typography sx={sx} variant={variant}>
      {children}
    </Typography>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
  variant: PropTypes.string.isRequired,
};
