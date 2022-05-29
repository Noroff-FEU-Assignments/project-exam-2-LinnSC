import {
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Table,
  Divider,
  Box,
} from "@mui/material";

import {
  offerHeader,
  assignmentsData,
} from "../../../utils/data/DashboardData/DashboardData";

export default function AssignmentsTable() {
  return (
    <Table>
      <TableHead>
        <TableRow sx={{ backgroundColor: "primaryShades.three" }}>
          {offerHeader.map((offerHeader) => (
            <TableCell key={offerHeader.id}>
              <Box
                component="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box component="div"> {offerHeader.title}</Box>
                <Box component="div">
                  <Divider orientation="vertical" />
                </Box>
              </Box>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {assignmentsData.map((offerData) => (
          <TableRow key={offerData.id}>
            <TableCell>{offerData.name}</TableCell>

            <TableCell>{offerData.customer}</TableCell>
            <TableCell>{offerData.start}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
