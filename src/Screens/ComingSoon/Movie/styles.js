import { StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { colors } from "../../../Styles/colors";

export const styles = EStyleSheet.create({
  video: {
    marginTop: ".5rem",
    height: "14.5rem",
    width: "100%",
  },
  secundaryElement: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "3rem",
    marginTop: "1.5rem",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginRight: "1rem",
    width: "8.4rem",
  },
  action: {
    alignItems: "center",
  },
  textIcon: {
    fontSize: ".65rem",
    color: "grey", // * COLOR *
  },
  releaseDate: {
    marginTop: "1.7rem",
    marginHorizontal: ".5rem",
    fontSize: ".9rem",
    color: "grey", // * COLOR *
  },
  movie: {
    marginTop: ".6rem",
    marginHorizontal: ".5rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: colors.textColor, // * COLOR *
  },
  description: {
    marginTop: ".1rem",
    marginHorizontal: ".5rem",
    fontSize: ".9rem",
    color: "grey", // * COLOR *
    lineHeight: "1.2rem",
  },
  genre: {
    flexDirection: "row",
    color: colors.textColor,
    marginHorizontal: ".5rem",
    marginTop: ".3rem",
    marginBottom: "1.5rem",
  },
});
