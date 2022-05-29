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
  timesheetHeader,
  timesheetData,
} from "../../../utils/data/DashboardData/DashboardData";

export default function OfferTable() {
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow sx={{ backgroundColor: "primaryShades.three" }}>
          {timesheetHeader.map((timesheetHeader) => (
            <TableCell key={timesheetHeader.id}>
              <Box
                component="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box component="div"> {timesheetHeader.title}</Box>
                <Box component="div">
                  <Divider orientation="vertical" />
                </Box>
              </Box>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {timesheetData.map((timesheetData) => (
          <TableRow key={timesheetData.id}>
            <TableCell>{timesheetData.name}</TableCell>
            <TableCell>{timesheetData.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
