import Layout from "../../components/layout/Layout/Layout";
import { Grid } from "@mui/material";
import Header from "../../components/Typography/Header";
import PagesContainer from "../../components/layout/Layout/PagesContainer";
import { H1Styles } from "../../components/Typography/Header.Styles";
import SubmitForm from "../../components/forms/AddCandidateForm/SubmitForm";
import { TabTitle, mainTitle } from "../../utils/Helpers/TabTitle";

export default function AddCandidate() {
  TabTitle(`Registrer medarbeider | ${mainTitle}`);
  return (
    <Layout>
      <PagesContainer maxWidth="md">
        <Grid container spacing={7}>
          <Grid item xs={12}>
            <Header variant="h1" sx={H1Styles}>
              Registrer medarbeider
            </Header>
          </Grid>
          <Grid item xs={12}>
            <SubmitForm />
          </Grid>
        </Grid>
      </PagesContainer>
    </Layout>
  );
}
