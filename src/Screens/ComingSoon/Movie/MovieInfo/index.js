import React from "react";
import { View, Text } from "react-native";

import MovieReleaseDate from "./MovieReleaseDate";
import MovieTitle from "./MovieTitle";
import MovieDescription from "./MovieDescription";
import MovieGenre from "./MovieGenre";
import { colors } from "../../../../Styles/colors";

export default function MovieInfo({ item }) {
  return (
    <View>
      <MovieReleaseDate>
        Data de lançamento: {item?.releaseDate}
      </MovieReleaseDate>

      <MovieTitle>{item?.title}</MovieTitle>

      <MovieDescription>
        {item?.description ? item?.description : "Sem descrição"}
      </MovieDescription>

      <MovieGenre>
        {item?.genres.map((genre, index, row) => (
          <Text key={index} style={{ color: colors.default }}>
            {index + 1 === row.length ? genre : genre + " • "}
          </Text>
        ))}
      </MovieGenre>
    </View>
  );
}
