import Cube from "./Cube.js";

const MyCanvas = () => {
  return React.createElement(
    R3F.Canvas,
    { style: { width: "100%", height: "100%" } },
    React.createElement("ambientLight"),
    React.createElement("pointLight", { position: [10, 10, 10] }),
    React.createElement(Cube)
  );
};

export default MyCanvas;
