import { useState, useEffect } from "react";
import DataTable from "./DataTable";
import { CANDIDATES_URL } from "../../../utils/constants/Api";
import FetchAPI from "../../../utils/lib/FetchApi";
import { columns } from "../../../utils/data/TableData/ColumnData";
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
        console.log(error);
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
      rowsPerPageOptions={[10, 20, 30, 40, 50]}
      rows={candidates}
      columns={columns}
      loading={!candidates.length}
    />
  );
}
