import { dot } from "./vec3"
import hitable from "./hitable"

function recordHit(sphere, ray, t, record) {
  const { center, radius } = sphere
  const p = ray.pointAtParameter(t)
  record.t = t
  record.p = p
  record.normal = p.subtractVector(center).divideScaler(radius)
}

class sphere extends hitable {
  constructor(c, r) {
    super()
    this.center = c
    this.radius = r
  }
  hit(ray, tMin, tMax, hitRecord) {
    const oc = ray.origin().subtractVector(this.center)
    const a = dot(ray.direction(), ray.direction())
    const b = dot(oc, ray.direction())
    const c = dot(oc, oc) - this.radius * this.radius
    const discriminant = b * b - a * c
    if (discriminant > 0) {
      const t1 = (-b - Math.sqrt(discriminant)) / a
      if (t1 < tMax && t1 > tMin) {
        recordHit(this, ray, t1, hitRecord)
        return true
      }
      const t2 = (-b + Math.sqrt(discriminant)) / a
      if (t2 < tMax && t2 > tMin) {
        recordHit(this, ray, t2, hitRecord)
        return true
      }
    }
    return false
  }
}

export default function(center, radius) {
  return new sphere(center, radius)
}
