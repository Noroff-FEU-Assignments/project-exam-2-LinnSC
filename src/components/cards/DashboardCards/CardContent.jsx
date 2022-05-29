import React from "react";
import { CardContent, CardHeader } from "@mui/material";

export default function DashboardCardContent({
  children,
  title,
  subheader,
  avatar,
}) {
  return (
    <>
      <CardHeader
        avatar={avatar}
        title={title}
        subheader={subheader}
        sx={{ "& .MuiCardHeader-title": { fontWeight: "500" } }}
      />
      <CardContent>{children}</CardContent>
    </>
  );
}
