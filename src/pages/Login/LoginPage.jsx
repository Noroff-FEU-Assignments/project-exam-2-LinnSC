import { styled, Box } from "@mui/material";
import LoginLayout from "../../components/layout/LoginLayout/LoginLayout";
import loginLogo from "../../assets/images/login-logo.png";
import LoginCard from "../../components/cards/LoginCard/LoginCard";
import { TabTitle, mainTitle } from "../../utils/Helpers/TabTitle";

export const LoginLogo = styled("img")(({ theme }) => ({
  width: "200px",
  [theme.breakpoints.up("sm")]: {
    width: "300px",
  },
}));

export default function Login() {
  TabTitle(`${mainTitle}`);
  return (
    <LoginLayout>
      <Box>
        <LoginLogo src={loginLogo} alt="JK Portalen Logo" />
      </Box>
      <Box>
        <LoginCard />
      </Box>
    </LoginLayout>
  );
}
