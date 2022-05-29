import { Box, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CANDIDATES_URL, IMAGE_POPULATE } from "../../../utils/constants/Api";
import FetchAPI from "../../../utils/lib/FetchApi";
import MyFab from "../../Buttons/MyFab";
import EditIcon from "@mui/icons-material/Edit";
import AlertMessage from "../../common/AlertMessage";
import Loader from "../../common/Loader";
import ProfileTable from "../../tables/ProfileTable/ProfileTable";
import Header from "../../Typography/Header";
import {
  StyledProfileCard,
  StyledProfileAvatar,
  AvatarContainer,
  HeaderContainer,
} from "./ProfileCard.Styled";
import { CANDIDATE_PROFILE_ERROR } from "../../../utils/constants/AlertMessages";

export default function ProfileCard() {
  const [candidate, setCandidate] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { id } = useParams();
  const PROFILE_URL = CANDIDATES_URL + `/${id}` + IMAGE_POPULATE;

  const navigate = useNavigate();
  const navTo = () => {
    navigate(`/medarbeider/rediger/${id}`);
  };

  useEffect(function () {
    async function getData(data) {
      let candidate = [];

      try {
        candidate = await FetchAPI(PROFILE_URL);

        const result = candidate.data.attributes;

        setCandidate(result);
      } catch (error) {
        console.log(error);
        setError(CANDIDATE_PROFILE_ERROR);
      } finally {
        setLoading(false);
      }
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    <Loader />;
  }

  if (error) {
    return (
      <Box sx={{ mt: 5, maxWidth: "900px" }}>
        <AlertMessage severity="error">{error}</AlertMessage>
      </Box>
    );
  }

  return (
    <>
      <MyFab
        sx={{ mt: "110px", mr: { xs: 1.5, md: 3 } }}
        toolTitle="Registrer medarbeider"
        onClick={navTo}
        ariaLabel="Registrer medarbeider"
      >
        <EditIcon />
      </MyFab>

      <StyledProfileCard>
        <Grid container spacing={1}>
          <AvatarContainer item xs={4} lg={3}>
            <Stack>
              <StyledProfileAvatar alt="Profile image" />
            </Stack>
          </AvatarContainer>
          <HeaderContainer item xs={8} lg={9}>
            <Box>
              <Header variant="h2">
                {candidate.name} {candidate.surName}
              </Header>
              <Header variant="subtitle1">{candidate.status}</Header>
            </Box>
          </HeaderContainer>

          <Grid item xs={12}>
            <ProfileTable />
          </Grid>
        </Grid>
      </StyledProfileCard>
    </>
  );
}
