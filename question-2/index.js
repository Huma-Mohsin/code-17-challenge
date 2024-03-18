// //Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
// Explain & TIP: Template literals support multiline strings, making it easier to create readable text blocks that incorporate variables and expressions.
//Solution
//Template literals, introduced in ECMAScript 6 (ES6), are a feature of JavaScript that allow for more flexible and readable formatting of strings.string is enclosed in between``.
import chalk from "chalk";
console.log(chalk.bold.blueBright("My ideal day includes:-"));
const ideal_day = `* Wake up early morning to acheive targeted task .
* The morning of day is to dedicated to deep work on a challenging programming task or project.
* Take a break.
* Doing home chores.
* Read  articles, watching tutorials.
* Attending live coding sessions.
etc `;
//log ideal day.
console.log(chalk.greenBright(ideal_day));
//Author : HUMA MOHSIN
