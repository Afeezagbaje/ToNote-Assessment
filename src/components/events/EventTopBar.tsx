import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const EventTopBar = () => {
    const [age, setAge] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value);
    };


  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "100px",
        justifyContent: "space-between",
        alignContent: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{ fontWeight: "bold", fontSize: "40px" }}
      >
        Events
      </Typography>
      <Box>
        <FormControl variant="filled" sx={{ my: 0, mx: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Weekdays</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Tuesday</MenuItem>
            <MenuItem value={20}>Wednesday</MenuItem>
            <MenuItem value={30}>Thursday</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ my: 0, mx: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Event Type</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Conference</MenuItem>
            <MenuItem value={20}>Concert</MenuItem>
            <MenuItem value={30}>Birthday</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ my: 0, mx: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Any Category</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Indoor</MenuItem>
            <MenuItem value={20}>Outdoor</MenuItem>
            <MenuItem value={30}>Stadium</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default EventTopBar;
