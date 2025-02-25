import React from "react";
import UseAnimations from "react-useanimations";
import infinity from 'react-useanimations/lib/infinity';

export const LoopAnimation = () => (
  <UseAnimations strokeColor="white" fillColor="#ffffff" animation={infinity} size={34} />
);
