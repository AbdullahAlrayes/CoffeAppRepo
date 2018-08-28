import React, { Component } from "react";
import { Link } from "react-router-native";
import Loading from "../Loading/index";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Tab,
  Tabs
} from "native-base";

// Style
import styles from "./styles";
import productStore from "../../Stores/productStore";
import { observer } from "mobx-react";

class CoffeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drink: 0,
      option: 0
    };
  }

  addItem = () => {
    productStore.addItem(this.state.drink, this.state.option);
  };

  render() {
    const product = productStore.loadProduct(
      this.props.match.params.productName
    );

    if (productStore.loading) {
      return <Loading />;
    } else {
      return (
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {product.name + "\n"}
                <Text note>{product.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={product.image} />
            </Right>
          </ListItem>
          <ListItem>
            <Body>
              <Text style={styles.middleText}>Choose Drink</Text>
            </Body>
          </ListItem>
          <Tabs
            initialPage={0}
            onChangeTab={({ i, ref, from }) => this.setState({ drink: i })}
          >
            <Tab heading="Espresso" />
            <Tab heading="Latte" />
          </Tabs>
          <ListItem>
            <Body>
              <Text style={styles.middleText}>Choose Option</Text>
            </Body>
          </ListItem>
          <Tabs
            initialPage={0}
            onChangeTab={({ i }) => this.setState({ option: i })}
          >
            <Tab heading="Small" />
            <Tab heading="Large" />
          </Tabs>
          <Link
            onPress={this.addItem}
            component={Button}
            to="/CoffeCart"
            full
            danger
          >
            <Text>Add</Text>
          </Link>
        </List>
      );
    }
  }
}

export default observer(CoffeDetail);
