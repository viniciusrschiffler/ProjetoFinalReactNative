import React from "react";
import { Image } from "react-native";

import { useOrientation } from "../../../../Hooks/useOrientation";
import { styles } from "./styles";

export default function MovieBackdrop({ urlImage }) {
  const orientation = useOrientation();

  return (
    <Image
      source={
        urlImage?.slice(-4) !== "null"
          ? { uri: urlImage }
          : require("../../../assets/image-unavailable.png")
      }
      style={
        orientation.isPortrait ? styles.portrait : styles.landscapet
      }
    />
  );
}
