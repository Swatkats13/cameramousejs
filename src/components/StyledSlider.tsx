import * as React from "react";
import Slider, { SliderProps } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const BigSlider = styled(Slider)<SliderProps>(({ theme }) => ({
  height: 10,
  "& .MuiSlider-thumb": {
    width: 20,
    height: 20,
  },
}));

export default function StyledSlider(props: any) {
  return <BigSlider {...props} />;
}
