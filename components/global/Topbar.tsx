"use client";

import { ColorModeContext, tokens } from "@/app/theme";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { useContext } from "react";
import {
  BellIcon,
  GearIcon,
  MagnifyingGlassIcon,
  MoonStarsIcon,
  SunDimIcon,
  UserIcon,
} from "@phosphor-icons/react";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: colors.primary[400],
          borderRadius: "3px",
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <MagnifyingGlassIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex" }}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <MoonStarsIcon /> : <SunDimIcon />}
        </IconButton>
        <IconButton>
          <BellIcon />
        </IconButton>
        <IconButton>
          <GearIcon />
        </IconButton>
        <IconButton>
          <UserIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
