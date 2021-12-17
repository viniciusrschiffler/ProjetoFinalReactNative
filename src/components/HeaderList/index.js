import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { colors } from "../../Styles/colors";
import { styles } from "./styles";

export default function HeaderList() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Em breve</Text>
      <View style={styles.rightSide}>
        <TouchableOpacity>
          <Entypo
            name="magnifying-glass"
            size={24}
            color={colors.default}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.avatar} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
