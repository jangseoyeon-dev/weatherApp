import React from "react";
import Button from "../Button";

function Index({ citis, handleCityChange, selectedCity }) {
  return (
    <div className="buttons">
      <Button
        variant={selectedCity === null ? "outline" : ""}
        onClick={() => {
          handleCityChange("current");
        }}
      >
        Current Location
      </Button>
      {citis.map((city) => (
        <Button
          variant={selectedCity === city ? "outline" : ""}
          key={city}
          onClick={() => {
            handleCityChange(city);
          }}
        >
          {city}
        </Button>
      ))}
    </div>
  );
}

export default Index;
