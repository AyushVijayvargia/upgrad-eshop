import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { ProductData } from "../assets/ProductData";


export default function ExtraFilterProduct() {
  const dispatch = useDispatch();
  const [alignment, setAlignment] = useState('web');
  
  var Products = [];
  var Categories = [...new Set(ProductData.map(product => product.category))];
  Categories.push('All')
 
  Categories.push('ELECTRONICS');
  Categories.push('APPAREL');
  Categories.push('FOOTWEAR');
  
  return (
    <ToggleButtonGroup
      color="primary"
      size="large"
      value={alignment}
      exclusive
      onChange={(e, newAlignment) => {
        dispatch({ type: 'setCategory', payload: newAlignment });
        setAlignment(newAlignment);
      }}
      aria-label="Platform"
      sx={{ marginTop: 1 }}
    >
      {
        Categories.map((category) => {
          return (
            <ToggleButton key={category} value={category}>{category}</ToggleButton>
          );
        })
      }
    </ToggleButtonGroup>
  );
}