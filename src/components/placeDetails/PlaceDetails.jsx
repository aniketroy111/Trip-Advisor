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
import PhoneIcon from "@material-ui/icons/Phone";

import Rating from '@material-ui/lab/Rating'

import useStyles from "./styles";

const PlaceDetails = ({ place,selected,refProp,type }) => {
  const classes = useStyles();

  if(selected) refProp?.current?.scrollIntoView({behavior:"smooth" , block:"start"})

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
        <Typography
          style={{ fontWeight: "700", fontSize: "20px" }}
          gutterBottom
          variant="body1"
        >
          {place.name}
        </Typography>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Rating  value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle2">out of {place.num_reviews}</Typography>
        </Box>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle2">Price</Typography>
          <Typography variant="subtitle2">{place.price_level}</Typography>
        </Box>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle2">Ranking</Typography>
          <Typography gutterBottom variant="subtitle2">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <>
            <Box
              my={1}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img src={award.images.small} alt={award.display_name} />
              <Typography variant="subtitle2" color="textSecondary">
                {award.display_name}{" "}
              </Typography>
            </Box>
          </>
        ))}

        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}

        {place?.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon /> {place.address}
          </Typography>
        )}

        {place?.phone && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}

        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
