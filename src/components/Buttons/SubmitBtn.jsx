import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";

import React from "react";

export default function SubmitBtn({ children, ...otherProps }) {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configLoginBtn = {
    ...otherProps,
    fullWidth: true,
    variant: "contained",
    color: "secondary",
    onClick: handleSubmit,
  };
  return (
    <Button {...otherProps} {...configLoginBtn}>
      {children}
    </Button>
  );
}

SubmitBtn.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
};
