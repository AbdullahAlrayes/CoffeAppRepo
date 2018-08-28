import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { Link } from "react-router-native";
import { observer } from "mobx-react";

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
import productStore from "../../Stores/productStore";

class CoffeList extends Component {
  renderItem(data, index) {
    return (
      <ImageBackground
        source={data.background}
        style={{ height: 180, width: null, flex: 1 }}
        key={data.name + "-" + index}
      >
        <Link
          component={ListItem}
          to={`/CoffeDetail/${data.name}`}
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
        </Link>
      </ImageBackground>
    );
  }
  render() {
    const ListItems = productStore.items.map((data, index) =>
      this.renderItem(data, index)
    );
    return <List>{ListItems}</List>;
  }
}

export default observer(CoffeList);
