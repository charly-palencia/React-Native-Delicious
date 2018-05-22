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
  static navigationOptions = {
    drawerLabel: "Payment Method",
    tabBarActiveTintColor: "red"
    // drawerBackgroundColor: "#FFF"
  };

  data() {
    return [
      {
        id: 1,
        title: "Appetizer",
        path: require("../../assets/img/recipe.png")
      },
      {
        id: 2,
        title: "Fish dish",
        path: require("../../assets/img/recipe.png")
      },
      {
        id: 3,
        title: "Main Course",
        path: require("../../assets/img/recipe.png")
      },
      {
        id: 4,
        title: "Meal",
        path: require("../../assets/img/recipe.png")
      }
    ];
  }

  renderItem = info => {
    return (
      <ImageBackground source={info.item.path} style={styles.item}>
        <View style={styles.infoContainer}>
          <DSButton
            style={{
              width: 130,
              height: 30,
              marginTop: 0,
              backgroundColor: "rgba(68, 219, 94, 0.8)"
            }}
            textSize={DSStyle.fonts.normal}
          >
            {info.item.title}
          </DSButton>
        </View>
      </ImageBackground>
    );
  };

  _keyExtractor(post, index) {
    return post.id.toString();
  }

  render() {
    return [
      <StatusBar barStyle="light-content" key="statusBar" />,
      <FlatList
        data={this.data()}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
        key="list"
      />
    ];
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
  },
  infoContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 10
  }
});
