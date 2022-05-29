import { FormHelperText } from "@mui/material";
import { StyledTextInput } from "./FormUI.Styles";
import { useField } from "formik";
import PropTypes from "prop-types";

export default function TextInput({ name, formhelper, ...otherProps }) {
  const [field, meta] = useField(name);
  const configInputText = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
    margin: "dense",
    helperText: " ",
  };

  if (meta && meta.touched && meta.error) {
    configInputText.error = true;
    configInputText.helperText = meta.error;
  }

  return (
    <>
      <StyledTextInput
        aria-describedby={`${name}-helpertext`}
        {...configInputText}
      />
      <FormHelperText sx={{ display: "none" }} id={`${name}-helpertext`}>
        {formhelper}
      </FormHelperText>
    </>
  );
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.node,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
};
