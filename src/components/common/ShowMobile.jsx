import { Box } from "@mui/system";
import PropTypes from "prop-types";

const showMobileStyles = {
  display: { xs: "flex", md: "none" },
  alignItems: "center",
};

export default function ShowMobile({ children }) {
  return (
    <Box component="div" sx={showMobileStyles}>
      {children}
    </Box>
  );
}

ShowMobile.propTypes = {
  children: PropTypes.node.isRequired,
};
