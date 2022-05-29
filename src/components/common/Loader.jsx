import { Box, CircularProgress } from "@mui/material";

const StyledLoader = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "500px",
};

export default function Loader() {
  return (
    <Box sx={StyledLoader}>
      <CircularProgress size="60px" color="secondary" />
    </Box>
  );
}
