export const fragmentShader = `
varying vec3 vHover;
varying vec3 vPosition;

void main() {
  vec3 gray = vec3(0.1f, 0.1f, 0.1f);
  float dist = 0.0;
  dist = distance(vPosition, vHover);
  // vec3 verticals = vec3(vPosition.x * dist);
  // vec3 sinHover = vec3(cos(sin(vHover * dist * 0.05)));
  // gl_FragColor = vec4(vPosition + vHover * 0.001 / dist * 10.0 + verticals * sinHover , 1.0f); // set the color to gray (default is red)
  vec3 green = vec3(0.3f, 1.0f, 0.2f);
  vec3 blue = vec3(0.3f, 0.3f, 1.0f);
  vec3 distColor = vec3(sin(dist) * 40.0);
  vec3 verticals = vec3(vPosition.x);
  vec3 horizontals = vec3(vPosition.y);
  gl_FragColor = vec4(green * (distColor * blue * 0.5) + cos(verticals * 0.5) - sin(horizontals * 0.5), 1.0f); // set the color to gray (default is red)
    

  }
`;