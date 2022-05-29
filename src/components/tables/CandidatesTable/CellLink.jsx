import { Link } from "@mui/material";

import PropTypes from "prop-types";

export default function CellLink({ index, children, href }) {
  return (
    <Link
      sx={{
        cursor: "pointer",
        color: "text.primary",
        textDecoration: "none",
        width: "100%",

        display: "flex",
        justifyContent: "start",

        paddingLeft: 1,
      }}
      href={href}
    >
      {children}
    </Link>
  );
}

CellLink.propTypes = {
  href: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
