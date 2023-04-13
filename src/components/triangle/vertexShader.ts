export const vertexShader = `
uniform vec3 uHover;
uniform float u_inner_circle_distortion;
uniform float u_max_distance;
uniform float u_verticals;
uniform float u_invertion;
uniform float u_brightness;
uniform float u_dark_accent;
uniform float u_sharpness;

varying vec3 vHover;
varying vec3 vPosition;
varying float v_inner_circle_distortion;
varying float v_max_distance;
varying float v_verticals;
varying float v_invertion;
varying float v_brightness;
varying float v_dark_accent;
varying float v_sharpness;




void main() {
  vHover = uHover;
  v_inner_circle_distortion = u_inner_circle_distortion;
  v_max_distance = u_max_distance;
  v_verticals = u_verticals;
  v_invertion = u_invertion;
  v_brightness = u_brightness;
  v_dark_accent = u_dark_accent;
  v_sharpness = u_sharpness;

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