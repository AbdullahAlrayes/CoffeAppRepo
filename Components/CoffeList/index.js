import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { NativeRouter, Route, Link, Switch } from "react-router-native";

// Data
import list from "./list";

// NativeBase Components
import {
  List,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body
} from "native-base";

// Style
import styles from "./styles";

class CoffeList extends Component {
  renderItem(data, index) {
    return (
      <ImageBackground
        source={data.background}
        style={{ height: 180, width: null, flex: 1 }}
        key={data.name + "-" + index}
      >
        <ListItem
          style={{
            backgroundColor: "transparent",
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            borderBottomWidth: 0
          }}
        >
          <Card
            style={{
              backgroundColor: "transparent",
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderBottomWidth: 0
            }}
          >
            <CardItem style={{ backgroundColor: "transparent" }}>
              <Left>
                <Thumbnail bordered source={data.image} />
                <Body>
                  <Text style={styles.text}>{data.name}</Text>
                  <Text note style={styles.text}>
                    {data.distance}
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <View style={styles.divider} />
        </ListItem>
      </ImageBackground>
    );
  }
  render() {
    const ListItems = list.map((data, index) => this.renderItem(data, index));
    return (
      <Link to="/CoffeDetail">
        <List>{ListItems}</List>
      </Link>
    );
  }
}

export default CoffeList;
