# Saga Practice

This project is for the following redux saga practice
-Pulling future actions
-Non-blocking calls
-Running tasks in parallel
-Starting a race between multiple Effects
-Sequencing Sagas using yield\*
-Composing Sagas
-Task cancellation
-redux-saga's fork model
-Common Concurrency Patterns
-Examples of Testing Sagas
-Connecting Sagas to external Input/Output
-Using Channels
-Root Saga Patterns

**Project Name**: `Saga Practice`

**Bundle Id**: `org.sagaPractice` **Package Name**: `com.sagapractice`

[![license](https://img.shields.io/badge/LICENSE-MIT-brightgreen)](https://opensource.org/licenses/mit-license.html) [![react-native](https://img.shields.io/badge/react--native-61.0.4-brightgreen)](https://facebook.github.io/react-native/docs/0.59/getting-started) [![codebeat badge](https://codebeat.co/badges/9797c001-b8c3-4ce3-965d-257f4b77ab62)](https://codebeat.co/a/developer-0209bfcf-9e1a-4b86-a052-d18287f88f7c/projects/github-com-simformsolutions-react-native-boilerplate-latest-master) [![code-style](https://img.shields.io/badge/code%20style-standard%20JS-brightgreen)](https://standardjs.com/)

---

## Project Desctiption

this is a unassigned task for learn and implement redux-saga

## Prerequisites

**iOS** : XCode(10.2) onwards

**Android** : Android Studio(3.4) with gradle(5.1.1) onwards

**Editor** : Visual Studio Code

## How to Setup Project

**Step 1:** Clone this repository.

**Step 2:** Go to the cloned repo and open it in termianl.

**Step 3:** Install the dependencies with `$ npm i`

**Step 4:** Run the npm script to install the cocoapods `$ npm podinstall`

## How to Run the Project

1. Open the project directory in to terminal
2. Run and build for either OS
   - Run iOS app
     ```bash
     npm run ios
     ```
   - Run Android app
     ```bash
     npm run android
     ```
   - Note: This npm scripts will lint your code first. If there are no lint errors, then it will run the ios or android app. Otherwise it will show the lint errors in the terminal.

## Coding Style used

This project adheres to JavaScript Standard for codinng style. To maintain coding standards, utilising features of ES6 and follow best development practices of react-native, this project also uses [ES6](http://es6-features.org/#Constants), some rules of [eslint-airbnb](https://github.com/airbnb/javascript), [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) and [eslint-plugin-react-native](https://github.com/intellicode/eslint-plugin-react-native).

**Do not disable lint inside the code. Try to understand the rule and then follow it into your code. Disabling lint will be considered a violation of coding standards. Exceptions will be allowed by the code-reviewer and team lead after understanding the need to ignore lint.**

1. **To Lint**

   This is implemented using [husky](https://github.com/typicode/husky). So husky will prevent code-cmmits having lint errors. There is no additional setup

## Extra steps for android

- None

## Extra steps for ios

- You will need all the certificates to run the ios project in a real device.

## List of all dependencies used in the project with their usage

List all dependencies from the package.json file along with their usage. This list must be updated every time you change/add any dependecy.

- **Framework:**

  - [React Native](https://github.com/facebook/react-native)

- **State management libraries:**

  - [Redux](http://redux.js.org/), [React Redux](https://react-redux.js.org/), [Redux Persist](https://github.com/rt2zz/redux-persist)

- **API & Middleware libraries:**

  - [API Sauce](https://github.com/infinitered/apisauce), [Redux Sauce](https://github.com/jkeam/reduxsauce), [Redux Saga](https://redux-saga.js.org/)

- **Libraries used for navigation:**
  - [@react-navigation/native](https://github.com/react-navigation/react-navigation), [react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler), [react-native-reanimated](https://github.com/kmagiera/react-native-reanimated),[@react-navigation/drawer](https://reactnavigation.org/docs/drawer-based-navigation/)[@react-navigation/stack](https://reactnavigation.org/docs/hello-react-navigation)
- **Libraries used for forms and validations:**
  - [formik](https://jaredpalmer.com/formik/), [yup](https://github.com/jquense/yup)
- **Libraries used for UI:**
  - [native-base](https://nativebase.io/),[react-native-image-crop-picker](https://github.com/ivpusic/react-native-image-crop-picker)
- **Libraries used for storage:**
  - [async-storage](https://github.com/react-native-community/async-storage)

## Following accounts are used for the mentioned platform

- no account used as of now

## Troubleshoot Notes

- There are no known issues for run or build processes right now.

## Notes

- no notes
