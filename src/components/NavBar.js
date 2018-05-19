import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  Dimensions,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import DSStyle from "../styles/index";

const { width, height } = Dimensions.get("window"); // window|screen

export default class NavBar extends Component<Props> {
  handleOpenDrawer = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5} onPress={this.handleOpenDrawer}>
          <Image
            source={require("../assets/img/option.png")}
            style={{
              width: 20,
              height: 18
            }}
          />
        </TouchableOpacity>
        <Image source={require("../assets/img/logo-small.png")} />
        <Image
          source={require("../assets/img/search.png")}
          style={{
            width: 19,
            height: 20
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: DSStyle.colors.second,
    height: 70,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  }
});
