import { TableCell } from "@mui/material";
import { ProfileHeadData } from "../../../utils/data/TableData/ProfileData";
import { StyledTableTitle } from "./ProfileTable.Styles";

export default function ProfileTableTitle() {
  return (
    <StyledTableTitle>
      {ProfileHeadData.map((ProfileHeadData) => (
        <TableCell
          sx={{ height: { xs: `${ProfileHeadData.height}`, sm: "auto" } }}
          key={ProfileHeadData.id}
        >
          {ProfileHeadData.title}
        </TableCell>
      ))}
    </StyledTableTitle>
  );
}
