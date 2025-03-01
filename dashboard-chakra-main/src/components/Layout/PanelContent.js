import { Box, useStyleConfig } from "@chakra-ui/react";
import React, { Component }  from 'react';
function PanelContent(props) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("PanelContent", { variant });
  
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default PanelContent;
