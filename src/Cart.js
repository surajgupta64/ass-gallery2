import React from "react";
import cartImg from "./img/cartimg.jpg";
import { Box, Button, Card, CardActions } from "@mui/material";
import { MdArrowBackIos } from "react-icons/md";

const Cart = () => {
    

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
        <img
          style={{ maxWidth: "90vw" }}
          srcSet={`${cartImg}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          src={`${cartImg}?w=164&h=164&fit=crop&auto=format`}
          alt="Cart image"
          loading="lazy"
        />

         
        <CardActions sx={{ m: 1, display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{ borderRadius: "20px" }}
                      startIcon={<MdArrowBackIos size={18} />}
                      onClick={()=>setCount(count+1)}
        
          >
            Back To Home
          </Button>
        </CardActions>
          </Card>
          <Card>
              
          </Card>
    </Box>
  );
};
export default Cart;
