import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class EventCreationFormComponent extends Component {
  @tracked dialog = null;
  @tracked showModal = false;
  @tracked requiresConfirmationCheck = false;

  @action didChange(valueDiverged) {
    this.requiresConfirmationCheck = valueDiverged;
  }

  @action close() {
    let promise = this.requiresConfirmationCheck
      ? new Promise((resolve, reject) => {
          this.dialog = { resolve, reject };
        }).finally(() => {
          this.dialog = null;
        })
      : Promise.resolve();

    return promise.then(() => {
      this.showModal = false;
      this.requiresConfirmationCheck = false;
    });
  }
}
