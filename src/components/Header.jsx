import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>Header</div>
  )
  
}

export default Header