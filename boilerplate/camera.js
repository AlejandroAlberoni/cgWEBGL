class Camera {
    constructor(fov=60){    
        this.fov = degToRad(fov);
        this.aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
        this.projectionMatrix = m4.perspective(this.fov, this.aspect, 1, 2000);
        this.cameras = [];
        this.setCamera();
        }   

        setCamera(){
            let randCameraTarget;
            for (let i = 0 ; i < 3 ; i++){
                randCameraTarget = [Math.random(), Math.random(), Math.random()];
                let cameraPosition = [0, 0, 100];
                let target = randCameraTarget;
                let up = [0, 1, 0];
                let cameraMatrix = m4.lookAt(cameraPosition, target, up);
                let viewMatrix = m4.inverse(cameraMatrix);
                let viewProjectionMatrix = m4.multiply(this.projectionMatrix, viewMatrix);
                let cameraObject = {
                    cameraPosition: cameraPosition,
                    target: randCameraTarget,
                    up: up,
                    cameraMatrix: cameraMatrix,
                    viewMatrix: viewMatrix,
                    viewProjectionMatrix: viewProjectionMatrix
                }
                this.cameras.push(cameraObject);
            }
        }

        get_camera(n){
            return this.cameras[n].viewProjectionMatrix;
        }
            
    }