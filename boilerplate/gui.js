const selectmodel = { input: 0 };
const xrotate = { rotate: Math.PI };
const yrotate = { rotate: Math.PI };
const zrotate = { rotate: Math.PI };
const addCube = { addCube: () => {gen_new_model('cube')} };
const addCylinder = { addCylinder: () => {gen_new_model('cylinder')} }
const addSphere = { addSphere: () => {gen_new_model('sphere')} }
const xposition = { xtranslate: 0}
const cam = { select: 0 }


const loadGUI = () => {
  const gui = new dat.GUI();
  gui.add(addCube, "addCube");
  gui.add(addCylinder, "addCylinder");
  gui.add(addSphere, "addSphere");
  gui.add(selectmodel,"input");
  gui.add(xrotate, "rotate", 0, 3*Math.PI, Math.PI/360).name('x-axis Rotation');
  gui.add(yrotate, "rotate", 0, 3*Math.PI, Math.PI/360).name('y-axis Rotation');
  gui.add(zrotate, "rotate", 0, 3*Math.PI, Math.PI/360).name('z-axis Rotation');
  gui.add(xposition, "xtranslate", 0, gl.canvas.width, 0.01);
  gui.add(cam, "select", [0,1,2]).name("Cam");
}