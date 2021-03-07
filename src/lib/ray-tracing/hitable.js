import { dot, reflect, unitVector } from "./vec3"
import ray from "./ray"
import { randomInUnitSphere } from "./helpers"

/*
const hitRecord = {
  t,
  p,
  normal,
  material,
};
*/
export class Hitable {
  hit(ray, tMin, tMax, hitRecord) {}
}

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
  constructor(a) {
    super()
    this.albedo = a
  }
  scatter(rayIn, hitRecord) {
    const { p, normal } = hitRecord
    const reflected = reflect(unitVector(rayIn.direction()), normal)
    const scattered = ray(p, reflected)
    const attenuation = this.albedo
    return {
      isScatter: dot(scattered.direction(), normal) > 0,
      scattered,
      attenuation,
    }
  }
}

export const lambertian = a => new Lambertian(a)
export const metal = a => new Metal(a)
