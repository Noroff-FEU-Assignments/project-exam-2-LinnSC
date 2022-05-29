import { useState } from "react";
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

const DataTableStyles = { width: { sx: "100%", md: " 90%" }, mb: 7 };

export default function DataTable({ rows, columns, ...otherProps }) {
  const [pageSize, setPageSize] = useState(10);
  return (
    <Paper sx={DataTableStyles}>
      <DataGrid
        {...otherProps}
        pagination
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        autoHeight
        rows={rows}
        columns={columns}
      />
    </Paper>
  );
}

DataTable.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};
