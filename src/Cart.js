import React, { useEffect, useState } from "react";
import cartImg from "./img/cartimg.jpg";
import { Box, Button, Card, CardActions, IconButton } from "@mui/material";
import { MdArrowBackIos, MdDelete } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Cart = ({rem}) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cart);
    console.log(cart.length)
  }, []);
  

  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    rem()
  };

  return (
    <Box
      sx={{
        mt: 13,
        mb: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {cartItems.length===0 ? (
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
              href="/"
            >
              Back To Home
            </Button>
          </CardActions>
        </Card>
      ) : (
        <TableContainer
          sx={{ maxWidth: "95vw", borderRadius: "10px" }}
          component={Paper}
        >
          <Table
            sx={{ borderRadius: "10px" }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Sr No</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="right">
                    <img
                      srcSet={`${row}`}
                      src={`${row}`}
                      style={{ width: "100px", height: "100px" }}
                      alt="img dog"
                      loading="lazy"
                    />
                  </TableCell>
                  <TableCell
                    sx={{ display: "flex",height:'110px', justifyContent: "flex-end" }}
                    component="th"
                    scope="row"
                  >
                    <IconButton aria-label="delete" size="large" onClick={()=>removeItem(index)}>
                      <MdDelete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};
export default Cart;
