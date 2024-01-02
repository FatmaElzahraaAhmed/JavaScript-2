# JavaScript Functions Documentation

Welcome to the JavaScript Functions Repository! This collection includes three meticulously crafted functions for seamless user interactions and string manipulation. Below, you'll find detailed documentation on each function, along with instructions on how to integrate and utilize them.

## 1. `getUserStatus()`

### Overview
This function facilitates the classification of age groups. By clicking the "Get Status" button, you will be prompted to enter your age. The system then categorizes you as a "Child," "Teenager," "Grown up," or "Old." Feel free to input multiple ages until you decide to conclude the process.

### Implementation
```html
<button onclick="getUserStatus()">
    Get Status
</button>
```

## 2. `countVowels()`

### Overview
Clicking the "Count Vowels" button triggers this function, prompting you to input a string. The function diligently counts and displays the occurrences of vowels (a, e, i, o, u) within the provided string. The process gracefully handles cancellations and empty string inputs.

### Implementation
```html
<button onclick="countVowels()">
    Count Vowels
</button>
```

## 3. `convertTo12HourClock()`

### Overview
For time conversion, click the "Convert to 12-hour Clock" button. Enter the hour in the 24-hour format (0-23), and the function elegantly transforms it into the 12-hour clock format. The result is displayed as "12 AM/PM" accordingly.

### Implementation
```html
<button onclick="convertTo12HourClock()">
    Convert to 12 hour Clock
</button>
```

## Integration Guide
1.Embed the JavaScript file in your HTML document:
```html
<script src="scripts/script.js"></script>
```

2.Place the respective buttons in your HTML file.

3.Execute the functions by clicking the corresponding buttons.