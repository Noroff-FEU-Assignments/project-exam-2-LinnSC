import { Box } from "@mui/system";
import PropTypes from "prop-types";

const showDesktopStyles = {
  display: { xs: "none", md: "flex" },
  alignItems: "center",
};

export default function showDesktop({ children }) {
  return (
    <Box component="div" sx={showDesktopStyles}>
      {children}
    </Box>
  );
}

showDesktop.propTypes = {
  children: PropTypes.node.isRequired,
};
