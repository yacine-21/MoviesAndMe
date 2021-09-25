import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import FilmItem from "./FilmItem";
import { getFilmsFromApiWithSearchedText } from "../API/TMDB";

function Search() {
  //state
  const [Movies, setMovies] = useState([]);
  const [SearchMovie, setSearchMovie] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  //handler functions
  const loadFilms = () => {
    setIsLoading(true);
    if (SearchMovie.length > 0) {
      getFilmsFromApiWithSearchedText(SearchMovie, page + 1).then((data) => {
        setPage(data.page);
        setTotalPage(data.total_pages);
        setMovies([...Movies, ...data.results]);
        setIsLoading(false);
      });
    }
  };

  const searchMovies = (text) => {
    setSearchMovie(text);
  };

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

  const deleteMovies = () => {
    setPage(0);
    setTotalPage(0);
    setMovies([]);
    setSearchMovie("");
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        onChangeText={(text) => searchMovies(text)}
        value={SearchMovie}
        style={styles.textInput}
        placeholder="Titre du film"
        onSubmitEditing={loadFilms}
        clearButtonMode="always"
      ></TextInput>
      <View style={styles.BlocAction}>
        <Button
          style={styles.button}
          title="Rechercher"
          onPress={loadFilms}
        ></Button>
        <Button title="EFFACER" color="red" onPress={deleteMovies}></Button>
      </View>
      <FlatList
        data={Movies}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (page < totalPage) {
            loadFilms();
          }
        }}
        renderItem={({ item }) => (
          <FilmItem
            movie_title={item.title}
            movie_vote={item.vote_average}
            movie_description={item.overview}
            movie_date={item.release_date}
            movie_image={item.poster_path}
          />
        )}
      />
      <DisplayLoading />
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
  },
  textInput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
  button: {
    display: "flex",
    flex: 2,
    height: 50,
  },

  BlocAction: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  loadingContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 350,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
