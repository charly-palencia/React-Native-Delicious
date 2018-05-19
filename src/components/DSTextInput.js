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

export default class DSTextInput extends Component<Props> {
  _containerStyle = () => {
    const { marginTop } = this.props;

    return {
      width: width - 40,
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 1,
      borderColor: DSStyle.colors.gray,
      marginTop: marginTop || 30,
    };
  };

  render() {
    const {
      sourceIcon,
      widthIcon,
      heightIcon,
      marginTop,
      ...props
    } = this.props;

    return (
      <View style={this._containerStyle()}>
        <Image
          source={sourceIcon}
          style={{
            width: widthIcon,
            height: heightIcon,
            marginRight: 30 - widthIcon,
            marginLeft: 10
          }}
        />
        <TextInput {...props} style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: width - 80,
    fontSize: DSStyle.fonts.large,
    color: "#FFFFFF",
    fontWeight: "100"
  }
});
