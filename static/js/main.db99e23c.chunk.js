(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{85:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(49),i=n.n(r),o=(n(85),n(11)),a=n(17),s=n(45),l=n(23),j=n(0),u=n(112),v=n(118),p=n(114),d=n(63),b=n(78),h=n(117),m=n(14),O=n(5);function x(e){var t,n,r,i=e.color,o=void 0===i?16777215:i,a=e.position,s=void 0===a?[0,0,0]:a,l=e.direction,u=void 0===l?[0,0,0]:l,v=e.angle,p=void 0===v?1:v,d=(e.intensity,e.distance),b=void 0===d?0:d,h=e.penumbra,x=void 0===h?0:h,g=e.decay,f=void 0===g?0:g,y=[s[0]+u[0],s[1]+u[1],s[2]+u[2]],w=Object(c.useMemo)((function(){return new j.SpotLight(o)}),[]);return w.angle=p,w.distance=b,w.penumbra=x,w.decay=f,w.castShadow=!0,w.shadow.mapSize.width=1024,w.shadow.mapSize.height=1024,Object(O.jsxs)("group",(r={castShadow:!0,shadowMap:!0},Object(m.a)(r,"castShadow",!0),Object(m.a)(r,"receiveShadow",!0),Object(m.a)(r,"children",[Object(O.jsx)("primitive",(t={castShadow:!0,shadowMap:!0},Object(m.a)(t,"castShadow",!0),Object(m.a)(t,"receiveShadow",!0),Object(m.a)(t,"object",w),Object(m.a)(t,"position",s),t)),Object(O.jsx)("primitive",(n={castShadow:!0,shadowMap:!0},Object(m.a)(n,"castShadow",!0),Object(m.a)(n,"receiveShadow",!0),Object(m.a)(n,"object",w.target),Object(m.a)(n,"position",y),n))]),r))}var g=n(10),f=n(20);function y(e){var t=e.visible_flag,n=Object(f.useSpring)({loop:!0,from:{rotateZ:225,x:-75},to:{rotateZ:-135},reset:!0,config:f.config.molasses}),c=t?1:0;return Object(O.jsxs)("div",{style:{width:"100vw",height:"100vh",opacity:c},children:[Object(O.jsxs)(f.animated.h1,{style:{position:"absolute",top:"45%",width:"100vw",textAlign:"center",color:"white"},children:[Object(O.jsx)("p",{children:"LOADING..."}),Object(O.jsx)("p",{children:"Dandepaz.net"})]}),Object(O.jsx)(f.animated.div,{style:Object(g.a)({position:"relative",width:"150px",height:"150px",left:"50%",top:"32%",borderRadius:"15px",backgroundColor:"#C2B280"},n)})]})}function w(e,t){return[e[0]+t[0],e[1]+t[1],e[2]+t[2]]}function S(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function _(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function I(e,t,n){return"#"+_(e)+_(t)+_(n)}function M(e){return"#"+_(e[0])+_(e[1])+_(e[2])}function z(e){var t=Object(a.f)(s.a,"./zeppelin/scene.gltf"),n=(Object(a.f)(s.a,"./zeppelin/texture/scene.gltf"),t.nodes.mesh_0.geometry,Object(l.useSpring)({loop:!1,from:{rotation:[0,3.14,0],position:w(e.position,[0,0,0])},to:{rotation:[0,1.57,0],position:w(e.position,[0,-5,0])},config:{mass:200,tension:100,friction:0}})),r=Object(c.useState)(!1),i=Object(o.a)(r,2),u=i[0],v=i[1],p=Object(c.useState)(!1),d=Object(o.a)(p,2),b=d[0],h=d[1],m=Object(c.useState)("#000000"),x=Object(o.a)(m,2),f=x[0],y=x[1],_=Object(c.useState)(),M=Object(o.a)(_,2),z=M[0],C=M[1],P="#012a4a",T="#014f86",L=Object(c.useState)("#000000"),Z=Object(o.a)(L,2),A=Z[0],k=Z[1];Object(c.useEffect)((function(){var e,t=100;if(u&&b&&(C(t),k(P),y(T)),u&&0==b&&(h(!0),C(0),k(P),y(T)),b&&(e=setInterval((function(){C(z+1)}),1)),z<t){var n=j.MathUtils.lerp(parseInt(S(f).r),parseInt(S(A).r),z/t),c=j.MathUtils.lerp(parseInt(S(f).g),parseInt(S(A).g),z/t),r=j.MathUtils.lerp(parseInt(S(f).b),parseInt(S(A).b),z/t),i=I(parseInt(n),parseInt(c),parseInt(r));y(i)}else h(!1);return document.body.style.cursor=u?"pointer":"auto",function(){return clearInterval(e)}}),[u,z]);var E=new j.MeshPhongMaterial({color:f,flatShading:!1,transmission:1});return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(l.animated.mesh,Object(g.a)(Object(g.a)({shadowMap:!0,castShadow:!0,receiveShadow:!0},n),{},{children:Object(O.jsx)("mesh",{castShadow:!0,receiveShadow:!0,shadowMap:!0,geometry:t.nodes.mesh_0.geometry,scale:2,onPointerOver:function(e){return e.stopPropagation(),v(!0)},onPointerOut:function(e){return e.stopPropagation(),v(!1)},material:E})}))})}var C=n(110);function P(){var e=Object(a.f)(j.TextureLoader,"./ocean.png");e&&(e.wrapS=e.wrapT=j.RepeatWrapping,e.repeat.set(3,3),e.anisotropy=0);var t=Object(l.useSpring)({loop:{reverse:!0},from:{position:[10,1,10],rotation:[-1.57,0,0]},to:{position:[0,-1,0],rotation:[-1.57,0,0]},config:{mass:1,tension:5,friction:0}});return Object(O.jsx)(l.animated.mesh,Object(g.a)(Object(g.a)({},t),{},{children:Object(O.jsxs)("mesh",{children:[Object(O.jsx)("planeBufferGeometry",{attach:"geometry",args:[5e3,5e3]}),Object(O.jsx)("meshBasicMaterial",{attach:"material",map:e})]})}))}function T(){var e=Object(c.useRef)();Object(a.e)((function(t){var n=t.clock;return e.current.uTime=n.getElapsedTime()}));var t=Object(C.a)({uTime:0,uColor:new j.Color(0,0,0),uTexture:new j.Texture},"\n    precision mediump float;\n\n    varying vec2 vUv;\n    varying float vWave;\n\n    uniform float uTime;\n\n    //\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_3220349555(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_3220349555(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_3220349555(vec4 x) {\n     return mod289_3220349555(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_3220349555(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_3220349555 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_3220349555 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_3220349555;\n  vec3 i1 = min( g_3220349555.xyz, l.zxy );\n  vec3 i2 = max( g_3220349555.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_3220349555.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_3220349555(i);\n  vec4 p = permute_3220349555( permute_3220349555( permute_3220349555(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_3220349555.wyz - D_3220349555.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_3220349555 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_3220349555 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_3220349555.xy,h.z);\n  vec3 p3 = vec3(a1_3220349555.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_3220349555(vec4(dot(p0_3220349555,p0_3220349555), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_3220349555 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_3220349555,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n    void main() {\n      vUv = uv;\n\n      vec3 pos = position;\n      float noiseFreq = .0002;\n      float noiseAmp = 2.0;\n\n      vec3 noisePos = vec3(pos.x + uTime*.2, pos.y, pos.z);\n\n      float bigger_farther = sqrt((pos.x*pos.x) +(pos.y*pos.y))*0.015;\n      pos.z += snoise3(noisePos) * noiseAmp * bigger_farther;\n\n      vWave = pos.z ;\n\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n    }\n  ","\n  precision mediump float;\n  varying vec2 vUv;\n  uniform float uTime;\n\n  #define WATER_COL vec3(0.0, 0.4, 0.7)\n  #define WATER2_COL vec3(0.0, 0.37, 0.65)\n  #define FOAM_COL vec3(0.7125, 0.8609, 0.8648)\n\n  #define M_2PI 6.283185307\n  #define M_6PI 18.84955592\n\n  float circ(vec2 pos, vec2 c, float s)\n  {\n      c = abs(pos - c);\n      c = min(c, 1.0 - c);\n\n      return smoothstep(0.0, 0.002, sqrt(s) - sqrt(dot(c, c))) * -1.0;\n  }\n\n  // Foam pattern for the water constructed out of a series of circles\n  float waterlayer(vec2 uv)\n  {\n      uv = mod(uv, 1.0); // Clamp to [0..1]\n      float ret = 1.0;\n      ret += circ(uv, vec2(0.37378, 0.277169), 0.0268181);\n      ret += circ(uv, vec2(0.0317477, 0.540372), 0.0193742);\n      ret += circ(uv, vec2(0.430044, 0.882218), 0.0232337);\n      ret += circ(uv, vec2(0.641033, 0.695106), 0.0117864);\n      ret += circ(uv, vec2(0.0146398, 0.0791346), 0.0299458);\n      ret += circ(uv, vec2(0.43871, 0.394445), 0.0289087);\n      ret += circ(uv, vec2(0.909446, 0.878141), 0.028466);\n      ret += circ(uv, vec2(0.310149, 0.686637), 0.0128496);\n      ret += circ(uv, vec2(0.928617, 0.195986), 0.0152041);\n      ret += circ(uv, vec2(0.0438506, 0.868153), 0.0268601);\n      ret += circ(uv, vec2(0.308619, 0.194937), 0.00806102);\n      ret += circ(uv, vec2(0.349922, 0.449714), 0.00928667);\n      ret += circ(uv, vec2(0.0449556, 0.953415), 0.023126);\n      ret += circ(uv, vec2(0.117761, 0.503309), 0.0151272);\n      ret += circ(uv, vec2(0.563517, 0.244991), 0.0292322);\n      ret += circ(uv, vec2(0.566936, 0.954457), 0.00981141);\n      ret += circ(uv, vec2(0.0489944, 0.200931), 0.0178746);\n      ret += circ(uv, vec2(0.569297, 0.624893), 0.0132408);\n      ret += circ(uv, vec2(0.298347, 0.710972), 0.0114426);\n      ret += circ(uv, vec2(0.878141, 0.771279), 0.00322719);\n      ret += circ(uv, vec2(0.150995, 0.376221), 0.00216157);\n      ret += circ(uv, vec2(0.119673, 0.541984), 0.0124621);\n      ret += circ(uv, vec2(0.629598, 0.295629), 0.0198736);\n      ret += circ(uv, vec2(0.334357, 0.266278), 0.0187145);\n      ret += circ(uv, vec2(0.918044, 0.968163), 0.0182928);\n      ret += circ(uv, vec2(0.965445, 0.505026), 0.006348);\n      ret += circ(uv, vec2(0.514847, 0.865444), 0.00623523);\n      ret += circ(uv, vec2(0.710575, 0.0415131), 0.00322689);\n      ret += circ(uv, vec2(0.71403, 0.576945), 0.0215641);\n      ret += circ(uv, vec2(0.748873, 0.413325), 0.0110795);\n      ret += circ(uv, vec2(0.0623365, 0.896713), 0.0236203);\n      ret += circ(uv, vec2(0.980482, 0.473849), 0.00573439);\n      ret += circ(uv, vec2(0.647463, 0.654349), 0.0188713);\n      ret += circ(uv, vec2(0.651406, 0.981297), 0.00710875);\n      ret += circ(uv, vec2(0.428928, 0.382426), 0.0298806);\n      ret += circ(uv, vec2(0.811545, 0.62568), 0.00265539);\n      ret += circ(uv, vec2(0.400787, 0.74162), 0.00486609);\n      ret += circ(uv, vec2(0.331283, 0.418536), 0.00598028);\n      ret += circ(uv, vec2(0.894762, 0.0657997), 0.00760375);\n      ret += circ(uv, vec2(0.525104, 0.572233), 0.0141796);\n      ret += circ(uv, vec2(0.431526, 0.911372), 0.0213234);\n      ret += circ(uv, vec2(0.658212, 0.910553), 0.000741023);\n      ret += circ(uv, vec2(0.514523, 0.243263), 0.0270685);\n      ret += circ(uv, vec2(0.0249494, 0.252872), 0.00876653);\n      ret += circ(uv, vec2(0.502214, 0.47269), 0.0234534);\n      ret += circ(uv, vec2(0.693271, 0.431469), 0.0246533);\n      ret += circ(uv, vec2(0.415, 0.884418), 0.0271696);\n      ret += circ(uv, vec2(0.149073, 0.41204), 0.00497198);\n      ret += circ(uv, vec2(0.533816, 0.897634), 0.00650833);\n      ret += circ(uv, vec2(0.0409132, 0.83406), 0.0191398);\n      ret += circ(uv, vec2(0.638585, 0.646019), 0.0206129);\n      ret += circ(uv, vec2(0.660342, 0.966541), 0.0053511);\n      ret += circ(uv, vec2(0.513783, 0.142233), 0.00471653);\n      ret += circ(uv, vec2(0.124305, 0.644263), 0.00116724);\n      ret += circ(uv, vec2(0.99871, 0.583864), 0.0107329);\n      ret += circ(uv, vec2(0.894879, 0.233289), 0.00667092);\n      ret += circ(uv, vec2(0.246286, 0.682766), 0.00411623);\n      ret += circ(uv, vec2(0.0761895, 0.16327), 0.0145935);\n      ret += circ(uv, vec2(0.949386, 0.802936), 0.0100873);\n      ret += circ(uv, vec2(0.480122, 0.196554), 0.0110185);\n      ret += circ(uv, vec2(0.896854, 0.803707), 0.013969);\n      ret += circ(uv, vec2(0.292865, 0.762973), 0.00566413);\n      ret += circ(uv, vec2(0.0995585, 0.117457), 0.00869407);\n      ret += circ(uv, vec2(0.377713, 0.00335442), 0.0063147);\n      ret += circ(uv, vec2(0.506365, 0.531118), 0.0144016);\n      ret += circ(uv, vec2(0.408806, 0.894771), 0.0243923);\n      ret += circ(uv, vec2(0.143579, 0.85138), 0.00418529);\n      ret += circ(uv, vec2(0.0902811, 0.181775), 0.0108896);\n      ret += circ(uv, vec2(0.780695, 0.394644), 0.00475475);\n      ret += circ(uv, vec2(0.298036, 0.625531), 0.00325285);\n      ret += circ(uv, vec2(0.218423, 0.714537), 0.00157212);\n      ret += circ(uv, vec2(0.658836, 0.159556), 0.00225897);\n      ret += circ(uv, vec2(0.987324, 0.146545), 0.0288391);\n      ret += circ(uv, vec2(0.222646, 0.251694), 0.00092276);\n      ret += circ(uv, vec2(0.159826, 0.528063), 0.00605293);\n  \treturn max(ret, 0.0);\n  }\n  // Procedural texture generation for the water\n\n  vec3 water(vec2 uv, vec3 cdir)\n  {\n      uv *= vec2(2.);\n\n      // Parallax height distortion with two directional waves at\n      // slightly different angles.\n      vec2 a = 0.025 * cdir.xz / cdir.y; // Parallax offset\n      float h = sin(uv.x + uTime); // Height at UV\n      uv += a * h;\n      h = sin(0.841471 * uv.x - 0.540302 * uv.y + uTime);\n      uv += a * h;\n\n      // Texture distortion\n      float d1 = mod(uv.x + uv.y, M_2PI);\n      float d2 = mod((uv.x + uv.y + 0.25) * 1.3, M_6PI);\n      d1 = uTime * 0.07 + d1;\n      d2 = uTime * 0.5 + d2;\n      vec2 dist = vec2(\n      \tsin(d1) * 0.15 + sin(d2) * 0.05,\n      \tcos(d1) * 0.15 + cos(d2) * 0.05\n      );\n\n      vec3 ret = mix(WATER_COL, WATER2_COL, waterlayer(uv + dist.xy));\n      ret = mix(ret, FOAM_COL, waterlayer(vec2(1.0) - uv - dist.yx));\n      return ret;\n  }\n\n    void main() {\n\n      gl_FragColor = vec4(water(vUv, vec3(0,1,1)),1);\n    }\n  ");Object(a.d)({WaveShaderMaterial:t});var n=Object(a.f)(j.TextureLoader,["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ae22bc4e-c337-4c6e-87ea-2de9b161fd14/dcnu8o9-a83acf3f-b9e2-4735-85e3-f87ee0a2e48f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlMjJiYzRlLWMzMzctNGM2ZS04N2VhLTJkZTliMTYxZmQxNFwvZGNudThvOS1hODNhY2YzZi1iOWUyLTQ3MzUtODVlMy1mODdlZTBhMmU0OGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.U4nGyVMcYJBOSlnWYtVHJkK1JrCuR3GbrWluGzm7tEY"]),r=Object(o.a)(n,1)[0];return r.wrapS=j.RepeatWrapping,r.wrapT=j.RepeatWrapping,r.repeat.set(200,200),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("mesh",{castShadow:!0,receiveShadow:!0,rotation:[-1.57,0,0],position:[0,0,-200],children:[Object(O.jsx)("planeBufferGeometry",{castShadow:!0,receiveShadow:!0,args:[5e3,5e3,20,20]}),Object(O.jsx)("waveShaderMaterial",{castShadow:!0,receiveShadow:!0,uColor:"hotpink",ref:e})]})})}var L=n(115);function Z(e){var t=Object.assign({},e),n=Object(c.useRef)(),r=Object(L.a)("./clapper/scene.gltf"),i=r.nodes,a=(r.materials,Object(c.useState)(!1)),s=Object(o.a)(a,2),u=s[0],v=s[1],p=Object(c.useState)(!1),d=Object(o.a)(p,2),b=d[0],h=d[1],m=Object(c.useState)("#000000"),x=Object(o.a)(m,2),f=x[0],y=x[1],_=Object(c.useState)(),M=Object(o.a)(_,2),z=M[0],C=M[1],P="#6c757d",T="#ced4da",Z=Object(c.useState)("#000000"),A=Object(o.a)(Z,2),k=A[0],E=A[1];Object(c.useEffect)((function(){var e,t=100;if(u&&b&&(C(t),E(P),y(T)),u&&0==b&&(h(!0),C(0),E(P),y(T)),b&&(e=setInterval((function(){C(z+1)}),1)),z<t){var n=j.MathUtils.lerp(parseInt(S(f).r),parseInt(S(k).r),z/t),c=j.MathUtils.lerp(parseInt(S(f).g),parseInt(S(k).g),z/t),r=j.MathUtils.lerp(parseInt(S(f).b),parseInt(S(k).b),z/t),i=I(parseInt(n),parseInt(c),parseInt(r));y(i)}else h(!1);return document.body.style.cursor=u?"pointer":"auto",function(){return clearInterval(e)}}),[u,z]);var W=new j.MeshPhongMaterial({color:f,flatShading:!0,transmission:1}),U=Object(l.useSpring)({loop:!1,from:{rotation:[.2,-.1,.2],position:w(t.position,[0,2,0])},to:{rotation:[-.1,.1,.1],position:w(t.position,[0,-1,0])},config:{mass:100,tension:100,friction:0}}),D=Object(l.useSpring)({loop:!1,from:{rotation:[.26,0,0]},to:{rotation:[0,0,0]},config:{mass:10,tension:100,friction:0}});return Object(O.jsx)(l.animated.mesh,Object(g.a)(Object(g.a)({castShadow:!0,receiveShadow:!0},U),{},{children:Object(O.jsx)("group",Object(g.a)(Object(g.a)({ref:n},t),{},{dispose:null,onPointerOver:function(e){return e.stopPropagation(),v(!0)},onPointerOut:function(e){return e.stopPropagation(),v(!1)},children:Object(O.jsxs)("group",{rotation:[-Math.PI/2,0,0],position:[-160,-20,250],children:[Object(O.jsx)("group",{position:[0,0,14.25],children:Object(O.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.Cube_0.geometry,material:W})}),Object(O.jsxs)("group",{position:[0,0,13.71],children:[Object(O.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.Cube002_0.geometry,material:W}),Object(O.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.Cube002_1.geometry,material:W})]}),Object(O.jsx)("group",{position:[0,-9.01,15.44],children:Object(O.jsx)("mesh",{geometry:i.Cube003_0.geometry,material:W})}),Object(O.jsx)("group",{position:[-1.68,-9.01,15.44],children:Object(O.jsx)("mesh",{geometry:i.Cube004_0.geometry,material:W})}),Object(O.jsx)("group",{position:[.99,-9.49,16.26],rotation:[1.79,0,-Math.PI/2],scale:[.21,.21,.21],children:Object(O.jsx)("mesh",{geometry:i.Sphere04_0.geometry,material:W})}),Object(O.jsx)("group",{position:[.99,-9.49,14.02],rotation:[.83,0,-Math.PI/2],scale:[.21,.21,.21],children:Object(O.jsx)("mesh",{geometry:i.Sphere04001_0.geometry,material:W})}),Object(O.jsx)("group",{position:[.99,-6.42,14.02],rotation:[2.37,0,-Math.PI/2],scale:[.21,.21,.21],children:Object(O.jsx)("mesh",{geometry:i.Sphere04002_0.geometry,material:W})}),Object(O.jsx)("group",{position:[-.99,-6.42,14.02],rotation:[2.37,0,Math.PI/2],scale:[-.21,.21,.21],children:Object(O.jsx)("mesh",{geometry:i.Sphere04003_0.geometry,material:W})}),Object(O.jsx)("group",{position:[-.99,-9.49,14.02],rotation:[.83,0,Math.PI/2],scale:[-.21,.21,.21],children:Object(O.jsx)("mesh",{geometry:i.Sphere04004_0.geometry,material:W})}),Object(O.jsx)("group",{position:[-.99,-9.49,16.26],rotation:[1.79,0,Math.PI/2],scale:[-.21,.21,.21],children:Object(O.jsx)("mesh",{geometry:i.Sphere04005_0.geometry,material:W})}),Object(O.jsx)("group",{position:[.96,-9.5,16.28],rotation:[.29,0,0],children:Object(O.jsx)(l.animated.mesh,Object(g.a)(Object(g.a)({castShadow:!0,receiveShadow:!0,geometry:i.Cube001_0.geometry},D),{},{material:W}))}),Object(O.jsx)("group",{position:[38.23,-8.13,7.88],rotation:[1.77,1.27,-1.7]})]})}))}))}function A(e){var t=Object.assign({},e),n=Object(c.useRef)(),r=Object(L.a)("./boombox/scene.gltf"),i=r.nodes,a=r.materials,s=Object(c.useState)(!1),u=Object(o.a)(s,2),v=u[0],p=u[1],d=Object(c.useState)(!1),b=Object(o.a)(d,2),h=b[0],m=b[1],x=Object(c.useState)("#000000"),f=Object(o.a)(x,2),y=f[0],_=f[1],M=Object(c.useState)(),z=Object(o.a)(M,2),C=z[0],P=z[1],T="#c9184a",Z="#ff4d6d",A=Object(c.useState)("#000000"),k=Object(o.a)(A,2),E=k[0],W=k[1];Object(c.useEffect)((function(){var e,t=100;if(v&&h&&(P(t),W(T),_(Z)),v&&0==h&&(m(!0),P(0),W(T),_(Z)),h&&(e=setInterval((function(){P(C+1)}),1)),C<t){var n=j.MathUtils.lerp(parseInt(S(y).r),parseInt(S(E).r),C/t),c=j.MathUtils.lerp(parseInt(S(y).g),parseInt(S(E).g),C/t),r=j.MathUtils.lerp(parseInt(S(y).b),parseInt(S(E).b),C/t),i=I(parseInt(n),parseInt(c),parseInt(r));_(i)}else m(!1);return document.body.style.cursor=v?"pointer":"auto",function(){return clearInterval(e)}}),[v,C]);var U=new j.MeshPhongMaterial({color:y,flatShading:!0,transmission:1}),D=Object(l.useSpring)({pause:t.pause,loop:!0,from:{rotation:[.2,0,.1],position:w(t.position,[0,2,-10])},to:{rotation:[-.2,0,-.1],position:w(t.position,[0,-2,-10])},config:{mass:10,tension:100,friction:0}}),G=Object(l.useSpring)({pause:t.pause,loop:!0,from:{rotation:[.36,0,0]},to:{rotation:[0,0,0]},config:{mass:10,tension:100,friction:0}});return Object(O.jsx)(l.animated.mesh,Object(g.a)(Object(g.a)({castShadow:!0,receiveShadow:!0},D),{},{children:Object(O.jsx)("group",Object(g.a)(Object(g.a)({ref:n,scale:10,rotation:[0,-Math.PI/2,0]},t),{},{dispose:null,position:[-10,0,10],onPointerOver:function(e){return e.stopPropagation(),p(!0)},onPointerOut:function(e){return e.stopPropagation(),p(!1)},children:Object(O.jsx)("group",{rotation:[-Math.PI/2,0,0],children:Object(O.jsxs)("group",{rotation:[Math.PI/2,0,0],children:[Object(O.jsxs)("group",{position:[0,.65,0],scale:[1,.63,.38],children:[Object(O.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.Object_4.geometry,material:U}),Object(O.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.Object_5.geometry,material:i.Object_5.material}),Object(O.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.Object_6.geometry,material:a.glass})]}),Object(O.jsx)("group",{position:[.64,.42,.38],scale:[.29,.29,.07],children:Object(O.jsx)("mesh",{geometry:i.Object_8.geometry,material:i.Object_8.material})}),Object(O.jsx)("group",{position:[-.66,.42,.38],scale:[.29,.29,.07],children:Object(O.jsx)("mesh",{geometry:i.Object_10.geometry,material:i.Object_10.material})}),Object(O.jsx)("group",{position:[.12,.69,.34],scale:[.04,.04,.01],children:Object(O.jsx)("mesh",{geometry:i.Object_12.geometry,material:i.Object_12.material})}),Object(O.jsx)("group",{position:[-.11,.69,.34],scale:[.04,.04,.01],children:Object(O.jsx)("mesh",{geometry:i.Object_14.geometry,material:i.Object_14.material})}),Object(O.jsx)("group",{position:[-.66,1.27,.18],scale:.06,children:Object(O.jsx)("mesh",{geometry:i.Object_16.geometry,material:U})}),Object(O.jsx)("group",{position:[-.47,1.27,.18],scale:.06,children:Object(O.jsx)("mesh",{geometry:i.Object_18.geometry,material:U})}),Object(O.jsx)("group",{position:[-.26,1.27,.18],scale:.06,children:Object(O.jsx)("mesh",{geometry:i.Object_20.geometry,material:U})}),Object(O.jsx)("group",{position:[1.03,.92,.2],rotation:[0,0,1.57],scale:[.1,.03,.1],children:Object(O.jsx)("mesh",{geometry:i.Object_22.geometry,material:U})}),Object(O.jsx)("group",{position:[0,1.73,0],scale:[1.14,.08,.08],children:Object(O.jsx)(l.animated.mesh,Object(g.a)(Object(g.a)({castShadow:!0,receiveShadow:!0,geometry:i.Object_24.geometry},G),{},{material:U}))}),Object(O.jsx)("group",{position:[1,1.2,0],rotation:[0,0,1.57],scale:[.04,.01,.04],children:Object(O.jsx)("mesh",Object(g.a)(Object(g.a)({},G),{},{geometry:i.Object_26.geometry,material:i.Object_26.material}))}),Object(O.jsx)("group",{position:[-1.01,1.2,0],rotation:[0,0,1.57],scale:[.04,.01,.04],children:Object(O.jsx)("mesh",{geometry:i.Object_28.geometry,material:i.Object_28.material})})]})})}))}))}function k(){var e=Object(f.useSpring)({loop:!0,from:{rotateZ:-2,y:15},to:{rotateZ:1,y:-15},delay:0,config:{mass:30,tension:100,friction:0}}),t=Object(f.useSpring)({loop:!0,from:{rotateZ:-2,y:15},to:{rotateZ:1,y:-15},delay:100,config:{mass:30,tension:100,friction:0}}),n=Object(f.useSpring)({loop:!0,from:{rotateZ:-2,y:15},to:{rotateZ:1,y:-15},delay:200,config:{mass:30,tension:100,friction:0}});return Object(O.jsxs)("div",{children:[Object(O.jsx)(f.animated.h1,{style:Object(g.a)({textAlign:"center",position:"relative",top:"30px",color:"#b5dbdc"},e),children:"Welcome to my site!"}),Object(O.jsx)(f.animated.h2,{style:Object(g.a)({textAlign:"center",position:"relative",top:"30px",color:"#b5dbdc"},t),children:"My name is Dan and I love making silly things."}),Object(O.jsx)(f.animated.h3,{style:Object(g.a)({textAlign:"center",position:"relative",top:"40px",color:"#b5dbdc"},n),children:"Still under construction!"})]})}function E(e){var t=e.music_state,n=Object(f.useSpring)({pause:!t,loop:!0,from:{rotateZ:-10,y:20},to:{rotateZ:10,y:-20},delay:0,config:{mass:10,tension:100,friction:0}}),c=Object(f.useSpring)({pause:!t,loop:!0,from:{rotateZ:-10,y:20},to:{rotateZ:10,y:-20},delay:200,config:{mass:10,tension:100,friction:0}}),r=Object(f.useSpring)({pause:!t,loop:!0,from:{rotateZ:-10,y:20},to:{rotateZ:10,y:-20},delay:400,config:{mass:10,tension:100,friction:0}}),i=Object(f.useSpring)({pause:!t,loop:!0,from:{rotateZ:-10,y:20},to:{rotateZ:10,y:-20},delay:600,config:{mass:10,tension:100,friction:0}});return Object(O.jsx)("div",{children:Object(O.jsxs)("h2",{style:{textAlign:"center",position:"relative",top:"30px",color:"#C2B280"},children:[Object(O.jsx)("p",{children:"Play some music!"}),Object(O.jsx)("p",{children:t?"Audio is on \u266b":"Audio is off"}),Object(O.jsxs)("div",{style:{},children:[Object(O.jsx)(f.animated.p,{style:Object(g.a)({position:"relative",top:40,left:-160},n),children:"\u266b"}),Object(O.jsx)(f.animated.p,{style:Object(g.a)({position:"relative",top:-10,left:-40},c),children:"\u266b"}),Object(O.jsx)(f.animated.p,{style:Object(g.a)({position:"relative",top:-65,left:60},r),children:"\u266b"}),Object(O.jsx)(f.animated.p,{style:Object(g.a)({position:"relative",top:-120,left:160},i),children:"\u266b"})]})]})})}L.a.preload("./clapper/scene.gltf"),L.a.preload("./boombox/scene.gltf");var W=function(){var e=Object(a.f)(s.a,"./island/Redoneisland.glb"),t=new j.MeshPhongMaterial({color:"#C2B280",flatShading:!0});return Object(O.jsx)("mesh",{shadows:!0,castShadow:!0,receiveShadow:!0,geometry:e.nodes.Landscape001.geometry,scale:200,material:t,position:[0,-11,-250]})};function U(e){var t=e.cam_pos,n=void 0===t?[0,0,0]:t,r=e.Str,i=void 0===r?.006:r,o=e.setLoader,s=void 0===o?null:o,l=i,u=new j.Vector3(0-n[0],0,-250-n[2]),v=120*(u=u.normalize()).x,p=120*u.z;return Object(a.e)((function(e){var t=e.camera;t.position.x+=(n[0]-v-t.position.x)*l,t.position.y+=(n[1]-t.position.y)*l,t.position.z+=(n[2]-p-t.position.z)*l})),Object(c.useEffect)((function(){s(!1)}),[]),null}function D(e){var t=e.text;return Object(O.jsx)("div",{children:Object(O.jsx)("h2",{style:{position:"relative",top:"50px",textAlign:"center",color:"#b5dbdc"},children:t})})}function G(e){return[parseInt(255*e[0]),parseInt(255*e[1]),parseInt(255*e[2])]}function N(){document.title="Welcome to adeadzeplin";var e=Object(c.useState)(8),t=Object(o.a)(e,2),n=t[0],r=t[1],i=function(e){r(e+n),n<0&&r(8),n>8&&r(0)},s=Object(c.useState)(!1),l=Object(o.a)(s,2),j=l[0],m=l[1];document.body.style.cursor=j?"pointer":"auto";var g=function(){var e=Object(c.useState)(window.innerWidth),t=Object(o.a)(e,2),n=t[0],r=t[1],i=function(){r(window.innerWidth)};return Object(c.useEffect)((function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),[]),console.log(n),n<=768};console.log(g());var f=Object(c.useState)(!0),S=Object(o.a)(f,2),_=S[0],I=S[1],C=function(e){var t=Object(c.useState)(new Audio(e)),n=Object(o.a)(t,1)[0],r=Object(c.useState)(!1),i=Object(o.a)(r,2),a=i[0],s=i[1];return n.volume=.4,Object(c.useEffect)((function(){a?n.play():n.pause()}),[a]),Object(c.useEffect)((function(){return n.addEventListener("ended",(function(){return s(!1)})),function(){n.removeEventListener("ended",(function(){return s(!1)}))}}),[]),[a,function(){return s(!a)}]}("./music.mp3"),L=Object(o.a)(C,2),N=L[0],J=L[1],Y=[[0,20,-90],[-130,20,-130],[-160,20,-250],[-130,20,-370],[0,20,-400],[130,20,-370],[160,20,-250],[110,20,-130],[0,20,-90]],B=g()?.02:.01,F=[B,B,B,null,B,B,B,B,g()?.006:.002,null],R=["start","misc2","music box","free-cam enable","misc 5","misc 6","credits","misc 8","free-cam enable"],V=[Object(O.jsx)(k,{}),Object(O.jsx)(D,{text:"place holder text 2"}),Object(O.jsx)(E,{music_state:N}),Object(O.jsx)(D,{text:"Free Cam Enabled"}),Object(O.jsx)(D,{text:"place holder text 5"}),Object(O.jsx)(D,{text:"place holder text 6"}),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(D,{text:"Credits: this is where I will credit"}),Object(O.jsx)(D,{text:"the assets that i use"})]}),Object(O.jsx)(D,{text:"place holder text"}),Object(O.jsx)(D,{text:""})],Q=M(G([0,.4,.7])),X=M(G([0,.37,.65])),q=M(G([.7125,.8609,.8648])),H=Object(b.a)({palette:{primary:{main:q}}});return console.log(n),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{style:{visible:_,position:"absolute",width:"100vw",height:"100vh",backgroundColor:"#012a4a"},children:Object(O.jsx)(y,{style:{textAlign:"center"},visible_flag:_})}),Object(O.jsx)("div",{style:{opacity:!_,position:"relative",width:"100%",height:"70%",marginBottom:"-5vh"},children:Object(O.jsxs)(a.a,{colorManagement:!0,shadows:!0,camera:{position:[300,2e3,-600],fov:60,near:1,far:1e4,zoom:1},mode:"concurrent",children:[Object(O.jsxs)(c.Suspense,{fallback:null,children:[x({color:15794063,position:w(Y[n],[0,100,0]),direction:[0,-1,0],angle:.4,decay:.1,penumbra:.9,intensity:.1,distance:200}),x({color:4276224,position:w(Y[0],[0,50,50]),direction:[0,-1,-10],angle:20,decay:.1,penumbra:.1,intensity:.1,distance:1e3}),Object(O.jsx)("ambientLight",{intensity:.2}),Object(O.jsxs)("mesh",{children:[Object(O.jsx)("mesh",{onClick:function(e){return r(0)},children:Object(O.jsx)(z,{castShadow:!0,receiveShadow:!0,position:Y[0]})}),Object(O.jsx)("mesh",{onClick:function(e){return r(1)},children:Object(O.jsx)(z,{castShadow:!0,receiveShadow:!0,position:Y[1]})}),Object(O.jsx)("mesh",{onClick:function(e){return r(2)},children:Object(O.jsx)(A,{castShadow:!0,receiveShadow:!0,position:Y[2],onClick:J,pause:!N})}),Object(O.jsx)("mesh",{onClick:function(e){return r(3)},children:Object(O.jsx)(z,{castShadow:!0,receiveShadow:!0,position:Y[3]})}),Object(O.jsx)("mesh",{onClick:function(e){return r(4)},children:Object(O.jsx)(z,{castShadow:!0,receiveShadow:!0,position:Y[4]})}),Object(O.jsx)("mesh",{onClick:function(e){return r(5)},children:Object(O.jsx)(z,{castShadow:!0,receiveShadow:!0,position:Y[5]})}),Object(O.jsx)("mesh",{onClick:function(e){return r(6)},children:Object(O.jsx)(Z,{castShadow:!0,receiveShadow:!0,position:Y[6]})}),Object(O.jsx)("mesh",{onClick:function(e){return r(7)},children:Object(O.jsx)(z,{castShadow:!0,receiveShadow:!0,position:Y[7]})})]}),Object(O.jsx)(U,{cam_pos:w(Y[n],[0,40,0]),Str:F[n],setLoader:I}),g()?Object(O.jsx)(P,{}):Object(O.jsx)(T,{}),Object(O.jsx)(u.a,{radius:2e3,depth:10,count:g()?5e3:5e4,factor:g()?50:10,saturation:1,fade:!g()}),Object(O.jsx)(W,{position:[0,0,0]})]}),Object(O.jsx)(v.a,{target:[0,-5,-250],enablePan:!1})]})}),Object(O.jsx)("div",{onMouseLeave:function(){return m(!1)},onMouseEnter:function(){return m(!0)},onClick:function(e){return i(7==n||8==n?-7:1)},style:{opacity:8==n?0:1,position:"absolute",top:"10px",left:"10px"},children:Object(O.jsx)(h.a,{theme:H,children:Object(O.jsxs)(p.a,{variant:"outlined",style:{color:q},children:["<< ",R[7==n||8==n?1:n+1]]})})}),Object(O.jsx)("div",{onMouseLeave:function(){return m(!1)},onMouseEnter:function(){return m(!0)},onClick:function(e){return i(0==n?7:-1)},style:{opacity:8==n?0:1,position:"absolute",top:"10px",right:"10px"},children:Object(O.jsx)(h.a,{theme:H,children:Object(O.jsxs)(p.a,{variant:"outlined",style:{color:q},children:[R[0==n?7:n-1]," >>"]})})}),Object(O.jsx)("div",{style:{position:"relative",width:"100vw",top:"-50px"},children:Object(O.jsx)(d.a,{fill:q,paused:!1,options:{height:60,amplitude:20,speed:.2,points:5}})}),Object(O.jsx)("div",{style:{position:"relative",width:"100vw",top:"-160px"},children:Object(O.jsx)(d.a,{fill:Q,paused:!1,options:{height:60,amplitude:20,speed:.2,points:5}})}),Object(O.jsx)("div",{style:{position:"relative",width:"100vw",top:"-290px"},children:Object(O.jsx)(d.a,{fill:X,paused:!1,options:{height:60,amplitude:20,speed:.2,points:5}})}),Object(O.jsx)("div",{children:Object(O.jsx)("div",{style:{position:"relative",height:"45vh",top:"-380px",backgroundColor:X},children:V[n]})})]})}n.p;i.a.render(Object(O.jsx)(N,{}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.db99e23c.chunk.js.map