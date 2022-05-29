import MyFab from "../../components/Buttons/MyFab";
import Layout from "../../components/layout/Layout/Layout";
import AddIcon from "@mui/icons-material/Add";
import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Typography/Header";
import PagesContainer from "../../components/layout/Layout/PagesContainer";
import { H1Styles } from "../../components/Typography/Header.Styles";
import SearchField from "../../components/forms/Search/SearchField";
import CandidatesTable from "../../components/tables/CandidatesTable/CandidatesTable";
import MobileTable from "../../components/tables/CandidatesTable/MobileTable";
import { TabTitle, mainTitle } from "../../utils/Helpers/TabTitle";

export default function CandidatePage() {
  TabTitle(`Medarbeider | ${mainTitle}`);
  const navigate = useNavigate();
  const navTo = () => {
    navigate("registrer");
  };

  return (
    <Layout>
      <PagesContainer maxWidth="lg">
        <MyFab
          sx={{ mt: "110px", mr: { xs: 0, md: 2 } }}
          toolTitle="Registrer medarbeider"
          onClick={navTo}
          ariaLabel="Registrer medarbeider"
        >
          <AddIcon />
        </MyFab>

        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Header variant="h1" sx={H1Styles}>
              Medarbeider oversikt
            </Header>
          </Grid>
          <Grid item xs={12}>
            <SearchField />
          </Grid>
          <Grid item xs={12}>
            <Box component="div" sx={{ display: { xs: "none", sm: "block" } }}>
              <CandidatesTable />
            </Box>
            <Box component="div" sx={{ display: { xs: "block", sm: "none" } }}>
              <MobileTable />
            </Box>
          </Grid>
        </Grid>
      </PagesContainer>
    </Layout>
  );
}
