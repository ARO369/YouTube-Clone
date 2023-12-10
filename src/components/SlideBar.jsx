import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SlideBar = ({ selectedCatagory, setSelectedCatagory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((catagory) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCatagory(catagory.name)}
        style={{
          background:
            catagory.name === selectedCatagory ? "#FC1503" : "transparent",
          color: "white",
        }}
        key={catagory.name}
      >
        <span
          style={{
            color: catagory.name === selectedCatagory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {catagory.icon}
        </span>
        <span
          style={{ opacity: catagory.name === selectedCatagory ? "1" : "0.8" }}
        >
          {catagory.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default SlideBar;
