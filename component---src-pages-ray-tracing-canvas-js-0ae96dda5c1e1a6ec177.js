(window.webpackJsonp=window.webpackJsonp||[]).push([[25,27],{IHOa:function(t,e,r){"use strict";r.r(e);var n=r("dI71"),i=r("q1tI"),o=r.n(i),a=function(t){function e(){return t.apply(this,arguments)||this}Object(n.a)(e,t);var r=e.prototype;return r.shouldComponentUpdate=function(){return!1},r.render=function(){var t=this,e=this.props,r=e.width,n=e.height;return o.a.createElement("canvas",{width:r,height:n,ref:function(e){return e?t.props.contextRef(e.getContext("webgl")):null}})},e}(o.a.Component);e.default=a},JX7q:function(t,e,r){"use strict";function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}r.d(e,"a",(function(){return n}))},WgKc:function(t,e){t.exports="#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aVertexTexCoord;\n\nuniform vec2 uResolution;\n\nvarying vec2 vTexCoord;\n\nvoid main() {\n    // convert the rectangle from pixels to 0.0 to 1.0\n   vec2 zeroToOne = aVertexPosition / uResolution;\n\n   // convert from 0->1 to 0->2\n   vec2 zeroToTwo = zeroToOne * 2.0;\n\n   // convert from 0->2 to -1->+1 (clipspace)\n   vec2 clipSpace = zeroToTwo - 1.0;\n\n   gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n\n   // pass the texCoord to the fragment shader\n   // The GPU will interpolate this value between points.\n   vTexCoord = aVertexTexCoord;\n}\n"},fhHA:function(t,e,r){"use strict";r.r(e);var n=r("JX7q"),i=r("dI71"),o=r("q1tI"),a=r.n(o),c=r("IHOa"),u=r("WgKc"),s=r.n(u),h=r("nupR"),l=r.n(h),f=function(){function t(t,e,r){this.e=[t,e,r]}var e=t.prototype;return e.x=function(){return this.e[0]},e.y=function(){return this.e[1]},e.z=function(){return this.e[2]},e.r=function(){return this.e[0]},e.g=function(){return this.e[1]},e.b=function(){return this.e[2]},e.identical=function(){return new t(this.e[0],this.e[1],this.e[2])},e.opposite=function(){return new t(-this.e[0],-this.e[1],-this.e[2])},e.addVector=function(t){var e=this.identical();return e.e[0]+=t.e[0],e.e[1]+=t.e[1],e.e[2]+=t.e[2],e},e.subtractVector=function(t){var e=this.identical();return e.e[0]-=t.e[0],e.e[1]-=t.e[1],e.e[2]-=t.e[2],e},e.multiplyVector=function(t){var e=this.identical();return e.e[0]*=t.e[0],e.e[1]*=t.e[1],e.e[2]*=t.e[2],e},e.multiplyScalar=function(t){var e=this.identical();return e.e[0]*=t,e.e[1]*=t,e.e[2]*=t,e},e.divideScaler=function(t){var e=this.identical(),r=1/t;return e.e[0]*=r,e.e[1]*=r,e.e[2]*=r,e},e.length=function(){return Math.sqrt(this.e[0]*this.e[0]+this.e[1]*this.e[1]+this.e[2]*this.e[2])},e.squaredLength=function(){return this.e[0]*this.e[0]+this.e[1]*this.e[1]+this.e[2]*this.e[2]},e.makeUnitVector=function(){var t=1/Math.sqrt(this.e[0]*this.e[0]+this.e[1]*this.e[1]+this.e[2]*this.e[2]),e=this.identical();return e.e[0]*=t,e.e[1]*=t,e.e[2]*=t,e},t}();function d(t,e){return t.e[0]*e.e[0]+t.e[1]*e.e[1]+t.e[2]*e.e[2]}function v(t){return t.identical().divideScaler(t.length())}var p=function(t,e,r){return new f(t,e,r)},m=function(){};function T(t,e,r,n){var i=t.center,o=t.radius,a=t.material,c=e.pointAtParameter(r);n.t=r,n.p=c,n.normal=c.subtractVector(i).divideScaler(o),n.material=a}var R=function(t){function e(e,r,n){var i;return(i=t.call(this)||this).center=e,i.radius=r,i.material=n,i}return Object(i.a)(e,t),e.prototype.hit=function(t,e,r,n){var i=t.origin().subtractVector(this.center),o=d(t.direction(),t.direction()),a=d(i,t.direction()),c=a*a-o*(d(i,i)-this.radius*this.radius);if(c>0){var u=(-a-Math.sqrt(c))/o;if(u<r&&u>e)return T(this,t,u,n),!0;var s=(-a+Math.sqrt(c))/o;if(s<r&&s>e)return T(this,t,s,n),!0}return!1},e}(m),A=function(t,e,r){return new R(t,e,r)},g=function(t){function e(e,r){var n;return(n=t.call(this)||this).list=e,n.listSize=r,n}return Object(i.a)(e,t),e.prototype.hit=function(t,e,r,n){for(var i={material:n.material},o=!1,a=r,c=0;c<this.listSize;c++){this.list[c].hit(t,e,a,i)&&(o=!0,a=i.t,n=i)}return{hitAnything:o,closestSoFar:a,hitRecord:n}},e}(m),b=function(){function t(t,e){this.A=t,this.B=e}var e=t.prototype;return e.origin=function(){return this.A},e.direction=function(){return this.B},e.pointAtParameter=function(t){return this.A.addVector(this.B.multiplyScalar(t))},t}(),E=function(t,e){return new b(t,e)},x=function(){function t(){this.lowerLeftCorner=p(-2,-1,-1),this.horizontal=p(4,0,0),this.vertical=p(0,2,0),this.origin=p(0,0,0)}return t.prototype.getRay=function(t,e){return E(this.origin,this.lowerLeftCorner.addVector(this.horizontal.multiplyScalar(t)).addVector(this.vertical.multiplyScalar(e)).subtractVector(this.origin))},t}(),S=function(){},w=function(t){function e(e){var r;return(r=t.call(this)||this).albedo=e,r}return Object(i.a)(e,t),e.prototype.scatter=function(t,e){var r=e.p,n=e.normal,i=r.addVector(n).addVector(C());return{isScatter:!0,scattered:E(r,i.subtractVector(r)),attenuation:this.albedo}},e}(S),y=function(t){function e(e,r){var n;return(n=t.call(this)||this).albedo=e,n.fuzz=r<1?r:1,n}return Object(i.a)(e,t),e.prototype.scatter=function(t,e){var r,n,i=e.p,o=e.normal,a=(r=v(t.direction()),n=o,r.subtractVector(n.multiplyScalar(2*d(r,n)))),c=E(i,a.addVector(C().multiplyScalar(this.fuzz))),u=this.albedo;return{isScatter:d(c.direction(),o)>0,scattered:c,attenuation:u}},e}(S),_=function(t){return new w(t)},L=function(t,e){return new y(t,e)};function C(){var t=p();do{t=p(Math.random(),Math.random(),Math.random()).subtractVector(p(1,1,1))}while(t.squaredLength()>=1);return t}function U(t,e,r){var n=e.hit(t,0,1/0,{}),i=n.hitAnything,o=n.hitRecord;if(i){var a=o.material.scatter(t,o),c=a.isScatter,u=a.scattered,s=a.attenuation;return r<50&&c?s.multiplyVector(U(u,e,r+1)):p(0,0,0)}var h=.5*(v(t.direction()).y()+1);return p(1,1,1).multiplyScalar(1-h).addVector(p(.5,.7,1).multiplyScalar(h))}function V(t,e,r){void 0===r&&(r=100);for(var n=[],i=[A(p(0,0,-1),.5,_(p(.8,.3,.3))),A(p(0,-100.5,-1),100,_(p(.8,.8,0))),A(p(1,0,-1),.5,L(p(.8,.6,.2),1)),A(p(-1,0,-1),.5,L(p(.8,.8,.8),.3))],o=new g(i,i.length),a=new x,c=e-1;c>=0;c--)for(var u=0;u<t;u++){for(var s=p(0,0,0),h=0;h<r;h++){var l=(u+Math.random())/t,f=(c+Math.random())/e,d=a.getRay(l,f);s=s.addVector(U(d,o,0))}s=s.divideScaler(r);var v=255.99*Math.sqrt(s.e[0]),m=255.99*Math.sqrt(s.e[1]),T=255.99*Math.sqrt(s.e[2]);n.push(v),n.push(m),n.push(T),n.push(255)}return n}function P(t,e,r){var n=t.createShader(e);return t.shaderSource(n,r),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)?n:(alert("An error occurred compiling the shaders: "+t.getShaderInfoLog(n)),t.deleteShader(n),null)}var F=[0,0,1,0,0,1,0,1,1,0,1,1];function I(t){if(t){var e=function(t,e,r){var n=P(t,t.VERTEX_SHADER,e),i=P(t,t.FRAGMENT_SHADER,r),o=t.createProgram();return t.attachShader(o,n),t.attachShader(o,i),t.linkProgram(o),t.getProgramParameter(o,t.LINK_STATUS)?o:(alert("Unable to initialize the shader program: "+t.getProgramInfoLog(o)),null)}(t,s.a,l.a),r={program:e,attribLocations:{vertexPosition:t.getAttribLocation(e,"aVertexPosition"),texCoordLocation:t.getAttribLocation(e,"aVertexTexCoord")},uniformLocations:{resolutionUniformLocation:t.getUniformLocation(e,"uResolution")}},n=function(t){var e=t.canvas,r=e.width,n=e.height,i=function(t,e,r,n){var i=t+r,o=e+n;return[t,e,i,e,t,o,t,o,i,e,i,o]}(0,0,r,n),o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW);var a=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,new Float32Array(F),t.STATIC_DRAW);var c=new Uint8Array(V(r,n)),u=t.createTexture();return t.bindTexture(t.TEXTURE_2D,u),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,r,n,0,t.RGBA,t.UNSIGNED_BYTE,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),{position:o,texCoord:a}}(t);!function(t,e,r){var n=t.canvas,i=n.width,o=n.height;t.viewport(0,0,i,o),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),t.useProgram(e.program);var a=e.attribLocations.vertexPosition,c=t.FLOAT;t.bindBuffer(t.ARRAY_BUFFER,r.position),t.vertexAttribPointer(a,2,c,!1,0,0),t.enableVertexAttribArray(a);var u=e.attribLocations.texCoordLocation,s=t.FLOAT;t.bindBuffer(t.ARRAY_BUFFER,r.texCoord),t.vertexAttribPointer(u,2,s,!1,0,0),t.enableVertexAttribArray(u),t.uniform2f(e.uniformLocations.resolutionUniformLocation,i,o);var h=t.TRIANGLES;t.drawArrays(h,0,6)}(t,r,n)}else alert("Unable to initialize WebGL. Your browser or machine may not support it.")}var B=function(t){function e(e){var r;return(r=t.call(this,e)||this).saveContext=r.saveContext.bind(Object(n.a)(r)),r.width=500,r.height=500,r}Object(i.a)(e,t);var r=e.prototype;return r.saveContext=function(t){this.gl=t},r.componentDidUpdate=function(){I(this.gl)},r.render=function(){return a.a.createElement(c.default,{contextRef:this.saveContext,width:"400",height:"200"})},e}(a.a.Component);e.default=B},nupR:function(t,e){t.exports="precision mediump float;\n#define GLSLIFY 1\n\n// our texture\nuniform sampler2D tex;\n\n// the texCoords passed in from the vertex shader.\nvarying vec2 vTexCoord;\n\nvoid main() {\n   gl_FragColor = texture2D(tex, vTexCoord);\n}\n"}}]);
//# sourceMappingURL=component---src-pages-ray-tracing-canvas-js-0ae96dda5c1e1a6ec177.js.map