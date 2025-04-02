import React from "react";
import Button from "../Button";

function index() {
  return (
    <div className="buttons">
      <Button
        variant="outline"
        onClick={() => {
          console.log("Current Location");
        }}
      >
        Current Location
      </Button>
      <Button
        onClick={() => {
          console.log("hanoi");
        }}
      >
        hanoi
      </Button>
      <Button
        onClick={() => {
          console.log("paris");
        }}
      >
        paris
      </Button>
      <Button
        onClick={() => {
          console.log("new york");
        }}
      >
        new york
      </Button>
      <Button
        onClick={() => {
          console.log("seoul");
        }}
      >
        seoul
      </Button>
    </div>
  );
}

export default index;
