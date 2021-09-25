import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { getImageFromApi } from "../API/TMDB";

function FilmItem({
  movie_title,
  movie_vote,
  movie_description,
  movie_date,
  movie_image,
}) {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={{ uri: getImageFromApi(movie_image) }}
        style={styles.imageBg}
      />
      <View style={styles.blocTwo}>
        <View style={styles.TitleAndVote}>
          <Text style={styles.title}>{movie_title}</Text>
          <Text style={styles.vote}>{movie_vote}</Text>
        </View>
        <View style={styles.description_container}>
          <Text numberOfLines={6} style={styles.description}>
            {movie_description}
          </Text>
        </View>
        <View style={styles.date_container}>
          <Text style={styles.date}>Sorti le {movie_date}</Text>
        </View>
      </View>
    </View>
  );
}

export default FilmItem;

const styles = StyleSheet.create({
  vote_text: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#666666",
  },
  description_container: {
    flex: 7,
  },
  mainContainer: {
    height: 190,
    flexDirection: "row",
  },
  blocTwo: {
    flex: 1,
    margin: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 5,
  },
  vote: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#666666",
  },
  imageBg: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: "gray",
  },
  TitleAndVote: {
    flex: 3,
    flexDirection: "row",
  },
  description: {
    fontStyle: "italic",
    color: "#666666",
  },
  date: {
    textAlign: "right",
    fontSize: 14,
  },
  description_container: {
    flex: 7,
  },
  date_container: {
    flex: 1,
  },
});
