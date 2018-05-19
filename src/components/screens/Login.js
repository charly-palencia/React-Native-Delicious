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
  StatusBar
} from "react-native";

import DSTextInput from "../DSTextInput";
import DSButton from "../DSButton";
import DSStyle from "../../styles";

const { width, height } = Dimensions.get("window"); // window|screen

type Props = {};
export default class Login extends Component<Props> {
  render() {
    return (
      <ImageBackground
        style={{ width, height }}
        source={require("../../assets/img/bg.png")}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.logoContainer}>
          <Image source={require("../../assets/img/logo.png")} />
        </View>

        <View style={styles.loginContainer}>
          <DSTextInput
            sourceIcon={require("../../assets/img/user.png")}
            widthIcon={15}
            heightIcon={20}
            placeholderTextColor="#FFF"
            placeholder="Login"
            marginTop={60}
          />

          <DSTextInput
            sourceIcon={require("../../assets/img/password.png")}
            widthIcon={15}
            heightIcon={20}
            placeholderTextColor="#FFF"
            placeholder="Password"
          />
          <DSButton onPress={this.props.loginContainer.handleLogin}>
            Sign In
          </DSButton>
          <DSButton
            onPress={this._onPressButton}
            underlayColor={DSStyle.colors.facebookShadow}
            style={{ backgroundColor: DSStyle.colors.facebook }}
          >
            Loging with Facebook
          </DSButton>
          <Text style={styles.text}>
            Don't have an account?{" "}
            <Text style={{ fontWeight: "bold" }}>Sign Up</Text>
          </Text>
        </View>
      </ImageBackground>
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
  }
});
