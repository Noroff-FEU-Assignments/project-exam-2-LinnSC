import DashboardIcon from "@mui/icons-material/Dashboard";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import TaskIcon from "@mui/icons-material/Task";
import PaidIcon from "@mui/icons-material/Paid";

export const SideBarData = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    title: "Medarbeider",
    path: "/medarbeider",
    icon: <RecentActorsIcon />,
  },
  {
    id: 3,
    title: "Kunde",
    path: "/kunde",
    icon: <CorporateFareIcon />,
  },
  {
    id: 4,
    title: "Timelister",
    path: "/timelister",
    icon: <AccessTimeFilledIcon />,
  },
  {
    id: 5,
    title: "Oppdrag",
    path: "/oppdrag",
    icon: <TaskIcon />,
  },
  {
    id: 6,
    title: "Avregning",
    path: "/avregning",
    icon: <PaidIcon />,
  },
];
