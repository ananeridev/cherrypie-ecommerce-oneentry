"use client";

import { useState } from "react";
import StoreMap from "../StoreMap";
import { storesLocations } from "@/data/storeLocations";

export default function LocationMap() {
  const [getLocation, setLocation] = useState(null);
  return (
    <>
      {" "}
      <StoreMap
        getLocation={getLocation}
        setLocation={setLocation}
        storesLocations={storesLocations}
      />
    </>
  );
}
