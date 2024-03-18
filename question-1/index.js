// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
// Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array, providing a way to handle multiple inputs gracefully.
//Solution.
//A rest parameter allows you to represent an indefinite number of arguments as an array in a function. we can use the rest parameter syntax by prefixing a parameter with three dots (...)
import chalk from "chalk";
function hobbies_of_developer(...hobbies) {
    console.log("\n");
    console.log(chalk.blueBright("Following are some hobbies that developer might enjoy:-"));
    hobbies.forEach((element) => {
        ;
        console.log(chalk.green(element), `,developer might enjoy that hobby`);
    });
}
//calling a function.
hobbies_of_developer("Bloging", "Gaming", "Outdoor activities", "Music", "Travelling", "Fitness"); //here we can pass multiple values to a funcction.
