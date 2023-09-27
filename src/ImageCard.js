import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Skeleton,
} from "@mui/material";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const ImageCard = () => {
  const [img, setImg] = useState();

  return (
    <Box
      sx={{
        mt: 13,
        mb: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card sx={{ maxWidth: "95vw", borderRadius: "10px" }}>
        {img ? (
          <CardMedia
            sx={{ maxHeight: "70vh",
              maxWidth: "90vw" }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
        ) : (
          <Skeleton
            sx={{
              height: "70vh",
            width: "90vw",
              m: "10px",
              borderRadius: "8px",
            }}
            animation="wave"
            variant="rectangular"
          />
        )}

        <CardActions sx={{m:1}}>
          <Button
            variant="contained"
            sx={{ borderRadius: "20px" }}
            startIcon={<BsSearch size={18} />}
          >
            Fetch Image
                  </Button>
                  <Button
            variant="contained"
            sx={{ borderRadius: "20px" }}
            startIcon={<FiShoppingCart size={18} />}
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ImageCard;
