import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import DSStyle from "../styles/index";

const { width, height } = Dimensions.get("window"); // window|screen

export default class DSButton extends Component<Props> {
  _containerStyle = style => {
    return {
      width: width - 40,
      height: 60,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: DSStyle.colors.fourth,
      borderRadius: 5,
      marginTop: 30,
      ...style
    };
  };
  render() {
    const { onPress, children, style, underlayColor, ...props } = this.props;

    return (
      <TouchableHighlight
        onPress={onPress}
        style={this._containerStyle(style)}
        underlayColor={underlayColor || DSStyle.colors.fourthShadow}
      >
        <Text style={styles.text}>{children}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: DSStyle.fonts.large,
    fontWeight: "bold",
    color: "#FFF"
  }
});
