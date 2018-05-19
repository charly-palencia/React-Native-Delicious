import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  Dimensions,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import DSStyle from "../styles/index";

const { width, height } = Dimensions.get("window"); // window|screen

export default class TabBar extends Component<Props> {
  handleOpenDrawer = () => {
    this.props.navigation.openDrawer();
  };

  renderItem = () => {
    return (
      <View>
        <TouchableOpacity activeOpacity={0.5} onPress={this.handleOpenDrawer}>
          <Image
            source={require("../assets/img/today.png")}
            style={{
              width: 15,
              height: 16
            }}
          />
        </TouchableOpacity>
        <Text>Example</Text>
      </View>
    );
  };

  render() {
    console.disableYellowBox = true;
    return <View style={styles.container}>{this.renderItem()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: DSStyle.colors.second,
    height: 60,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  }
});
