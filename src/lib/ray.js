import vec3 from "./vec3"

/**
 * p(t) = ​ A ​ + t* B
 */
class ray {
  constructor(A, B) {
    this.A = A
    this.B = B
  }
  origin() {
    return this.A
  }
  direction() {
    return this.B
  }
  pointAtParameter(t) {
    return this.A.addVector(this.B.multiplyScalar(t))
  }
}

export default function(A, B) {
  return new ray(A, B)
}
