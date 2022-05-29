import Layout from "../../components/layout/Layout/Layout";
import { Grid } from "@mui/material";
import Header from "../../components/Typography/Header";
import PagesContainer from "../../components/layout/Layout/PagesContainer";
import { H1Styles } from "../../components/Typography/Header.Styles";
import ProfileCard from "../../components/cards/ProfileCard/ProfileCard";
import { TabTitle, mainTitle } from "../../utils/Helpers/TabTitle";

export default function ProfileCandidate() {
  TabTitle(`Medarbeider profil | ${mainTitle}`);
  return (
    <Layout>
      <PagesContainer maxWidth="lg">
        <Grid container spacing={7}>
          <Grid item xs={12}>
            <Header variant="h1" sx={H1Styles}>
              Medarbeider profil
            </Header>
          </Grid>
          <Grid item xs={12}>
            <ProfileCard />
          </Grid>
        </Grid>
      </PagesContainer>
    </Layout>
  );
}
