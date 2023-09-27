import React from "react";
import Stack from "@mui/material/Stack";
import { FiShoppingCart } from "react-icons/fi";
import { GoHistory } from "react-icons/go";
import { Badge, Button } from "@mui/material";

const Header = () => {

  return (
    <header className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionFixed mui-fixed css-1thp9i">
      <div className="MuiToolbar-root MuiToolbar-dense css-mjywep">
        <Button
            sx={{color:'black'}}
            size="large"
            href="/"
          >
            Home
          </Button>
        <Stack direction="row" spacing={1.5}>
          <Button
            color="success"
            size="medium"
            startIcon={<GoHistory />}
            href="/history"
          >
            History
          </Button>
          <Badge badgeContent={4} color="primary">
            <Button
              color="success"
              size="medium"
              startIcon={<FiShoppingCart />}
               href="/cart"
            >
              Cart
            </Button>
          </Badge>
        </Stack>
      </div>
    </header>
  );
};

export default Header;
