import { Card, Box, Stack, Typography, Divider } from "@mui/material";
import React from "react";
import DashboardCardContent from "./CardContent";
import { holdbackData } from "../../../utils/data/DashboardData/DashboardData";
import Header from "../../Typography/Header";

export default function HoldbackCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        height: { xs: "auto", md: "430px" },
        borderColor: "customPink.main",
        p: { xs: 1, md: 2 },
      }}
    >
      <DashboardCardContent title="Holdback">
        <Stack spacing={3}>
          {holdbackData.map((hb) => {
            return (
              <Box key={hb.id}>
                <Header variant="subtitle2">{hb.title}</Header>
                <Divider />
                <Typography variant="largerNumbers">{hb.number}</Typography>
              </Box>
            );
          })}
        </Stack>
      </DashboardCardContent>
    </Card>
  );
}
