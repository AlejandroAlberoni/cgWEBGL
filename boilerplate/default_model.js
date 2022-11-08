const gen_new_model = function (geometric) {
  switch (geometric){
    case 'cube':
      var modelBufferInfo = twgl.primitives.createCubeBufferInfo(gl, size=10)
      break;
    case 'cylinder':
      //var modelVertices = twgl.primitives.createCubeVertices(size=10);
      //var modelBufferInfo = twgl.createBufferInfoFromArrays(gl, cubeVertices);
      var modelBufferInfo = twgl.primitives.createCylinderBufferInfo(gl, 5, 20, 31, 31)
      break;
    case 'sphere':
      var modelBufferInfo = twgl.primitives.createSphereBufferInfo(gl, 5, 12, 6)
      break;
  }
  const modelUniforms = {
      u_colorMult: [Math.random(), Math.random(), Math.random(),1],
      u_matrix: m4.identity(),
  };
  let cube = new Model(gl, meshProgramInfo, modelUniforms, modelBufferInfo);
  WorldObjects.push(cube);
}