import { helper } from "@ember/component/helper";
import { get } from "@ember/object";

export function pick([key, action]) {
  return (event) => {
    action(get(event, key));
  };
}

export default helper(pick);
