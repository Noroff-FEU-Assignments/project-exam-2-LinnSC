import { Box, TableContainer } from "@mui/material";
import ProfileTableTitle from "./ProfileTableTitle";
import ProfileTableInfo from "./ProfileTableInfo";
import { TableHeading, TableInfo, StyledTable } from "./ProfileTable.Styles";

export default function ProfileTable() {
  return (
    <TableContainer component={Box}>
      <StyledTable>
        <TableHeading>
          <ProfileTableTitle />
        </TableHeading>
        <TableInfo>
          <ProfileTableInfo />
        </TableInfo>
      </StyledTable>
    </TableContainer>
  );
}
