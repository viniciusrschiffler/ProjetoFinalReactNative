import React, { useState, useEffect } from "react";
import { View, FlatList, LogBox } from "react-native";

import Header from "./Header";
import Movie from "./Movie";
import FooterList from "./FooterList";
import { getMovies } from "../../Services/Requests/movies";
import { styles } from "./styles";

LogBox.ignoreLogs(["Warning: ..."]);

export default function ComingSoon() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

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

    //return () => setMovies([]);
  }, [count]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={movies}
        renderItem={({ item }) => <Movie item={item} />}
        keyExtractor={(item) => item.key}
        onEndReached={() => setCount(count + 1)}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<FooterList load={loading} />}
        initialNumToRender={5}
        contentContainerStyle={{
          paddingTop: 16,
          paddingBottom: 16,
        }}
      />
    </View>
  );
}
