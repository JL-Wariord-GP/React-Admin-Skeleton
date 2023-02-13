import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>BarChart</div>
  )
  
}

export default BarChart