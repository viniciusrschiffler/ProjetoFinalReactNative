import React, { useState, useEffect, useMemo } from "react";
import { View, FlatList, ActivityIndicator, LogBox } from "react-native";

import Header from "./Header";
import Movie from "./Movie";
import { getMovies } from "../../Services/Requests/movies";
import { colors } from "../../Styles/colors";
import { styles } from "./styles";

LogBox.ignoreLogs(["Warning: ..."]);

export default function ComingSoon() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  function FooterList({ load }) {
    if (!load) return null;
  
    return (
      <View style={{ marginBottom: 16 }}>
        <ActivityIndicator size={25} color={colors.default} />
      </View>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      if (loading) return;

      setLoading(true);

      try {
        const newMovies = await getMovies(page);

        if (newMovies) {
          setMovies([...movies, ...newMovies]);
          setPage(page + 1);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [count]);

  const renderItem = ({ item }) => <Movie item={item} />;

  const moviesMemo = useMemo((item) => renderItem, [movies]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={movies}
        renderItem={({ item }) => <Movie item={item} />}
        //renderItem={({ item }) => moviesMemo}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{
          paddingTop: 16,
          paddingBottom: 16,
        }}
        onEndReached={() => setCount(count + 1)}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<FooterList load={loading} />}
        initialNumToRender={5}
      />
    </View>
  );
}
