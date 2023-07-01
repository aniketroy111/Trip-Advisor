import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardActions,
  Chip,
  CardContent,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PnoneIcon from "@material-ui/icons/Phone";

const PlaceDetails = ({ place }) => {
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 300 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.trbimg.com/img-5b8f2874/turbine/sd-et-dining-inside-out-20180801"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1">
          {place.name}
        </Typography>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography  variant="subtitle2">
            Price
          </Typography>
          <Typography  variant="subtitle2">
            {place.price_level}
          </Typography>
        </Box>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography  variant="subtitle2">
            Ranking
          </Typography>
          <Typography  variant="subtitle2">
            {place.ranking}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
