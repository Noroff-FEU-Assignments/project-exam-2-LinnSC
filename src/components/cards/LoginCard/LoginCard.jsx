import Header from "../../Typography/Header";
import { CardContent } from "@mui/material";
import LoginForm from "../../forms/LoginForm/LoginForm";
import { H1Styles } from "../../Typography/Header.Styles";
import { StyledLoginCard } from "./LoginCard.Styled";

export default function LoginCard() {
  return (
    <StyledLoginCard>
      <CardContent>
        <Header variant="h1" sx={H1Styles}>
          Logg inn
        </Header>
        <Header
          variant="h6"
          sx={{
            mt: 1,
          }}
        >
          JK Portalen for Jobbkretsers partnere
        </Header>
      </CardContent>
      <CardContent>
        <LoginForm />
      </CardContent>
    </StyledLoginCard>
  );
}
