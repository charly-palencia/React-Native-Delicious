import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList
} from "react-native";

import DSTextInput from "../DSTextInput";
import DSButton from "../DSButton";
import DSStyle from "../../styles";

const { width, height } = Dimensions.get("window"); // window|screen

type Props = {};
export default class CategoryIndex extends Component<Props> {
  data() {
    return [
      {
        id: 1,
        title: "title 1",
        path: require("../../assets/img/recipe.png")
      },
      {
        id: 2,
        title: "title 2",
        path: require("../../assets/img/recipe.png")
      },
      {
        id: 3,
        title: "title 1",
        path: require("../../assets/img/recipe.png")
      },
      {
        id: 4,
        title: "title 2",
        path: require("../../assets/img/recipe.png")
      }
    ];
  }

  renderItem = info => {
    console.log(info);
    return (
      <ImageBackground source={info.item.path} style={styles.item}>
        {info.item.title}
      </ImageBackground>
    );
  };

  _keyExtractor(post, index) {
    return post.id.toString();
  }

  render() {
    return (
      <FlatList
        data={this.data()}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  logoContainer: {
    flex: 0.7,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  loginContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  text: {
    marginTop: 45,
    color: "#FFF"
  },
  item: {
    height: 184
  }
});
