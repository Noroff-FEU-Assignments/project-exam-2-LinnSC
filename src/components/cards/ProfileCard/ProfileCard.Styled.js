import { styled, Card, Grid, Avatar } from "@mui/material";

export const StyledProfileCard = styled(Card)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  padding: "10px 0 0 0",
  border: `1px solid ${theme.palette.primary.main}`,
}));

export const StyledProfileAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  width: "100px",
  height: "100px",
  m: 2,
  [theme.breakpoints.up("md")]: {
    width: "150px",
    height: "150px",
  },
  [theme.breakpoints.up("xl")]: {
    width: "200px",
    height: "200px",
  },
}));

export const AvatarContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const HeaderContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
