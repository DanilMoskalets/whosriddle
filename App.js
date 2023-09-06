import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {StyleSheet} from "react-native";
import {BottomTabNavigation} from "./src/navigation/BottomTabNavigation";

function App() {
    return (
        <NavigationContainer>
            <BottomTabNavigation/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
});

export default App;
