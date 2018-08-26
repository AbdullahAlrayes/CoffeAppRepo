import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base";

// Components
import CoffeList from "../CoffeList";
import CoffeDetail from "../CoffeDetail";
import CoffeCart from "../CoffeCart";
import MyHeader from "../MyHeader";
import { NativeRouter, Route, Link, Switch } from "react-router-native";

// Background Image
import background from "../../images/b1.png";

// Style
import styles from "./styles";

class HomePage extends Component {
  render() {
    return (
      <ImageBackground
        source={background}
        style={{ height: null, width: null, flex: 1 }}
      >
        <View style={styles.overlay} />
        <Container>
          <MyHeader />

          <Content>
            <Switch>
              <Route exact path="/CoffeCart" component={CoffeCart} />
              <Route exact path="/CoffeDetail" component={CoffeDetail} />
              <Route exact path="/" component={CoffeList} />
            </Switch>
          </Content>
          <Footer style={{ backgroundColor: "transparent" }}>
            <FooterTab>
              <Link to="/CoffeCart" component={Button}>
                <Text style={styles.footerbutton}>
                  <Icon name="cart" style={styles.footericon} />
                  Cart
                </Text>
              </Link>
            </FooterTab>
          </Footer>
        </Container>
      </ImageBackground>
    );
  }
}

export default HomePage;
