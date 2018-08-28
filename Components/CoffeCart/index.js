import React, { Component } from "react";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";

// Images
import starbucks from "../../images/starbucks.png";
import starbucks2 from "../../images/starbucks.jpg";

// Style
import styles from "./styles";
import productStore from "../../Stores/productStore";

class CoffeCart extends Component {
  renderItem(item, index) {
    return (
      <ListItem key={index}>
        <Left>
          <Text>
            {item.drink === 0 ? "Espresso" : "Latte"}
            {"\n"}
            {item.option === 0 ? "Small" : "Large"}
          </Text>
        </Left>
        <Body>
          <Text>{item.quantity}</Text>
        </Body>
      </ListItem>
    );
  }
  render() {
    return (
      <List>
        <ListItem style={styles.top}>
          <Left>
            <Text style={styles.text}>
              {productStore.currentShop.name + "\n"}
              <Text note>{productStore.currentShop.location}</Text>
            </Text>
          </Left>
          <Body />
          <Right>
            <Thumbnail bordered source={productStore.currentShop.image} />
          </Right>
        </ListItem>
        {productStore.orders.map((item, index) => this.renderItem(item, index))}
      </List>
    );
  }
}

export default CoffeCart;
