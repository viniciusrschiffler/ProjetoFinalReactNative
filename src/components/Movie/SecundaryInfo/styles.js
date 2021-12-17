import { StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { colors } from "../../../Styles/colors";

export const styles = EStyleSheet.create({
  portrait: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "3rem",
    marginTop: "1.5rem",
  },
  landscapet: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "3rem",
    marginTop: "1.5rem",
  },

  actionsPortrait: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginRight: "1rem",
    width: "8.4rem",
  },
  actionsLandscapet: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginRight: "1rem",
    width: "8.4rem",
  },

  actionPortrait: {
    alignItems: "center",
  },
  actionLandscapet: {
    alignItems: "center",
  },

  textIconPortrait: {
    fontSize: ".65rem",
    color: "grey",
  },
  textIconLandscapet: {
    fontSize: ".65rem",
    color: "grey",
  },
});
