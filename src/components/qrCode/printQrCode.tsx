import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import QrCode from "./QRCode";

interface IProps {
  name: string;
  title: string;
  open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PrintQrCode: React.FC<IProps> = ({ name, title, open, setOpen }) => {
  let qrCodeRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => qrCodeRef.current,
  });

  return (
    <div style={{zIndex: "5"}}>
      <QrCode
        ref={qrCodeRef}
        name={name}
        title={title}
        open={open}
        setOpen={setOpen}
        print={handlePrint}
      />
    </div>
  );
};

export default PrintQrCode;
