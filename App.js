import React, { Component } from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Login from "./src/components/screens/Login";
import NavBar from "./src/components/NavBar";
import TabBar from "./src/components/TabBar";
import CategoryIndex from "./src/components/screens/CategoryIndex";
import DSStyle from "./src/styles";
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

let loginContainer;
const PublicStack = createStackNavigator(
  {
    Login: {
      screen: props => {
        return <Login loginContainer={loginContainer} />;
      }
    }
  },
  { headerMode: "none" }
);

const PrivateStack = createDrawerNavigator({
  internal: createBottomTabNavigator(
    {
      options: createStackNavigator(
        {
          CategoryIndex: {
            screen: CategoryIndex
          }
        },
        {
          navigationOptions: props => ({
            header: headerProps => <NavBar {...props} />
          })
        }
      )
    },
    {
      tabBarComponent: props => <TabBar {...props} />
    }
  )
});

export default class App extends Component<Props> {
  state = {
    logged: false
  };

  handleLogin = () => {
    this.setState({ logged: true });
  };

  render() {
    loginContainer = this;
    return this.state.logged ? (
      <PrivateStack />
    ) : (
      <PrivateStack />
      // <PublicStack screenProps={this.handleLogin} />
    );
  }
}
