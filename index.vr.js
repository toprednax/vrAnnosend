import React from "react";
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  AmbientLight,
  PointLight,
  Animated,
} from "react-vr";

const AnimatedModel = Animated.createAnimatedComponent(Model);

export default class vrAnnosend extends React.Component {
  state = {
    rotation: new Animated.Value(0),
  };

  componentDidMount() {
    this.rotate();
  }

  rotate = () => {
    this.state.rotation.setValue(0);
    Animated.timing(this.state.rotation, {
      toValue: 360,
      duration: 10000,
    }).start(this.rotate);
  };
  render() {
    return (
      <View>
        <Pano source={asset("praktijk2.jpg")} />
        <PointLight
          style={{
            color: "white",
            transform: [{ translate: [0, 0, 0] }],
          }}
        />
        <AnimatedModel
          lit={true}
          source={{
            obj: asset("mandibleTextLineRed.obj"),
            mtl: asset("mandibleTextLineRed.mtl"),
          }}
          style={{
            //color: "#d3d3d3",
            transform: [
              { translate: [0, 0, -10] },
              { scale: 0.05 },
              { rotateY: this.state.rotation },
              { rotateX: 0 },
            ],
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("vrAnnosend", () => vrAnnosend);
