import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import axios from "axios";

export default function App() {
    // API位置 "https://randomuser.me/api/?results=20"
    //需求:請將data.results內的內容渲染五個不同分頁，分頁使用tab navigation製作
    //切換一次分頁需打一次API使資料刷新
    //在每個分頁設置一個btn，點擊後使當前分頁資料刷新
    //使用hook或class製作皆可
    //參考資料:https://reactnavigation.org/
    return (
        <NavigationContainer>

        </NavigationContainer>
    );
}

const pages = () => {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
