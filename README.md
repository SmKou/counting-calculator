# Counting Calculator
By Stella Marie

A calculator web app for counting by increments.

## Technologies Used
- React
- Redux Toolkit
- CSS

## Description

The counting calculator is based off of the tutorial from [Redux Toolkit Quick Start Guide](https://redux-toolkit.js.org/tutorials/quick-start), which demonstrates setting up a counter react app with redux toolkit. While Redux Toolkit offers a template project for seeing how the various parts of redux, such as slices, reducers, actions, and thunks, work, this project was developed from following along with the tutorial, and then diverged to include number keys and modification of the count and difference.

## Installation

If you would like to install the Redux Toolkit template project, use the package manager to create a react app with the redux template.

```bash
npx create-react-app app-name --template redux
```

## Usage

When you first open the web app, the count will be 0 and the difference will be 1. Pressing + and - will increment and decrement the count by the difference, but the count will stop at 0, meaning no negative integers.

### Changing the Count
Click on the count display, then either press the number keys or use the + and - keys. Unless the count is 0, numbers will be appended, incremented or decremented by the difference. Press **Reset Count** to set the count to 0. Press **Previous Count** to undo changes made.

### Changing the Difference
Click on the difference display, then either press the number keys or use the + and - keys. Since the difference defaults to 1, the **Zero Difference** button was added specifically to set the difference to 0, allowing the first digit to be set instead of being 1. However, incrementing and decrementing can also be used in adjusting the default difference to another single digit to start with.

## Known Bugs

- Zero Difference button text cut off by button height
- Button group for previous, reset and zero are not evenly spaced
- No indicator for selected display

## License

[MIT](https://choosealicense.com/licenses/mit/)
