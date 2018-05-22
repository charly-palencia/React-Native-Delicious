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

  findCurrentRoute = navState => {
    if (navState.index !== undefined) {
      return this.findCurrentRoute(navState.routes[navState.index]);
    }
    return navState.routeName;
  };

  _createItem({ label, image, imageActive, style, page }, index) {
    const { navigation } = this.props;
    const routeName = this.findCurrentRoute(navigation.state);
    isActive = routeName === page;

    let currentImage = image;
    let textStyle;

    if (isActive) {
      (currentImage = imageActive),
        (textStyle = { color: DSStyle.colors.fourth });
    }

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={this.handleOpenDrawer}
        style={styles.itemContainer}
        key={index}
      >
        <View style={styles.itemImageContainer}>
          <Image source={currentImage} style={[styles.itemImage, style]} />
        </View>
        <Text style={[styles.itemText, textStyle]}>{label}</Text>
      </TouchableOpacity>
    );
  }

  renderItem = () => {
    return [
      {
        label: "Today",
        imageActive: require("../assets/img/today-active.png"),
        image: require("../assets/img/today.png"),
        page: "CategoryIndex",
        style: {
          width: 15,
          height: 16
        }
      },
      {
        label: "Recipes",
        image: require("../assets/img/recipes.png"),
        imageActive: require("../assets/img/recipes-active.png"),
        style: {
          width: 15,
          height: 19
        }
      },
      {
        label: "Shopping",
        image: require("../assets/img/shopping.png"),
        imageActive: require("../assets/img/shopping-active.png"),
        style: {
          width: 15,
          height: 15
        }
      },
      {
        label: "Settings",
        image: require("../assets/img/setting.png"),
        imageActive: require("../assets/img/setting-active.png"),
        style: {
          width: 15,
          height: 15
        }
      }
    ].map((option, index) => this._createItem(option, index));
  };

  render() {
    // console.disableYellowBox = true;
    return <View style={styles.container}>{this.renderItem()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: DSStyle.colors.second,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  },
  itemContainer: {
    width: 65,
    height: 40,
    alignItems: "center"
  },
  itemImageContainer: {
    alignItems: "center",
    height: 19,
    marginVertical: 3
  },
  itemImage: {
    width: 15,
    height: 16
  },
  itemText: {
    color: "white",
    fontWeight: "bold"
  }
});
