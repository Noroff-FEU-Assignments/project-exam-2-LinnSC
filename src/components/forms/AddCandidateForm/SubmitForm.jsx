import { CircularProgress, Box, Stack, Card } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import SubmitBtn from "../../Buttons/SubmitBtn";
import { CANDIDATE_VALIDATION } from "../../../utils/constants/FormValidation";
import { INITIAL_CANDIDATE_STATE } from "../../../utils/constants/InitialFormState";
import { useNavigate } from "react-router-dom";
import { CANDIDATES_URL } from "../../../utils/constants/Api";
import useAxios from "../../../utils/hooks/useAxios";
import AlertMessage from "../../common/AlertMessage";
import { ADD_CANDIDATE_ERROR } from "../../../utils/constants/AlertMessages";
import CandidateForm from "../CommonForm/CandidateForm";
import Header from "../../Typography/Header";

import FormDialog from "../../Dialog/FormDialog";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function SubmitForm() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => {
    setOpenDialog(false);
  };

  const goBack = () => {
    navigate(-1);
  };

  const http = useAxios();

  async function onSubmit(data, actions) {
    setSubmitting(true);
    setServerError(null);

    console.log(data);
    const candidateData = data;

    try {
      await http.post(CANDIDATES_URL, {
        data: candidateData,
      });

      setOpenDialog(true);

      actions.resetForm();
    } catch (error) {
      console.log("error", error);
      window.scrollTo(0, 0);
      setServerError(ADD_CANDIDATE_ERROR);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Card
        variant="outlined"
        sx={{ p: { xs: 1, sm: 3, md: 4 }, borderColor: "primary.main" }}
      >
        <Formik
          initialValues={{ ...INITIAL_CANDIDATE_STATE }}
          validationSchema={CANDIDATE_VALIDATION}
          onSubmit={onSubmit}
        >
          <Form>
            {serverError ? (
              <AlertMessage severity="error" sx={{ marginTop: 3 }}>
                {serverError}
              </AlertMessage>
            ) : (
              ""
            )}
            <CandidateForm />
            <Box component="div" sx={{ mt: { xs: 3, md: 5 }, width: "100%" }}>
              {submitting ? (
                <SubmitBtn size="lage">
                  <CircularProgress
                    size="20px"
                    sx={{ color: "black", mr: "10px" }}
                  />
                  Lagrer
                </SubmitBtn>
              ) : (
                <SubmitBtn fullWidth size="lage">
                  Lagre
                </SubmitBtn>
              )}
            </Box>
          </Form>
        </Formik>
      </Card>

      <FormDialog
        open={openDialog}
        onClose={handleClose}
        onClickYes={handleClose}
        onClickNo={goBack}
      >
        <Stack direction="row" spacing={1}>
          <Header variant="h6">Medarbeider er registrert!</Header>
          <CheckCircleIcon color="success" />
        </Stack>
        <Header variant="Subtitle2">
          Ønsker du å registrere en nymedarbeider?
        </Header>
      </FormDialog>
    </>
  );
}
