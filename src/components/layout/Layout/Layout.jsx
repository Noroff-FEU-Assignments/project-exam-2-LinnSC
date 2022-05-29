import PropTypes from "prop-types";
import PrivRoute from "../../common/PrivateRoute";
import TopBar from "../Nav/TopNav/TopBar";
import DesktopDrawer from "../Nav/DesktopNav/DesktopDrawer";
import { StyledLayout, StyledMain } from "./Layout.Styles";
import ShowDesktop from "../../common/ShowDesktop";

export default function Layout({ children }) {
  return (
    <PrivRoute>
      <StyledLayout>
        <TopBar />
        <ShowDesktop>
          <DesktopDrawer />
        </ShowDesktop>
        <StyledMain component="main">{children}</StyledMain>
      </StyledLayout>
    </PrivRoute>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
