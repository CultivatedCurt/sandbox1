const Cube = () => {
    const mesh = React.useRef();
  
    R3F.useFrame(() => {
      if (mesh.current) {
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.01;
      }
    });
  
    return React.createElement(
      "mesh",
      { ref: mesh },
      React.createElement("boxBufferGeometry", {
        attach: "geometry",
        args: [1, 1, 1],
      }),
      React.createElement("meshStandardMaterial", {
        attach: "material",
        color: "orange",
      })
    );
  };
  
  export default Cube;
  