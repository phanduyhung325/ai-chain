import { Image } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

type DimensionType = {
  w?: string;
  h?: string;
};

function index({ w, h }: DimensionType) {
  return (
    <NavLink to={`/dashboard`}>
    </NavLink>
  );
}

export default index;
