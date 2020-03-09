/**
 * v(e) = e
 */
class vec3 {
  constructor(e0, e1, e2) {
    this.e = [e0, e1, e2]
  }
  // vec3() {
  //   e[0] = e0;
  //   e[1] = e1;
  //   e[2] = e2;
  // }
  x() {
    return this.e[0]
  }
  y() {
    return this.e[1]
  }
  z() {
    return this.e[2]
  }
  r() {
    return this.e[0]
  }
  g() {
    return this.e[1]
  }
  b() {
    return this.e[2]
  }

  identical() {
    return this
  }
  opposite() {
    return new vec3(-this.e[0], -this.e[1], -this.e[2])
  }
  // operator[](i){
  //   return this.e[i]
  // }
  // operator[](i){
  //   return this.e[i]
  // }

  addVector(v) {
    this.e[0] += v.e[0]
    this.e[1] += v.e[1]
    this.e[2] += v.e[2]
    return this
  }
  subtractVector(v) {
    this.e[0] -= v.e[0]
    this.e[1] -= v.e[1]
    this.e[2] -= v.e[2]
    return this
  }
  multiplyVector(v) {
    this.e[0] *= v.e[0]
    this.e[1] *= v.e[1]
    this.e[2] *= v.e[2]
    return this
  }
  // divideVector(v) {
  //   this.e[0] /= v.e[0]
  //   this.e[1] /= v.e[1]
  //   this.e[2] /= v.e[2]
  //   return this
  // }

  multiplyScalar(t) {
    this.e[0] *= t
    this.e[1] *= t
    this.e[2] *= t
    return this
  }
  divideScaler(t) {
    const k = 1 / t
    this.e[0] *= k
    this.e[1] *= k
    this.e[2] *= k
    return this
  }

  length() {
    return Math.sqrt(
      this.e[0] * this.e[0] + this.e[1] * this.e[1] + this.e[2] * this.e[2]
    )
  }
  squaredLength() {
    return this.e[0] * this.e[0] + this.e[1] * this.e[1] + this.e[2] * this.e[2]
  }
  makeUnitVector() {
    const k =
      1 /
      Math.sqrt(
        this.e[0] * this.e[0] + this.e[1] * this.e[1] + this.e[2] * this.e[2]
      )
    this.e[0] *= k
    this.e[1] *= k
    this.e[2] *= k
    return this
  }
}

// operator>>(is, vec3){
//   console.log(this.e[0],this.e[1],this.e[2])
//   return is
// }
// operator<<(os, vec3){
//   console.log(this.e[0],this.e[1],this.e[2])
//   return os
// }

// function makeUnitVector() {
//   const k =
//     1 /
//     Math.sqrt(
//       this.e[0] * this.e[0] + this.e[1] * this.e[1] + this.e[2] * this.e[2]
//     )
//   this.e[0] *= k
//   this.e[1] *= k
//   this.e[2] *= k
// }

// operactor+(v1,v2){
//   return vec3(v1.e[0]+v2.e[0], v1.e[1]+v2.e[1], v1.e[2]+v2.e[2])
// }

// operator-(v1,v2){
//   return vec3(v1.e[0]-v2.e[0], v1.e[1]-v2.e[1], v1.e[2]-v2.e[2])
// }

// operator*(v1,v2){
//   return vec3(v1.e[0]*v2.e[0], v1.e[1]*v2.e[1], v1.e[2]*v2.e[2])
// }

// operator/(v1,v2){
//   return vec3(v1.e[0]/v2.e[0], v1.e[1]/v2.e[1], v1.e[2]/v2.e[2])
// }

// operator*(t, v){
//   return vec3(t*v.e[0], t*v.e[1], t*v.e[2])
// }

// operator/(v, t){
//   return vec3(v.e[0]/t, v.e[1]/t, v.e[2]/t)
// }

// operator*(v, t){
//   return vec3(t*v.e[0], t*v.e[1], t*v.e[2])
// }

export function dot(v1, v2) {
  return v1.e[0] * v2.e[0] + v1.e[1] * v2.e[1] + v1.e[2] * v2.e[2]
}

export function cross(v1, v2) {
  return new vec3(
    v1.e[1] * v2.e[2] - v1.e[2] * v2.e[1],
    -(v1.e[0] * v2.e[2] - v1.e[2] * v2.e[0]),
    v1.e[0] * v2.e[1] - v1.e[1] * v2.e[0]
  )
}

// operator+=(v){
//   e[0] += v.e[0]
//   e[1] += v.e[1]
//   e[2] += v.e[2]
//   return this
// }
// operator*=(v){
//   e[0] *= v.e[0]
//   e[1] *= v.e[1]
//   e[2] *= v.e[2]
//   return this
// }
// operator/=(v){
//   e[0] /= v.e[0]
//   e[1] /= v.e[1]
//   e[2] /= v.e[2]
//   return this
// }
// operator-=(v){
//   e[0] -= v.e[0]
//   e[1] -= v.e[1]
//   e[2] -= v.e[2]
//   return this
// }

// operator*=(t){
//   e[0] *= t
//   e[1] *= t
//   e[2] *= t
//   return this
// }
// operator/=(t){
//   k = 1/t
//   e[0] *= k
//   e[1] *= k
//   e[2] *= k
//   return this
// }

export function unitVector(v) {
  return v.divideScaler(v.length())
}

export default function(x, y, z) {
  return new vec3(x, y, z)
}
