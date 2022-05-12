import React from "react";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import validate from "./validate.js";
import { genders } from "../data/data";


interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenQr: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  contentTitle: string;
  setUserDetails: React.Dispatch<React.SetStateAction<string>>;
}

const EventForm: React.FC<IProps> = ({ open, setOpen, setOpenQr, contentTitle, setUserDetails }) => {
  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Ticket to {contentTitle}</DialogTitle>
        <Formik
          initialValues={{
            full_name: "",
            email: "",
            mobile_number: "",
            gender: "Male",
            date_of_birth: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            console.log(values);
            setUserDetails(values.full_name)
            setOpenQr(true);
            setOpen(false);
          }}
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <DialogContent>
                <DialogContentText>
                  To subscribe to this website, please enter your email address
                  here. We will send updates occasionally.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="full_name"
                  name="full_name"
                  label="Full Name"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={values.full_name}
                  onChange={handleChange}
                />
                {errors.full_name && (
                  <Alert variant="outlined" severity="error">
                    {errors.full_name}
                  </Alert>
                )}
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  fullWidth
                  variant="standard"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <Alert variant="outlined" severity="error">
                    {errors.email}
                  </Alert>
                )}
                <TextField
                  autoFocus
                  margin="dense"
                  id="mobile_number"
                  name="mobile_number"
                  label="Mobile Number"
                  type="tel"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
                {errors.mobile_number && (
                  <Alert variant="outlined" severity="error">
                    {errors.mobile_number}
                  </Alert>
                )}
                <TextField
                  autoFocus
                  margin="dense"
                  id="gender"
                  name="gender"
                  select
                  label="Gender"
                  value={values.gender}
                  onChange={handleChange}
                  variant="standard"
                  fullWidth
                >
                  {genders.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.gender && (
                  <Alert variant="outlined" severity="error">
                    {errors.gender}
                  </Alert>
                )}
                <TextField
                  focused
                  margin="dense"
                  id="date_of_birth"
                  name="date_of_birth"
                  label="Date of Birth"
                  type="date"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
                {errors.date_of_birth && (
                  <Alert variant="outlined" severity="error">
                    {errors.date_of_birth}
                  </Alert>
                )}
              </DialogContent>
              <DialogActions>
                <Button type="submit">Get Ticket</Button>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default EventForm;
