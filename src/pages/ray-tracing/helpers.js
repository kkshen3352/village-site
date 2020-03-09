import ray from "../../lib/ray"
import vec3, { unitVector, dot, cross } from "../../lib/vec3"
import sphere from "../../lib/sphere"
import hitableList from "../../lib/hitableList"

export function setRectangle(x, y, width, height) {
  const x1 = x
  const x2 = x + width
  const y1 = y
  const y2 = y + height
  return [x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]
}

function hitSphere(center, radius, ray) {
  const oc = ray.origin().subtractVector(center)
  const a = dot(ray.direction(), ray.direction())
  const b = 2.0 * dot(oc, ray.direction())
  const c = dot(oc, oc) - radius * radius
  const discriminant = b * b - 4 * a * c
  if (discriminant < 0) {
    return -1.0
  } else {
    console.log("hit", ray)
    return (-b - Math.sqrt(discriminant)) / (2.0 * a)
  }
}

function color(ray) {
  let t = hitSphere(vec3(0, 0, -1), 0.5, ray)
  let color
  if (t > 0.0) {
    const n = unitVector(ray.pointAtParameter(t).subtractVector(vec3(0, 0, -1)))
    color = vec3(n.x() + 1, n.y() + 1, n.z() + 1).multiplyScalar(0.5)
    console.log(color)
  } else {
    const unitDirection = unitVector(ray.direction())
    const k = 0.5 * (unitDirection.y() + 1.0)
    color = vec3(1.0, 1.0, 1.0)
      .multiplyScalar(1.0 - k)
      .addVector(vec3(0.5, 0.7, 1.0).multiplyScalar(k))
  }
  return color
}

export function getImage(width, height) {
  const image = []
  for (let j = height - 1; j >= 0; j--) {
    for (let i = 0; i < width; i++) {
      const lowerLeftCorner = vec3(-2.0, -1.0, -1.0)
      const horizontal = vec3(4.0, 0.0, 0.0)
      const vertical = vec3(0.0, 2.0, 0.0)
      const origin = vec3(0.0, 0.0, 0.0)
      const u = i / width
      const v = j / height
      const r = ray(
        origin,
        lowerLeftCorner
          .addVector(horizontal.multiplyScalar(u))
          .addVector(vertical.multiplyScalar(v))
      )
      const col = color(r)
      const ir = 255 * col.e[0]
      const ig = 255 * col.e[1]
      const ib = 255 * col.e[2]
      image.push(ir)
      image.push(ig)
      image.push(ib)
      image.push(255)
    }
  }
  return image
}

