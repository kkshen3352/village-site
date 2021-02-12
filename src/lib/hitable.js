import vec3, { dot } from "./vec3"
import ray from "./ray"

/*
const hitRecord = {
  t,
  p,
  normal,
};
*/
class hitable {
  hit(ray, tMin, tMax, hitRecord) {}
}

export default hitable
