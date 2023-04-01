export const fragmentShader = `
varying vec3 vHover;
varying vec3 vPosition;

void main() {
    float dist = 0.0;
    dist = distance(vPosition, vHover);
    vec3 color = vec3(dist);
    vec3 gray = vec3(0.21f, 0.21f, 0.21f);
    if(dist < 4.0 ){
      gl_FragColor = vec4(
        normalize(
            0.2  
            + dist * 0.15 
            * vPosition 
            * sin(dist * 1.0) 
            + cos(gray * -10.0) 
            * sin(vPosition.x * 8.0)
        ) * 10.0  , 1.0); // set the color to gray (default is red)
    } else {
      gl_FragColor = vec4(gray, 1.0f); // set the color to gray (default is red)
    }

  }
`;