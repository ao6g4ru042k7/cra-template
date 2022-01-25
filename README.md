# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

# Create React App Template

## Build Template Pre-Commit

> The creation steps started by template, this template has been processed

setup [cz-cli](https://github.com/commitizen/cz-cli)

```
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

```
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

setup [husky](https://typicode.github.io/husky)

```
npx husky-init && npm install
```

```
npx husky add .husky/prepare-commit-msg "exec < /dev/tty && npx cz --hook || true"
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
npx husky add .husky/pre-commit "npx lint-staged"
```

setup lint-stage

```
add to package.json
{
    ...
    "lint-staged": {
        "**/*.ts?(x)": "bash -c tsc -p tsconfig.json --noEmit",
        "**/*.{js,jsx,ts,tsx}": "eslint --fix",
        "**/*.{js,jsx,ts,tsx,md,html,css}": "prettier --write"
    }
}
```

---

## CSS Framework

#### Tailwind

For full documentation, visit [tailwindcss.com](https://tailwindcss.com/).

#### Ant Design

For full documentation, visit [ant.design](https://ant.design/).

---

## File Structure

```
src
 ┣ 📂apis // all apis
 ┣ 📂assets // image that will be encrypted
 ┃ ┗ 📜logo.svg
 ┣ 📂components // components shared within 📂views
 ┃ ┗ 📂Example
 ┣ 📂constants // shared constant
 ┣ 📂hooks // shared hook
 ┣ 📂layout // the outermost layout component
 ┃ ┣ 📂Footer
 ┃ ┣ 📂Header
 ┃ ┗ 📂Menu
 ┣ 📂locales // i18n
 ┣ 📂logics // store business logic
 ┣ 📂router
 ┣ 📂store
 ┣ 📂styles
 ┣ 📂utils
 ┣ 📂views
 ┃ ┣ 📂Page1
 ┃ ┣ 📂Page2
 ┃ ┗ 📂Page3
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts // global typescript types
 ┗ 📜setupTests.ts
```

#### Common Styles Structure

Refer to the structure of sass [7-1-pattern](https://sass-guidelin.es/#the-7-1-pattern).

```
📂styles
 ┣ 📂abstracts
 ┃ ┣ 📜_functions.scss
 ┃ ┣ 📜_mixins.scss
 ┃ ┣ 📜_placeholders.scss
 ┃ ┗ 📜_variables.scss
 ┣ 📂base
 ┃ ┣ 📜_reset.scss
 ┃ ┗ 📜_typography.scss
 ┣ 📂components
 ┃ ┗ 📜_buttons.scss
 ┣ 📂Layout
 ┃ ┗ 📜_navigation.scss
 ┣ 📂pages
 ┃ ┗ 📜_home.scss
 ┣ 📂themes
 ┃ ┣ 📜_admin.scss
 ┃ ┗ 📜_theme.scss
 ┣ 📂vendors
 ┃ ┣ 📜_antd.scss
 ┃ ┗ 📜_tailwind.scss
 ┗ 📜main.scss
```

#### Component Structure

The first letter of a folder of react component must be capitalized.(ex: 📂ExampleComponent)
If the components in the component have shared components, put them under the 📂components(ex: 📂Title is a common component of 📂Box and 📂Content)

```
📂ExampleComponent
 ┣ 📂Box
 ┃ ┣ 📜index.module.less
 ┃ ┗ 📜index.tsx
 ┣ 📂Content
 ┃ ┣ 📜index.module.less
 ┃ ┗ 📜index.tsx
 ┣ 📂components
 ┃ ┗ 📂Title
 ┃ ┃ ┣ 📜index.module.less
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂data
 ┃ ┗ 📜column.ts
 ┣ 📂hooks
 ┃ ┗ 📜useCustom.ts
 ┣ 📜dataSlice.ts //Global Variables in Component
 ┣ 📜index.module.less
 ┣ 📜index.test.tsx
 ┗ 📜index.tsx
```

---

## Coding Style

##### Typing Component Props

❌

```
interface Props { title: string; }
const Example:React.FC<Props> = ({ title }) => <div>{title}</div>;
```

✅

```
interface Props { title: string; }
const Example = ({ title }: Props) => <div>{title}</div>;
```

##### Props Deconstruct

❌

```
interface Props { title: string; }
const Example = ({ title }: Props) => <div>{title}</div>;
```

✅

```
interface Props { title: string; }
const Example = (props: Props) => <div>{props.title}</div>;
```
