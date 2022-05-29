import { Card, Avatar, Stack } from "@mui/material";
import React from "react";
import DashboardCardContent from "./CardContent";
import { birthdayData } from "../../../utils/data/DashboardData/DashboardData";

export default function BirthdayCard() {
  return (
    <Card
      variant="outlined"
      sx={{ borderColor: "customPurple.main", p: { xs: 1 } }}
    >
      <DashboardCardContent title="Bursdager">
        <Stack spacing={2}>
          {birthdayData.map((bday) => {
            return (
              <Card key={bday.id} sx={{ height: "70px" }}>
                <DashboardCardContent
                  avatar={
                    <Avatar sx={{ backgroundColor: "customPurple.main" }} />
                  }
                  title={bday.name}
                  subheader={bday.phone}
                />
              </Card>
            );
          })}
        </Stack>
      </DashboardCardContent>
    </Card>
  );
}
