import { Box, Tooltip, Fab } from "@mui/material";
import PropTypes from "prop-types";

const FabContainer = {
  position: "absolute",
  top: 0,
  right: 0,
};

export default function MyFab({
  children,
  toolTitle,
  onClick,
  ariaLabel,
  sx,
  size,
}) {
  return (
    <Box component="div" sx={FabContainer}>
      <Tooltip title={toolTitle}>
        <Fab
          component="button"
          color="secondary"
          onClick={onClick}
          aria-label={ariaLabel}
          sx={sx}
          size={size}
        >
          {children}
        </Fab>
      </Tooltip>
    </Box>
  );
}

MyFab.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  sx: PropTypes.object,
};
