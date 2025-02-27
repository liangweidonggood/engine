export default /* glsl */`

#ifdef MAPCOLOR
uniform vec3 material_specular;
#endif

#ifdef MAPTEXTURE
uniform sampler2D texture_specularMap;
#endif

void getSpecularity() {
    vec3 specularColor = vec3(1,1,1);

    #ifdef MAPCOLOR
    specularColor *= material_specular;
    #endif

    #ifdef MAPTEXTURE
    specularColor *= $DECODE(texture2D(texture_specularMap, $UV, textureBias)).$CH;
    #endif

    #ifdef MAPVERTEX
    specularColor *= saturate(vVertexColor.$VC);
    #endif

    dSpecularity = specularColor;
}
`;
