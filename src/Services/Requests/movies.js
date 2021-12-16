import { api } from "../Common/http";

import axios from "axios";

const API_URL_POSTER = "https://image.tmdb.org/t/p/w440_and_h660_face";
const API_URL_BACKDROP = "https://image.tmdb.org/t/p/w370_and_h556_multi_faces";

const genres = {
  12: "Aventura",
  14: "Fantasia",
  16: "Animação",
  18: "Drama",
  27: "Terror",
  28: "Ação",
  35: "Comédia",
  36: "História",
  37: "Faroeste",
  53: "Suspense",
  80: "Crime",
  99: "Documentário",
  878: "Ficção científica",
  9648: "Mystery",
  10402: "Musical",
  10749: "Comédia romântica",
  10751: "Família",
  10752: "Guerra",
  10770: "TV",
};

async function getImageBykey(key) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${key}/images?api_key=345411636508e2b74308228fcfc87973`
  );

  const { backdrops } = await data;
  const filePath = await backdrops[0]["file_path"];

  return await filePath;
}

const getImagePath = (path) => `https://image.tmdb.org/t/p/original/${path}`;

const getPosterPath = (path) => API_URL_POSTER + path;

const getBackdropPath = (path) => API_URL_BACKDROP + path;

export const getMovies = async (page) => {
  const { data } = await api.get(`&page=${page}`);
  const { results } = data;

  return results.map(
    ({ id, title, vote_average, overview, release_date, genre_ids }) => ({
      key: String(id),
      title: title,
      rating: vote_average,
      description: overview,
      releaseDate: release_date,
      genres: genre_ids.map((genre) => genres[genre]),
    })
  );
};
