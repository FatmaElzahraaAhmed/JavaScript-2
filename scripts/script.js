function getUserStatus() {

    while (true) {

        let userInput = prompt("Enter your age:");

        if (userInput === null || isNaN(userInput)) {
            alert("Invalid input. Please enter a valid age.");
            continue;
        }

        let age = parseInt(userInput);

        if (age <= 0) {
            alert("Invalid input. Please enter a positive number for age.");
            continue;
        }

        let status;
        if (age >= 1 && age <= 10) {
            status = "Child";
        } else if (age >= 11 && age <= 18) {
            status = "Teenager";
        } else if (age >= 19 && age <= 50) {
            status = "Grown up";
        } else {
            status = "Old";
        }

        alert("Your status: " + status);

        let anotherAge = confirm("Do you want to enter another age?");
        
        if (!anotherAge) {
            break;
        }
    }
}


function countVowels() {

    let userString = prompt("Enter a string:");

    if (userString === null) {
        alert("Operation canceled.");
        return;
    }

    if (userString.length > 0) {
        let lowercaseString = userString.toLowerCase();
    
        let vowelCount = 0;
        for (let char of lowercaseString) {
            if (char === 'a' || char === 'e' || char === 'o' || char === 'u' || char === 'i') {
                vowelCount++;
            }
        }
    
        alert("Number of vowels in the string: " + vowelCount);

    } else{
        alert("Please Enter a String");
        countVowels();
    }

}

function convertTo12HourClock() {

    let userInput = prompt("Enter the hour (0-23):");

    if (userInput === null) {
        alert("Operation canceled.");
        return;
    }

    let hour = parseInt(userInput);

    if (isNaN(hour) || hour < 0 || hour > 23) {
        alert("Invalid input. Please enter a valid hour (0-23).");
        convertTo12HourClock();
    }

    let result;

    if (hour === 0) {
        result = "12 AM";
    } else if (hour === 12) {
        result = "12 PM";
    } else if (hour < 12) {
        result = hour + " AM";
    } else {
        result = (hour - 12) + " PM";
    }

    alert("Converted time: " + result);
}



