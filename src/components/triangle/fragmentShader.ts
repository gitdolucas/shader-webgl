export const fragmentShader = `
varying vec3 vHover;
varying vec3 vPosition;
varying float v_brightness;
varying float v_inner_circle_distortion;
varying float v_max_distance;
varying float v_verticals;
varying float v_invertion;
varying float v_dark_accent;
varying float v_sharpness;

void main() {
    float dist = 0.0;
    dist = distance(vPosition, vHover);
    vec3 color = vec3(dist);
    vec3 gray = vec3(0.21f, 0.21f, 0.21f);
    if(dist < v_max_distance ){
      gl_FragColor = vec4(
        normalize(
            v_brightness  
            + dist * v_sharpness
            * (v_brightness + vPosition) 
            + cos(gray * v_invertion) 
            * sin(dist * v_inner_circle_distortion * 2.0) 
            * sin(vPosition.x * v_verticals)
        ) * v_brightness * 10.0  , v_dark_accent); // set the color to gray (default is red)
    } else {
      gl_FragColor = vec4(gray, 0.01f); // set the color to gray (default is red)
    }

  }
`;