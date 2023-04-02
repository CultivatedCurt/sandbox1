import MyCanvas from "./Canvas.js";

const App = () => {
  return React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    children: React.createElement(MyCanvas),
  });
};

export default App;
