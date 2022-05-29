import { FormControlLabel, IconButton, Link } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import PropTypes from "prop-types";

export default function EditCell({ index, href }) {
  return (
    <Link href={href}>
      <FormControlLabel
        control={
          <IconButton
            sx={{ cursor: "pointer", marginLeft: { sx: 2, md: 2 } }}
            color="secondary"
            aria-label="edit"
          >
            <EditIcon />
          </IconButton>
        }
      />
    </Link>
  );
}

EditCell.propTypes = {
  href: PropTypes.node.isRequired,
};
