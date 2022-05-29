import {
  Dialog,
  DialogActions,
  DialogContent,
  CircularProgress,
  Box,
} from "@mui/material";
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
import Header from "../../Typography/Header";
import SecondaryBtn from "../../Buttons/SecondaryButton";
import EditForm from "./EditForm";

export default function SubmitForm() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => {
    setOpenDialog(false);
  };

  const goBack = () => {
    navigate("/medarbeider");
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
      <Formik
        initialValues={{ ...INITIAL_CANDIDATE_STATE }}
        validationSchema={CANDIDATE_VALIDATION}
        onSubmit={onSubmit}
        enableReinitialize
      >
        <Form>
          {serverError ? (
            <AlertMessage severity="error" sx={{ marginTop: 3 }}>
              {serverError}
            </AlertMessage>
          ) : (
            ""
          )}
          <EditForm />
          <Box>
            {submitting ? (
              <SubmitBtn>
                <CircularProgress
                  size="20px"
                  sx={{ color: "black", mr: "10px" }}
                />
                Lagrer
              </SubmitBtn>
            ) : (
              <SubmitBtn>Lagre</SubmitBtn>
            )}
          </Box>
        </Form>
      </Formik>

      <Box component="div">
        <Dialog open={openDialog} onClose={handleClose}>
          <DialogContent>
            <Header variant="h6">
              Medarbeider er registrert. Ønsker du å registrere en ny
              medarbeider?
            </Header>
          </DialogContent>
          <DialogActions>
            <SecondaryBtn fullWidth={true} onClick={handleClose}>
              Ja
            </SecondaryBtn>
            <SecondaryBtn fullWidth={true} onClick={goBack}>
              Nei
            </SecondaryBtn>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}
