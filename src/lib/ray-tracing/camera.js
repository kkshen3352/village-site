import vec3 from "./vec3"
import ray from "./ray"

class Camara {
  constructor() {
    this.lowerLeftCorner = vec3(-2.0, -1.0, -1.0)
    this.horizontal = vec3(4.0, 0.0, 0.0)
    this.vertical = vec3(0.0, 2.0, 0.0)
    this.origin = vec3(0.0, 0.0, 0.0)
  }
  getRay(u, v) {
    return ray(
      this.origin,
      this.lowerLeftCorner
        .addVector(this.horizontal.multiplyScalar(u))
        .addVector(this.vertical.multiplyScalar(v))
        .subtractVector(this.origin)
    )
  }
}

export default function() {
  return new Camara()
}
