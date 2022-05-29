import { Grid, MenuItem } from "@mui/material";
import SelectInput from "../FormsUI/SelectInput";
import DatePicker from "../FormsUI/DatePicker";
import {
  statusData,
  positionTypeData,
} from "../../../utils/data/FormData/selectData";
import TextInput from "../FormsUI/TextInput";
import Header from "../../Typography/Header";

const CorrectSelect = { marginBottom: 3, marginTop: 1 };

export default function CandidateForm() {
  return (
    <Grid container rowSpacing={{ xs: 2, md: 3 }}>
      <Grid item container rowSpacing={{ xs: 0, md: 1 }} columnSpacing={3}>
        <Grid item xs={12}>
          <Header variant="subtitle2">Personalia</Header>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput
            name="name"
            label="Fornavn"
            formhelper="Skriv inn fornavn på medarbeider"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput
            name="surName"
            label="Etternavn"
            formhelper="Skriv inn etternavn på medarbeider"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput
            name="email"
            label="Epost"
            formhelper="Skriv inn eposten til medarbeider"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput
            name="phone"
            label="Mobil"
            formhelper="Skriv inn mobilnummer uten mellomrom"
          />
        </Grid>
        <Grid item xs={12}>
          <DatePicker
            sx={CorrectSelect}
            name="dateofbirth"
            label="Fødselsdato"
            formhelper="Skriv inn fødselsdato med hele årstall"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput
            name="accountnr"
            label="Kontonummer"
            formhelper="Skriv inn kontonummer uten mellomrom"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput
            name="socialSecurityNum"
            label="Personnummer"
            formhelper="Skriv inn personnummer uten mellomrom"
          />
        </Grid>
        <Grid item xs={12}>
          <TextInput
            name="emergencyContact"
            label="Kontaktinformasjon pårørende"
            formhelper="Skriv inn navn og telefonnummer på pårørende"
            multiline={true}
            rows={2}
          />
        </Grid>
      </Grid>

      <Grid item container rowSpacing={{ xs: 0, md: 1 }} columnSpacing={3}>
        <Grid item xs={12}>
          <Header variant="subtitle2">Adresse</Header>
        </Grid>
        <Grid item xs={12}>
          <TextInput
            name="street"
            label="Gate adresse"
            formhelper="Skriv inn gate adresse"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput
            name="postalCode"
            label="Postnummer"
            formhelper="Skriv inn postnummer ingen mellomrom"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput name="city" label="By" formhelper="Skriv inn by" />
        </Grid>
      </Grid>

      <Grid item container rowSpacing={{ xs: 0, md: 1 }} columnSpacing={3}>
        <Grid item xs={12}>
          <Header variant="subtitle2">Nøkkelinformasjon</Header>
        </Grid>
        <Grid item xs={12}>
          <TextInput
            name="personalConsultant"
            label="Personalekonsulent"
            formhelper="Skriv inn personalekonsulent"
          />
        </Grid>
        <Grid item xs={12}>
          <SelectInput
            sx={CorrectSelect}
            name="status"
            label="Status"
            formhelper="Velg status som medarbeider skal ha"
          >
            {statusData.map((options) => {
              const { id, title } = options;

              return (
                <MenuItem key={id} value={title}>
                  {title}
                </MenuItem>
              );
            })}
          </SelectInput>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput
            name="vacancyRate"
            label="Stillingsprosent"
            formhelper="Velg stillingsprosent. Du kan ikke velge lavere enn 5 og høyere enn 100 prosent"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput
            name="seniority"
            label="Ansiennitet"
            formhelper="Velg ansiennitet. Du kan ikke velge mer enn 60års ansiennitet."
          />
        </Grid>
        <Grid item xs={12}>
          <SelectInput
            sx={CorrectSelect}
            name="positionType"
            label="Stillingstype"
            formhelper="Velg stillingstype"
          >
            {positionTypeData.map((options) => {
              const { id, title } = options;

              return (
                <MenuItem key={id} value={title}>
                  {title}
                </MenuItem>
              );
            })}
          </SelectInput>
        </Grid>
      </Grid>
    </Grid>
  );
}
