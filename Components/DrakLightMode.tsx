import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

function DrakLightMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      variant="outline"
      aria-label="dark-mode"
      // fontSize="20px"
      icon={
        colorMode === 'light' ? (
          <MdOutlineLightMode size="2rem" />
        ) : (
          <MdDarkMode size="2rem" />
        )
      }
      onClick={() => {
        toggleColorMode();
      }}
    />
  );
}

export default DrakLightMode;
