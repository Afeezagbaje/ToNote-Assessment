import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./styles.css";

interface Props {
  title: string;
  description: string;
  image: string;
  day: string;
  month: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setContentTitle: React.Dispatch<React.SetStateAction<string>>;
}

const Event: React.FC<Props> = ({
  title,
  description,
  image,
  day,
  month,
  setOpen,
  setContentTitle,
}) => {
  return (
    <Card
      className="card"
      sx={{ maxWidth: 345, borderRadius: "15px" }}
      onClick={() => {
        setContentTitle(title);
        setOpen(true);
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="200" src={image} alt="Event Image" />
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ marginRight: "20px", width: "20%" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              sx={{
                color: "#3D37F1",
                fontWeight: "Bold",
                textTransform: "uppercase",
              }}
            >
              {month}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              sx={{ fontWeight: "Bold" }}
            >
              {day}
            </Typography>
          </Box>
          <Box sx={{ width: "80%" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                lineHeight: "1.2",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ height: "100px", overflow: "auto" }}
            >
              {description}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

Event.defaultProps = {
  title: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
  description:
    "We’ll get you directly seated and inside for you to enjoy the show.",
  image:
    "https://res.cloudinary.com/afeezagbaje/image/upload/v1652160057/samples/ToNote/noiseporn-JNuKyKXLh8U-unsplash_wiaipg.jpg",
  day: "14",
  month: "Apr",
};

export default Event;
