import { styled, Alert } from "@mui/material";
import PropTypes from "prop-types";

export const StyledAlert = styled(Alert, {
  name: "ErrorAlert",
  slot: "Alert",
})(({ theme }) => ({
  margin: "0 0 40px 0",
}));

export default function AlertMessage({ children, severity }) {
  return (
    <StyledAlert variant="filled" severity={severity}>
      {children}
    </StyledAlert>
  );
}

AlertMessage.proptTypes = {
  children: PropTypes.node.isRequired,
  severity: PropTypes.string.isRequired,
};
