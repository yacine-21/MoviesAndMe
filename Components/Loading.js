import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
}

export default Loading;

const styles = StyleSheet.create({
  loadingContainer: {
    height: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 375,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
