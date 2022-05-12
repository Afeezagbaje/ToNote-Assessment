import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { QRCodeSVG } from "qrcode.react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

interface IProps {
  name: string;
  title: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  ref: React.MutableRefObject<null>;
  print ?: () => void;
}

const BootstrapDialogTitle: React.FC<DialogTitleProps> = ({ children, onClose, ...other }) => {

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};


const QrCode = React.forwardRef<HTMLDivElement, IProps>(({name, title, open, setOpen, print}, ref ) => {


  return (
    <div ref={ref}>
      <BootstrapDialog
        onClose={()=>setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={()=>setOpen(false)}
        >
          Ticket for {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Thank you for your interest in {title}. A seat has been reserved for you. A Ticket QRCode has been generated for you. Please print it and show it to the event organizer.
          </Typography>
          <Typography gutterBottom>
            <QRCodeSVG value={name} />
          </Typography>
        </DialogContent>
        <DialogActions>
        <Button onClick={print} >
          Print
        </Button>
        <Button onClick={()=>setOpen(false)} >
          Close
        </Button>
          
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
});

export default QrCode;
