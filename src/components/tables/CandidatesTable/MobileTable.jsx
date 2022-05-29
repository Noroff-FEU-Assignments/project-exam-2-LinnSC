import { useState, useEffect } from "react";
import DataTable from "./DataTable";
import { CANDIDATES_URL } from "../../../utils/constants/Api";
import FetchAPI from "../../../utils/lib/FetchApi";
import { columnsMobile } from "../../../utils/data/TableData/ColumnData";
import AlertMessage from "../../common/AlertMessage";
import { CANDIDATES_ERROR } from "../../../utils/constants/AlertMessages";
import { Box } from "@mui/material";

export default function CandidateTable() {
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function getData(data) {
      let candidates = [];

      try {
        candidates = await FetchAPI(CANDIDATES_URL);

        const result = candidates.data;

        setCandidates(result);
      } catch (error) {
        setError(CANDIDATES_ERROR);
      }
    }
    getData();
  }, []);

  if (error) {
    return (
      <Box sx={{ mt: 5 }}>
        <AlertMessage severity="error">{error}</AlertMessage>
      </Box>
    );
  }

  return (
    <DataTable
      rowsPerPageOptions={[10, 15, 20]}
      rows={candidates}
      columns={columnsMobile}
      loading={!candidates.length}
    />
  );
}
