import { Stack } from "@mui/material";

import PropTypes from "prop-types";
import { LoginContainer, LoginBackground } from "./LoginLayout.styles";

export default function LoginLayout({ children }) {
  return (
    <LoginBackground>
      <LoginContainer maxWidth="xs">
        <Stack alignItems="center" spacing={{ xs: 7, sm: 10 }}>
          {children}
        </Stack>
      </LoginContainer>
    </LoginBackground>
  );
}

LoginLayout.propTypes = {
  children: PropTypes.node,
};
