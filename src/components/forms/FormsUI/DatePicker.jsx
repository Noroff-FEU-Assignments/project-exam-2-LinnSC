import { FormHelperText } from "@mui/material";
import { StyledTextInput } from "./FormUI.Styles";
import { useField } from "formik";
import PropTypes from "prop-types";

export default function DatePicker({ name, formhelper, ...otherProps }) {
  const [field, meta] = useField(name);

  const configDatePicker = {
    ...field,
    ...otherProps,
    type: "date",
    fullWidth: true,
    variant: "outlined",
    InputLabelProps: {
      shrink: true,
    },
  };

  if (meta && meta.touched && meta.error) {
    configDatePicker.error = true;
    configDatePicker.helperText = meta.error;
  }

  return (
    <>
      <StyledTextInput
        aria-describedby={`${name}-helpertext`}
        {...configDatePicker}
      />
      <FormHelperText sx={{ display: "none" }} id={`${name}-helpertext`}>
        {formhelper}
      </FormHelperText>
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.node,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
};
