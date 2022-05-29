import { Card, Stack, Link, Box } from "@mui/material";
import React from "react";
import DashboardCardContent from "./CardContent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { linkData } from "../../../utils/data/DashboardData/DashboardData";

export default function LinkCard() {
  return (
    <Card
      variant="outlined"
      sx={{ borderColor: "customGreen.main", p: { xs: 1 } }}
    >
      <DashboardCardContent title="Nyttige linker">
        <Stack spacing={4}>
          {linkData.map((link) => {
            return (
              <Link
                sx={{
                  color: "customGreen.main",
                  display: "flex",
                  justifyItems: "center",
                }}
                key={link.id}
                target="_blank"
                rel="noopener"
                href={link.link}
                underline="none"
              >
                <ArrowForwardIcon sx={{ mr: 1 }} />
                <Box component="span">{link.name}</Box>
              </Link>
            );
          })}
        </Stack>
      </DashboardCardContent>
    </Card>
  );
}
