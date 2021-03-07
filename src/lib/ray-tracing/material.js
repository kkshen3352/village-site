import { dot, reflect, unitVector } from "./vec3"
import ray from "./ray"
import { randomInUnitSphere } from "./helpers"

class Material {}

class Lambertian extends Material {
  constructor(a) {
    super()
    this.albedo = a
  }
  scatter(rayIn, hitRecord) {
    const { p, normal } = hitRecord
    const target = p.addVector(normal).addVector(randomInUnitSphere())
    const scattered = ray(p, target.subtractVector(p))
    const attenuation = this.albedo
    return {
      isScatter: true,
      scattered,
      attenuation,
    }
  }
}

class Metal extends Material {
  constructor(a, f) {
    super()
    this.albedo = a
    this.fuzz = f < 1 ? f : 1
  }
  scatter(rayIn, hitRecord) {
    const { p, normal } = hitRecord
    const reflected = reflect(unitVector(rayIn.direction()), normal)
    const scattered = ray(p, reflected.addVector(randomInUnitSphere().multiplyScalar(this.fuzz)))
    const attenuation = this.albedo
    return {
      isScatter: dot(scattered.direction(), normal) > 0,
      scattered,
      attenuation,
    }
  }
}

export const lambertian = a => new Lambertian(a)
export const metal = (a, f) => new Metal(a, f)
