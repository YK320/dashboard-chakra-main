// Chakra imports
import {
  Portal,
  useDisclosure,
  useColorMode,
  Stack,
  Box,
} from "@chakra-ui/react";
import { RtlProvider } from "components/RTLProvider/RTLProvider";
import Configurator from "components/Configurator/Configurator";
import Footer from "components/Footer/Footer.js";
// Layout components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "routes.js";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin";
// Custom components
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";

export default function Dashboard(props) {
  const { ...rest } = props;
  // states and functions
  const [sidebarVariant, setSidebarVariant] = useState("transparent");
  const [fixed, setFixed] = useState(false);
  const mainPanel = React.createRef();
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  document.documentElement.dir = "rtl";

  return (
    <RtlProvider>
      <Box
        minH="100vh"
        w="100%"
        position="absolute"
        display="flex"
        flexDirection="column"
        transform="rotate(180deg)" // Rotates the entire page
      >
        <Sidebar routes={routes} sidebarVariant={sidebarVariant} />
        <MainPanel ref={mainPanel}>
          <AdminNavbar
            onOpen={onOpen}
            brandText={"Dashboard"}
            fixed={fixed}
            {...rest}
          />
          <PanelContainer>
            <PanelContent>
              <Switch>
                {routes.map((prop, key) => (
                  <Route path={prop.layout + prop.path} component={prop.component} key={key} />
                ))}
                <Redirect from="/" to="/rtl/dashboard" />
              </Switch>
            </PanelContent>
          </PanelContainer>
          <Footer />
        </MainPanel>
      </Box>
    </RtlProvider>
  );
}
