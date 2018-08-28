import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-native";

// NativeBase Components
import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";

// Style
import styles from "./styles";

class MyHeader extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: "transparent" }}>
        <Left>
          <Switch>
            <Route exact path="/" />
            <Route
              render={() => (
                <Button onPress={() => this.props.history.goBack()} transparent>
                  <Icon style={styles.backicon} name="arrow-back" />
                </Button>
              )}
            />
          </Switch>
        </Left>

        <Body>
          <Title style={styles.header}>
            <Text>Coffe App</Text>
          </Title>
        </Body>
        <Right>
          <Button transparent>
            <Text style={styles.text}>
              3 <Icon name="beer" style={styles.icon} />
            </Text>
          </Button>
        </Right>
      </Header>
    );
  }
}

export default withRouter(MyHeader);
