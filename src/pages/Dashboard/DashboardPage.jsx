import { Grid, Container, Stack } from "@mui/material";
import BirthdayCard from "../../components/cards/DashboardCards/BirthdayCard";
import HoldbackCard from "../../components/cards/DashboardCards/HoldbackCard";
import LinkCard from "../../components/cards/DashboardCards/LinkCard";
import OfferCard from "../../components/cards/DashboardCards/OfferCard";
import TimeSheetCard from "../../components/cards/DashboardCards/TimeSheetCard";
import Layout from "../../components/layout/Layout/Layout";
import LayoutHeader from "../../components/layout/Layout/LayoutHeader";
import { TabTitle, mainTitle } from "../../utils/Helpers/TabTitle";

export default function Dashboard() {
  TabTitle(`Dashboard | ${mainTitle}`);
  return (
    <Layout>
      <Container maxWidth="lg">
        <LayoutHeader />
        <Grid
          container
          rowSpacing={{ xs: 2, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {/* <Grid item xs={12}>
           
          </Grid> */}

          <Grid
            item
            container
            rowSpacing={{ xs: 2, sm: 2, md: 5 }}
            columnSpacing={{ xs: 1, sm: 2, md: 5 }}
            // sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid item xs={12} md={7} lg={8}>
              <OfferCard />
            </Grid>

            <Grid item xs={12} md={5} lg={4}>
              <Stack spacing={{ xs: 1, sm: 2, md: 3 }}>
                <BirthdayCard />

                <HoldbackCard />
              </Stack>
            </Grid>
          </Grid>

          <Grid
            item
            container
            rowSpacing={{ xs: 2, sm: 2, md: 5 }}
            columnSpacing={{ xs: 1, sm: 2, md: 5 }}
          >
            <Grid item xs={12} md={7} lg={8}>
              <TimeSheetCard />
            </Grid>

            <Grid item xs={12} md={5} lg={4}>
              <LinkCard />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
