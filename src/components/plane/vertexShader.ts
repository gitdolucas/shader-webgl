export const vertexShader = `
uniform vec3 uHover;

varying vec3 vHover;
varying vec3 vPosition;

void main() {
  vHover = uHover;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;