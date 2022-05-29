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
  offerData,
} from "../../../utils/data/DashboardData/DashboardData";

export default function OfferTable() {
  return (
    <Table aria-label="simple table">
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
        {offerData.map((offerData) => (
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
