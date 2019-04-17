# Vue-modoro: Pomodoro Timer and Task List

Vue-modoro is a pomodoro app created using [Vuejs](https://vuejs.org) and [Bulma](https://bulma.io).

## How it works
A "pomodoro" consists of a 25-minute focus session followed by a 5-minute break.
After every 4 pomodoros, the break is instead taken for 25 minutes.

This technique is effective for keeping focus on tasks without burning yourself out.
Read about the [Pomodoro Technique here](https://francescocirillo.com/pages/pomodoro-technique).

## Development
This project was created using the Vue CLI and so follows that folder structure.
Most of the timer logic is processed within the Vuex `store.js` file.

## TODO
- Functionality to 'Complete' Tasks
- Track number of Pomodoros completed per Task
- Configure user settings for: Work and breaks time duration

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
## License
Copyright 2019 mccabiles under the MIT License.
