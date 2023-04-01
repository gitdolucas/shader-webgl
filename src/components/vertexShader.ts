export const vertexShader = `
uniform vec3 uHover;
varying vec3 vHover;
varying vec3 vPosition;

void main() {
  vHover = uHover;
  float dist = 0.0;
  dist = distance(vHover, position);
  if(dist > 10.0){
    vPosition = vec3(position.xy, position.z + 0.1);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
  }else{
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
}
`;