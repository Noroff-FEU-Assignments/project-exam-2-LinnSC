import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
import { StyledBackBtn } from "./Buttons.Styled";
import PropTypes from "prop-types";

export default function BackButton({ children, onClick, ...otherProps }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <StyledBackBtn onClick={goBack} {...otherProps}>
      <ChevronLeftIcon sx={{ mr: 1 }} />
      {children}
    </StyledBackBtn>
  );
}

BackButton.propTypes = {
  children: PropTypes.string.isRequired,
};
