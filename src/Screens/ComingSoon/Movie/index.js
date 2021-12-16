import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

import Rating from "../Rating";
import { colors } from "../../../Styles/colors";
import { styles } from "./styles";

const URL_BASE_IMAGE = "https://image.tmdb.org/t/p/original";

export default function Movie({ item }) {
  const [urlImage, setUrlImage] = useState();

  useEffect(() => {
    async function fetchData(key) {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${key}?api_key=345411636508e2b74308228fcfc87973&language=pt-BR`
      );

      setUrlImage(URL_BASE_IMAGE + data?.backdrop_path);
    }

    fetchData(item.key);
  }, []);

  return (
    <View>
      <Image
        source={
          urlImage?.slice(-4) !== "null"
            ? { uri: urlImage }
            : require("../../assets/image-unavailable.png")
        }
        style={styles.video}
      />

      <View style={styles.secundaryElement}>
        <Rating rating={item?.rating} />

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color={colors.default}
              style={{ marginBottom: 5 }}
            />
            <Text style={styles.textIcon}>Receber aviso</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <MaterialIcons
              name="info-outline"
              size={24}
              color={colors.default}
              style={{ marginBottom: 5 }}
            />
            <Text style={styles.textIcon}>Saiba mais</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.releaseDate}>
        Data de lançamento: {item?.releaseDate}
      </Text>
      <Text style={styles.movie}>{item?.title}</Text>
      <Text style={styles.description}>
        {item?.description ? item?.description : "Sem descrição"}
      </Text>
      <View style={styles.genre}>
        {item?.genres.map((genre, index, row) => (
          <Text key={index} style={{ color: colors.default }}>
            {index + 1 === row.length ? genre : genre + " • "}
          </Text>
        ))}
      </View>
    </View>
  );
}
