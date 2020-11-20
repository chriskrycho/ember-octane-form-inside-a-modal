import Component from "@glimmer/component";
import { localCopy } from "tracked-toolbox";
import { action } from "@ember/object";

export default class FormContents extends Component {
  @localCopy("args.fields.name") name;
  @localCopy("args.fields.age") age;
  @localCopy("args.fields.email") email;

  @action set(key, value) {
    this[key] = value;
    this.args.onChange(this.hasChanged);
  }

  get hasChanged() {
    return (
      this.name !== this.args.fields?.name ||
      this.age !== this.args.fields?.age ||
      this.email !== this.args.fields?.email
    );
  }

  submit = (event) => {
    event.preventDefault();

    let name = event.target.elements.namedItem("name").value;
    let age = event.target.elements.namedItem("age").valueAsNumber;
    let email = event.target.elements.namedItem("email").value;

    this.args
      .onSubmit()
      .then(() => {
        alert(
          `Successfully submitted with name ${name}, age ${age}, and email ${email}`
        );
      })
      .catch(() => {
        alert("user opted not to submit");
      });
  };
}
