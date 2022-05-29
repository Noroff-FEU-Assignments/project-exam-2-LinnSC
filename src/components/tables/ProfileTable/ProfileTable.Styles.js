import { styled, TableHead, Table, TableRow } from "@mui/material";

export const TableHeading = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.primaryShades.four,
  borderTop: `3px solid ${theme.palette.primary.dark}`,
  width: 150,
  [theme.breakpoints.up("sm")]: {
    width: 300,
  },
  [theme.breakpoints.up("md")]: {
    width: 350,
  },
}));

export const TableInfo = styled(TableHead)(({ theme }) => ({
  width: "100%",
  borderTop: `3px solid ${theme.palette.primary.dark}`,
}));

export const StyledTable = styled(Table)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const StyledTableTitle = styled(TableRow)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));
