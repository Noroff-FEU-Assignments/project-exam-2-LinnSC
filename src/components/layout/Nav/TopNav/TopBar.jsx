import { Box, Link } from "@mui/material";
import LogoSmall from "../../../../assets/images/logo-small.png";
import AvatarMenu from "./AvatarMenu";
import MobileDrawer from "../MobileNav/MobileDrawer";
import { StyledTopBar, StyledLogo, StyledToolBar } from "./TopBar.Styles";
import ShowMobile from "../../../common/ShowMobile";

export default function TopBar() {
  return (
    <StyledTopBar>
      <StyledToolBar>
        <ShowMobile>
          <MobileDrawer />
          <Link href="/dashboard">
            <StyledLogo src={LogoSmall} alt="JK Portalen Logo" />
          </Link>
        </ShowMobile>

        <Box component="div" sx={{ p: { md: 2 } }}>
          <AvatarMenu />
        </Box>
      </StyledToolBar>
    </StyledTopBar>
  );
}
