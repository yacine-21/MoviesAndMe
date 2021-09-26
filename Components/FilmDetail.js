import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image,
} from "react-native";
import { getFilmDetailFromApi, getImageFromApi } from "../API/TMDB";
import moment from "moment";
import numeral from "numeral";

function FilmDetail({ route }) {
  //state
  const [film, setFIlm] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const filmID = route.params.filmID;

  // handler

  const DisplayLoading = () => {
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    } else {
      return null;
    }
  };

  useEffect(() => {
    let unmonted = false;
    if (!unmonted) {
      getFilmDetailFromApi(filmID).then((data) => {
        setFIlm(data);
        setIsLoading(false);
      });
    }
    return () => {
      unmonted = true;
    };
  }, []);

  const DisplayFilm = () => {
    if (film !== undefined) {
      return (
        <ScrollView style={styles.scrollviewContainer}>
          <Image
            style={styles.image}
            source={{ uri: getImageFromApi(film.backdrop_path) }}
          />
          <Text style={styles.title_text}>{film.title}</Text>
          <Text style={styles.description_text}>{film.overview}</Text>
          <Text style={styles.default_text}>
            Sorti le {moment(new Date(film.release_date)).format("DD/MM/YYYY")}
          </Text>
          <Text style={styles.default_text}>
            Note : {film.vote_average} / 10
          </Text>
          <Text style={styles.default_text}>
            Nombre de votes : {film.vote_count}
          </Text>
          <Text style={styles.default_text}>
            Budget : {numeral(film.budget).format("0,0[.]00 $")}
          </Text>
          {/* <Text style={styles.default_text}>
            Genre(s) :{" "}
            {film === undefined
              ? ""
              : film === undefined
              ? null
              : film.genres
                  .map(function (genre) {
                    return genre.name;
                  })
                  .join(" / ")}
          </Text>
          <Text style={styles.default_text}>
            Companie(s) :{" "}
            {film === undefined
              ? null
              : film.production_companies
                  .map(function (company) {
                    return company.name;
                  })
                  .join(" / ")}
          </Text> */}
        </ScrollView>
      );
    }
  };

  return (
    <View style={styles.mainContainer}>
      <DisplayFilm />
      <DisplayLoading />
    </View>
  );
}

export default FilmDetail;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  loadingContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollviewContainer: {
    flex: 1,
  },

  image: {
    height: 169,
    margin: 5,
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 35,
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: "#000000",
    textAlign: "center",
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666",
    margin: 5,
    marginBottom: 15,
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
});
