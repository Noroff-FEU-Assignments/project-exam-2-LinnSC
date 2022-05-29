import { Box, Chip, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { CANDIDATES_URL } from "../../../utils/constants/Api";
import FetchAPI from "../../../utils/lib/FetchApi";
import Loader from "../../common/Loader";

function ProfileTableInfo() {
  const [candidate, setCandidate] = useState([]);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();
  const PROFILE_URL = CANDIDATES_URL + `/${id}`;

  useEffect(function () {
    async function getData(data) {
      let candidate = [];

      try {
        candidate = await FetchAPI(PROFILE_URL);
        const result = candidate.data.attributes;

        setCandidate(result);
      } catch (error) {
        console.log(error);
        // Does not set error here because the error will show in profile card
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

  return (
    <TableRow sx={{ display: "flex", flexDirection: "column" }}>
      <TableCell>{id}</TableCell>
      <TableCell>
        <Moment format="DD.MM.YYYY">{candidate.dateofbirth}</Moment>
      </TableCell>
      <TableCell>{candidate.socialSecurityNum}</TableCell>
      <TableCell>{candidate.accountnr}</TableCell>
      <TableCell>{candidate.email}</TableCell>
      <TableCell>{candidate.phone}</TableCell>
      <TableCell sx={{ height: { xs: "80px", sm: "auto" } }}>
        {candidate.street}, {candidate.postalCode} {candidate.city}
      </TableCell>
      <TableCell>{candidate.emergencyContact}</TableCell>
      <TableCell>{candidate.vacancyRate} %</TableCell>
      <TableCell sx={{ p: "12px" }}>
        <Chip
          color="secondary"
          label={candidate.positionType}
          variant="outlined"
        />
      </TableCell>
    </TableRow>
  );
}

export default ProfileTableInfo;
