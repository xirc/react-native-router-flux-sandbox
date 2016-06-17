import React from "react";
import { View } from "react-native";
import { Actions, Scene, Router } from "react-native-router-flux";

const scenes = Actions.create(
  <Scene key={"test"} component={SomeComponent} />
);
class SomeComponent extends React.Component<{}, {}> {
  render()  {
    return <View />;
  }
}
export class MyComponent extends React.Component<{}, {}> {
  render() {
    return <Router scenes={scenes} />;
  }
}
