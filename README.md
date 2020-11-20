# Ember Octane Form Inside a Modal

A relatively common pattern in rich web apps: putting a form inside a modal, and
needing into manage.

This repo shows one pattern for managing this in an idiomatic way in Ember
Octane, with clear ownership of state and responsibilities throughout.

- The top-level `FormOwner` is responsible for managing the state of the modal
  and the form within it. It exposes a hook that allows the form to inform it of
  changes, while not exposing any *other* information from the form, and
  remaining driven by user actions -- changing values in the form, closing the
  form, submitting the form, etc.

- The modal is ignorant of everything about its context. It just opens and
  closes and shows its content on demand.

- The form itself is ignorant of its context, other than that it calls the
  `onChange` argument when any of its values have changed with whether they
  differ from their original values.

In this case I show the data being passed in and use the `@localCopy` decorator
for keeping the local values in sync with those arguments, but you could equally
well use data fetch locally in the component, e.g. with [a tool for managing
async data][load] and a getter that is smart enough to do the right thing with
the async data's state.

[load]: https://v5.chriskrycho.com/journal/migrating-off-of-promiseproxymixin-in-ember-octane/

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-octane-form-inside-a-modal`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
