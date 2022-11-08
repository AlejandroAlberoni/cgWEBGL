class Model {
    constructor(gl, meshProgramInfo, uniforms, bufferInfo){
        this.gl = gl;
        let m_h = gl.canvas.height;
        let m_w = gl.canvas.width;
        this.meshProgramInfo = meshProgramInfo;
        this.translation = [Math.random(-m_w, m_w), Math.random(-m_h, m_h), 0];
        this.xrotation = Math.PI;
        this.yrotation = Math.PI;
        this.zrotation = Math.PI
        this.scale = [1, 1, 1];
        this.color = uniforms.u_colorMult;
        this.uniforms = uniforms;
        this.bufferInfo = bufferInfo;
        this.vao = twgl.createVAOFromBufferInfo(gl, meshProgramInfo, bufferInfo);
        this.setDrawInfo();
    }
    computeMatrix(viewProjectionMatrix, xrotation=this.xrotation, yrotation=this.yrotation, zrotation=this.zrotation, translation=this.translation) {
        let matrix = m4.translate(viewProjectionMatrix, translation[0], translation[1], translation[2]);
        matrix = m4.xRotate(matrix, xrotation);
        matrix = m4.zRotate(matrix, zrotation)
        this.uniforms.u_matrix = m4.yRotate(matrix, yrotation);
        this.xrotation = xrotation;
        this.yrotation = yrotation;
        this.translation = translation;
    }

    setDrawInfo(){
        this.drawInfo = {
            programInfo: this.meshProgramInfo,
            bufferInfo: this.bufferInfo,
            vertexArray: this.vao,
            uniforms: this.uniforms
        }
    }
}