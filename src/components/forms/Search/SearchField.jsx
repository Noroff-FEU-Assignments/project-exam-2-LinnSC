import { Box, Stack, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import FetchAPI from "../../../utils/lib/FetchApi";
import { CANDIDATES_URL } from "../../../utils/constants/Api";
import { useNavigate } from "react-router-dom";
import {
  StyledSearch,
  StyledPaper,
  StyledListItem,
} from "./SearchField.Styles";
import AlertMessage from "../../common/AlertMessage";

import { SEARCH_ERROR } from "../../../utils/constants/AlertMessages";

export default function SearchField() {
  const [candidatesResult, setCandidatesResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [serverError, setServerError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(function () {
    async function getData(data) {
      let candidates = [];

      try {
        candidates = await FetchAPI(CANDIDATES_URL);

        const result = candidates.data;

        setCandidatesResult(result);
      } catch (error) {
        console.log(error);
        setServerError(SEARCH_ERROR);
      }
    }
    getData();
  }, []);

  if (serverError) {
    return (
      <Box sx={{ mt: 5, maxWidth: "900px" }}>
        <AlertMessage severity="error">{serverError}</AlertMessage>
      </Box>
    );
  }

  return (
    <Box component="div" sx={{ position: "relative" }}>
      <StyledSearch
        name="søk"
        label="Søk"
        placeholder="Søk på navn eller epost"
        onChange={handleChange}
      />
      <StyledPaper>
        {candidatesResult
          .filter((candidate) => {
            if (searchTerm === "") {
              return "";
            }
            if (
              candidate.attributes.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              candidate.attributes.surName
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              candidate.attributes.email
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return candidate;
            }
          })
          .map((candidate) => {
            return (
              <Box component="div" key={candidate.id}>
                <StyledListItem
                  onClick={() => {
                    navigate(`profil/${candidate.id}`);
                  }}
                >
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: "4px", sm: 3 }}
                  >
                    <Box component="div">
                      {candidate.attributes.name} {candidate.attributes.surName}
                    </Box>
                    <Box component="div">{candidate.attributes.email}</Box>
                  </Stack>
                </StyledListItem>
                <Divider light={true} />
              </Box>
            );
          })}
      </StyledPaper>
    </Box>
  );
}
