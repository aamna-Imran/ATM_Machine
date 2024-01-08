import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "please enter your ID :",
    },
    {
        type: "number",
        name: "userPIN",
        message: "please enter your PIN :",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["current", "saving"],
        message: "please select your Account Type :",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["fast Cash", "withdraw"],
        message: "please select your Transaction Type :",
    },
    {
        type: "list",
        name: "fastCash",
        choices: [500, 1000, 10000, 30000],
        message: "please select your Fast cash Amount :",
        when(answers) {
            return answers.transactionType == "fast Cash";
        },
    },
    {
        type: "input",
        name: "withdraw",
        message: "please enter your withdraw Account :",
        when(answers) {
            return answers.transactionType == "withdraw";
        },
    },
]);
if (answers.userId && answers.userPIN) {
    const balance = Math.floor(Math.random() * 10000);
    const enteredamount = answers.withdraw;
    if (balance >= enteredamount) {
        const remaining = balance - enteredamount;
        console.log("   Remaining Amount" + remaining);
    }
    else {
        console.log("Insufficient Balnce");
    }
}
else {
    console.log("Invalid user");
}
