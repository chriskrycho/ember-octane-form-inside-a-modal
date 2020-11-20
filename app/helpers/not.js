import { helper } from "@ember/component/helper";

export function not([value]) {
  return !value;
}

export default helper(not);
