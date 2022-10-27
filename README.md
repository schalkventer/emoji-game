# 🎰 Emoji Game

A super-simple [progressive web app (PWA)](https://en.wikipedia.org/wiki/Progressive_web_app) built with [TypeScript](https://en.wikipedia.org/wiki/TypeScript) and [web components](https://en.wikipedia.org/wiki/Web_Components) by means of [Lit]().


## Getting Started

1. Ensure you have the latest version of [Git](https://git-scm.com/) installed.
2. Clone project via `git clone https://github.com/CodeSpace-Academy/emoji-game.git`
3. Ensure you have the latest LTS (Long-term support) version of [Node.js](https://nodejs.org)
4. Run `npm install` in the root folder.
5. Start development environment with `npm start`

## Tooling

It is recommened that you use [VS Code](https://code.visualstudio.com), with the following plugins for linting and auto-formatting:

- [prettier]([#](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode))
- [eslint]([#](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint))
- [lit-plugin]([#](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin))
- [lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html)

## Architecture

This project is broadly divided into high-level domains:

- Store
- Components

The store [models the domain logic](https://en.wikipedia.org/wiki/Domain_model), whereas the components (by means of [Web Components](https://en.wikipedia.org/wiki/Web_Components)) convert the [global app-state](https://en.wikipedia.org/wiki/State_pattern) supplied by the store, along with any local values passed to the component into a specific [user-facing view](https://en.wikipedia.org/wiki/View_model).

The store effectively functions as a [singleton](https://en.wikipedia.org/wiki/Singleton_pattern), passing down entire global app-state to all relevant components through the top-level `eg-app` component.

Note that all components are [namespaced](https://en.wikipedia.org/wiki/Namespace) with `eg-` (Emoji Game) in order to prevent naming collision with other third-party components. Like-wise, this project makes use of the [Shoelace Component Library](https://shoelace.style/), which is prefixed by `sl`.

## Testing

This project users [Storybook](https://storybook.js.org/) for testing UI-concerns (associated with components) and [Jest](https://jestjs.io/) to test data-modelling (the store).

In order to start Storybook you can run `npm run test:components`. While Jest can be run by means of `npm run test:store`.

In addition to the above, the project also enforces type-checking by means of TypeScript, and strict linting by means of ESLint and Stylelint. These checks can be run on `npm run test:linting` and are automatically run before pushing code to Github.

