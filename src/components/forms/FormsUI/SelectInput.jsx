import { FormHelperText } from "@mui/material";
import { StyledTextInput } from "./FormUI.Styles";
import { useField, useFormikContext } from "formik";
import PropTypes from "prop-types";

export default function SelectInput({
  children,
  name,
  formhelper,
  ...otherProps
}) {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    fullWidth: true,
    variant: "outlined",
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <>
      <StyledTextInput
        aria-describedby={`${name}-helpertext`}
        {...configSelect}
      >
        {children}
      </StyledTextInput>

      <FormHelperText sx={{ display: "none" }} id={`${name}-helpertext`}>
        {formhelper}
      </FormHelperText>
    </>
  );
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  value: PropTypes.node,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
};
