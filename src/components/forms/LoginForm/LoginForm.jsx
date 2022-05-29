import { CircularProgress, Stack } from "@mui/material";
import SubmitBtn from "../../Buttons/SubmitBtn";
import AuthContext from "../../../utils/context/AuthContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import axios from "axios";
import { BASE_URL, TOKEN_PATH } from "../../../utils/constants/Api";
import { LOGIN_VALIDATION } from "../../../utils/constants/FormValidation";
import AlertMessage from "../../common/AlertMessage";
import TextInput from "../FormsUI/TextInput";
import { INITIAL_LOGIN_STATE } from "../../../utils/constants/InitialFormState";

const TOKEN_URL = BASE_URL + TOKEN_PATH;

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const [auth, setAuth] = useContext(AuthContext);

  async function doLogin(data) {
    setSubmitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(TOKEN_URL, data);
      console.log("response", response.data);

      const result = response.data;

      setAuth(result);

      navigate("/dashboard");
    } catch (error) {
      console.log("error", error);
      setLoginError("Du har skrevet inn feil brukernavn eller passord.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Formik
      initialValues={{ ...INITIAL_LOGIN_STATE }}
      validationSchema={LOGIN_VALIDATION}
      onSubmit={doLogin}
    >
      <Form>
        {loginError ? (
          <AlertMessage severity="error" sx={{ marginTop: 3 }}>
            {loginError}
          </AlertMessage>
        ) : (
          ""
        )}

        <Stack
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextInput
            required={true}
            name="identifier"
            label="Brukernavn"
            formhelper="Skriv inn ditt brukernavn"
          />
          <TextInput
            required={true}
            name="password"
            label="Passord"
            type="password"
            formhelper="Skriv inn ditt passord"
          />
          {submitting ? (
            <SubmitBtn fullWidth={true} size="large">
              <CircularProgress
                size="20px"
                sx={{ color: "white", mr: "10px" }}
              />
              Logger inn
            </SubmitBtn>
          ) : (
            <SubmitBtn fullWidth={true} size="large">
              Logg inn
            </SubmitBtn>
          )}
        </Stack>
      </Form>
    </Formik>
  );
}
