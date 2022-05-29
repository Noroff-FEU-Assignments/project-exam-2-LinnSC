import { Card, Stack } from "@mui/material";
import ContainedBtn from "../../Buttons/ContainedButton";
import DashboardCardContent from "./CardContent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OfferTable from "../../tables/DashboardTables/OfferTable";
import AssignmentsTable from "../../tables/DashboardTables/AssignmentsTable";
import { useNavigate } from "react-router-dom";

export default function OfferCard() {
  const navigate = useNavigate();
  const navTo = () => {
    navigate(`/oppdrag`);
  };
  return (
    <Card
      variant="outlined"
      sx={{ borderColor: "primary.main", p: { xs: 2, md: 3 } }}
    >
      <DashboardCardContent title="Åpne tilbud">
        <Stack spacing={3}>
          <OfferTable />

          <ContainedBtn
            size="small"
            color="secondary"
            fullWidth={true}
            onClick={navTo}
          >
            Se alle jobbtilbud
            <ArrowForwardIcon sx={{ ml: 2 }} />
          </ContainedBtn>
        </Stack>
      </DashboardCardContent>
      <DashboardCardContent
        title="Kommende oppdrag"
        buttonText="Se alle oppdrag"
      >
        <Stack spacing={3}>
          <AssignmentsTable />
          <ContainedBtn
            size="small"
            color="secondary"
            fullWidth={true}
            onClick={navTo}
          >
            Se alle oppdrag
            <ArrowForwardIcon sx={{ ml: 2 }} />
          </ContainedBtn>
        </Stack>
      </DashboardCardContent>
    </Card>
  );
}
