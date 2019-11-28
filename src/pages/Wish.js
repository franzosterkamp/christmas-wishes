import React from "react";
import { useParams } from "react-router-dom";

function Wish() {
  const { id } = useParams();

  return <div>Wish {id}</div>;
}

export default Wish;
