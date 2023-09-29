import {
  Box,
  Button,
  Card,
  CardActions,
  Skeleton,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { TbShoppingCartPlus,TbShoppingCartCopy } from "react-icons/tb";

const ImageCard = ({add}) => {
  const [img, setImg] = useState(null);
  const [click, setClick] = useState(false);
  
  const addToHistory = (imageUrl) => {
    localStorage.setItem(
      "history",
      JSON.stringify([
        imageUrl,
        ...JSON?.parse(localStorage.getItem("history")),
      ])
    );
  };

  const addToCart = (imageUrl) => {
   add(imageUrl)
    setClick(true)
  };

  function fetchImage() {
    axios.get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        setImg(response.data.message)
        addToHistory(response.data.message)
        setClick(false)
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }

   useEffect(() => {
     const intervalId = setTimeout(() => {
      axios.get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        console.log(response);
        if (!img) { 
          setImg(response.data.message);
        }
        addToHistory(response.data.message);
        setClick(false);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
    
    <>
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
          <img
          style={{ maxWidth: "95vw",height:'73vh',objectFit:'fill' }}
          src={`${img}`}
          alt="Cart image"
          loading="lazy"
        />

        ) : (
          <Skeleton
            sx={{
              height: "70vh",
                width: "550.5px",
            maxWidth:'90vw',
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
            onClick={()=>fetchImage()}
          >
            Fetch Image
          </Button>
          {click ?
            <Button
              disabled
            variant="contained"
            sx={{ borderRadius: "20px" }}
            startIcon={<TbShoppingCartCopy size={18} />}
          >
            Added
          </Button>
          :
          <Button
            variant="contained"
            sx={{ borderRadius: "20px" }}
              startIcon={<TbShoppingCartPlus size={18} />}
              onClick={()=>{addToCart(img)}}
          >
            Add To Cart
          </Button>
          }
        </CardActions>
      </Card>
    </Box>
    </>
  );
};

export default ImageCard;
