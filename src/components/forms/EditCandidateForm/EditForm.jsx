import { Box, CircularProgress, Stack, Card } from "@mui/material";
import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CANDIDATES_URL } from "../../../utils/constants/Api";
import FetchAPI from "../../../utils/lib/FetchApi";
import Loader from "../../common/Loader";
import AlertMessage from "../../common/AlertMessage";
import { CANDIDATE_VALIDATION } from "../../../utils/constants/FormValidation";
import CandidateForm from "../CommonForm/CandidateForm";
import SubmitBtn from "../../Buttons/SubmitBtn";
import useAxios from "../../../utils/hooks/useAxios";
import Header from "../../Typography/Header";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FormDialog from "../../Dialog/FormDialog";
import {
  SHOW_EDITFORM_ERROR,
  UPDATE_EDITFORM_ERROR,
} from "../../../utils/constants/AlertMessages";

export default function SubmitForm() {
  const [updated, setUpdated] = useState(false);
  const [updatingPost, setUpdatingPost] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [editForm, setEditForm] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);

  let { id } = useParams();
  const EDIT_URL = CANDIDATES_URL + `/${id}`;

  const http = useAxios();

  const navigate = useNavigate();

  const handleClose = () => {
    setOpenDialog(false);
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(function () {
    setLoading(true);

    async function getData(data) {
      let candidate = [];

      try {
        candidate = await FetchAPI(EDIT_URL);

        const result = candidate.data.attributes;

        setEditForm(result);
      } catch (error) {
        console.log(error);
        setServerError(SHOW_EDITFORM_ERROR);
      } finally {
        setLoading(false);
      }
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function editData(data, actions) {
    setUpdatingPost(true);
    setServerError(null);
    setUpdated(false);

    const candidateData = data;

    try {
      const response = await http.put(EDIT_URL, {
        data: candidateData,
      });

      console.log("response", response);
      setUpdated(true);
      setOpenDialog(true);
    } catch (error) {
      console.log("error", error);
      window.scrollTo(0, 0);
      setServerError(UPDATE_EDITFORM_ERROR);
    } finally {
      setUpdatingPost(false);
    }
  }

  if (loading) {
    <Loader />;
  }

  if (serverError) {
    return (
      <Box sx={{ mt: 5, maxWidth: "900px" }}>
        <AlertMessage severity="error">{serverError}</AlertMessage>
      </Box>
    );
  }

  const NEW_CANDIDATE_STATE = {
    name: `${editForm.name}`,
    surName: `${editForm.surName}`,
    email: `${editForm.email}`,
    phone: `${editForm.phone}`,
    accountnr: `${editForm.accountnr}`,
    dateofbirth: `${editForm.dateofbirth}`,
    socialSecurityNum: `${editForm.socialSecurityNum}`,
    emergencyContact: `${editForm.emergencyContact}`,
    street: `${editForm.street}`,
    postalCode: `${editForm.postalCode}`,
    city: `${editForm.city}`,
    personalConsultant: `${editForm.personalConsultant}`,
    status: `${editForm.status}`,
    vacancyRate: `${editForm.vacancyRate}`,
    positionType: `${editForm.positionType}`,
    seniority: `${editForm.seniority}`,
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={{ p: { xs: 1, sm: 3, md: 4 }, borderColor: "primary.main" }}
      >
        <Formik
          initialValues={{ ...NEW_CANDIDATE_STATE }}
          validationSchema={CANDIDATE_VALIDATION}
          onSubmit={editData}
          enableReinitialize
        >
          <Box>
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
                {updatingPost ? (
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
          </Box>
        </Formik>
      </Card>
      <FormDialog
        open={openDialog}
        onClose={handleClose}
        onClickYes={goBack}
        onClickNo={handleClose}
      >
        <Stack direction="row" spacing={1}>
          <Header variant="h6">Medarbeider er oppdatert!</Header>
          <CheckCircleIcon color="success" />
        </Stack>
        <Header variant="Subtitle2">
          Er du ferdig med å redigere denne medarbeideren?
        </Header>
      </FormDialog>
    </>
  );
}
