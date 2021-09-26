import React from "react";
import Search from "./Components/Search";
import FilmDetail from "./Components/FilmDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./utils/store";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="FilmDetail" component={FilmDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
