import {
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  Stack,
} from "@mui/material";
import ContainedBtn from "../Buttons/ContainedButton";

import PropTypes from "prop-types";

const paperpropStyles = {
  style: {
    padding: "20px",
  },
};

export default function FormDialog({
  children,
  open,
  onClose,
  onClickYes,
  onClickNo,

  ...otherProps
}) {
  return (
    <Box component="div">
      <Dialog
        {...otherProps}
        open={open}
        onClose={onClose}
        PaperProps={paperpropStyles}
      >
        <DialogContent>
          <Stack spacing={2}>{children}</Stack>
        </DialogContent>
        <DialogActions>
          <ContainedBtn
            size="small"
            color="secondary"
            fullWidth={true}
            onClick={onClickYes}
          >
            Ja
          </ContainedBtn>
          <ContainedBtn
            size="small"
            color="secondary"
            fullWidth={true}
            onClick={onClickNo}
          >
            Nei
          </ContainedBtn>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

FormDialog.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onClickYes: PropTypes.func,
  onClickNo: PropTypes.func,
};
