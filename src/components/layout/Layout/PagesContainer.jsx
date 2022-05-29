import PropTypes from "prop-types";
import BackButton from "../../Buttons/BackButton";
import LayoutHeader from "./LayoutHeader";
import { StyledContainer } from "./PagesContainer.Styled";

function PagesContainer({ children, maxWidth }) {
  return (
    <StyledContainer maxWidth={maxWidth}>
      <LayoutHeader />
      <BackButton>Tilbake</BackButton>
      {children}
    </StyledContainer>
  );
}

export default PagesContainer;

PagesContainer.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string.isRequired,
};
