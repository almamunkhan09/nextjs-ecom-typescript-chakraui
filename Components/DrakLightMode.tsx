import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

function DrakLightMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      variant="outline"
      aria-label="dark-mode"
      size="sm"
      icon={
        colorMode === 'light' ? (
          <MdOutlineLightMode size="1rem" />
        ) : (
          <MdDarkMode size="1rem" />
        )
      }
      onClick={() => {
        toggleColorMode();
      }}
    />
  );
}

export default DrakLightMode;
