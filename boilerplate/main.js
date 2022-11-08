loadGUI();
function main() {
  var camera = new Camera(fov=60)
  function render(){
    twgl.resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    if (WorldObjects.length != 0){
      computeModelPool(camera.get_camera(cam.select));
      drawObjects(WorldObjects);
    }
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);  
}

main();

/*function drawModel(gl, objectsToDraw){
twgl.setUniforms(objectsToDraw.meshProgramInfo, objectsToDraw.uniforms);
let drawInfoList = [];
objectsToDraw.forEach((model) => {
  drawInfoList.push(model.drawInfo)
  gl.bindVertexArray(model.vao)
})
twgl.drawObjectList(gl, drawInfoList)
}*/

function drawObjects(objectsToDraw) {
  objectsToDraw.forEach(function(object) {
    const programInfo = object.meshProgramInfo;
    const bufferInfo = object.bufferInfo;
    const vertexArray = object.vao;
    gl.useProgram(programInfo.program);
    gl.bindVertexArray(vertexArray);
    twgl.setUniforms(programInfo, object.uniforms);
    twgl.drawBufferInfo(gl, bufferInfo);
  });
}

function computeModelPool(vpm){
  WorldObjects.forEach((obj,index) => {
    if(index == selectmodel.input){
      obj.computeMatrix(vpm, xrotate.rotate, yrotate.rotate, zrotate.rotate)
    }
    else {
      obj.computeMatrix(vpm)
    }
  });
};