import * as yup from "yup";
import {
  PHONE_REGEX,
  ACCOUNT_NR_REGEX,
  SOCIALSEC_REGEX,
  POSTALCODE_REGEX,
  VACANCYRATE_MIN,
  VACANCYRATE_MAX,
  SENIORITY_MIN,
  SENIORITY_MAX,
} from "./registration";

export const LOGIN_VALIDATION = yup.object().shape({
  identifier: yup.string().required("Vennligst skriv inn ditt brukernavn."),
  password: yup.string().required("Vennligst skriv inn ditt passord."),
});

export const CANDIDATE_VALIDATION = yup.object().shape({
  name: yup.string().required("Du må skrive inn fornavn."),
  surName: yup.string().required("Du må skrive inn etternavn."),
  email: yup
    .string()
    .email("Du må skrive inn en gyldig epostadresse.")
    .required("Du må skrive inn en epostadresse."),
  phone: yup
    .string()
    .required("Du må skrive inn et telefonnummer.")
    .matches(
      PHONE_REGEX,
      "Du må skrive inn et gyldig telefonnummer. Fjern eventuelle mellomrom."
    ),
  accountnr: yup
    .string()
    .required("Du må skrive inn et kontonummer")
    .matches(
      ACCOUNT_NR_REGEX,
      "Du må skrive inn et gyldig kontonummer. Fjern eventuelle mellomrom."
    ),
  dateofbirth: yup.date().required("Vennligst velg en fødselsdato."),
  socialSecurityNum: yup
    .string()
    .required("Du må skrive inn et personnummer.")
    .matches(
      SOCIALSEC_REGEX,
      "Du må skrive inn et gyldig personnummer. Fjern eventuelle mellomrom."
    ),
  emergencyContact: yup
    .string()
    .required("Du må skrive inn kontaktinformasjon til pårørende."),

  street: yup.string().required("Du må skrive inn gateadresse."),
  postalCode: yup
    .string()
    .required("Du må skrive inn postnummer.")
    .matches(
      POSTALCODE_REGEX,
      "Du må skrive inn gyldig postnummer. Fjern eventuelle mellomrom."
    ),
  city: yup.string().required("Du må skrive inn by."),
  personalConsultant: yup
    .string()
    .required("Du må skrive inn navn på personalekonsulent."),
  status: yup.string().required("Du må velge en status."),
  vacancyRate: yup
    .number()
    .typeError("Du må skrive inn en gyldig stillingsprosent.")
    .min(
      VACANCYRATE_MIN,
      ` Du kan ikke velge en lavere stillingsproent enn ${VACANCYRATE_MIN} prosent.`
    )
    .max(
      VACANCYRATE_MAX,
      ` Du kan ikke velge en høyere stillingsproent enn ${VACANCYRATE_MAX} prosent.`
    )
    .required("Du må skrive inn stillingsprosent."),
  positionType: yup.string().required("Du må velge en stillingstype."),
  seniority: yup
    .number()
    .typeError("Du må skrive inn gyldig ansiennitet.")
    .min(
      SENIORITY_MIN,
      `Du kan ikke velge en lavere ansiennitet enn ${SENIORITY_MIN}.`
    )
    .max(
      SENIORITY_MAX,
      `Du kan ikke velge en høyere ansiennitet enn ${SENIORITY_MAX} år.`
    )
    .required("Du må skrive inn ansiennitet."),
});
