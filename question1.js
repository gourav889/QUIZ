const questions = {
    C: [
        {
            question: "Which is valid C expression?",
            options: ["int my_num = 100,000",
                "int my_num = 100000", 
                "int my num = 1000", 
                "int $my_num = 10000"],
            answer: "int my_num = 100000"
        },
        {
            question: "For Double Type Value in C, Which of the following is the Correct Format Specifier?",
            options: ["%d", "%f", "%If", "%LF"],
            answer: "%If"
        },
        {
            question: "The Short Type Represents Which of the Following?",
            options: ["int", "float", "short int", "unsigned int"],
            answer: "unsigned int"
        },
        {
            question:"Which of the following Operators is Used to Find the Remainder of 2 Numbers in C?",
            options: ["/", "#", "%", "//"],
            answer: "%"
        },
        {
            question:"Which Amongst the Following is a True Value in C Programming?",
            options:["1", "includehelp","!NULL","All of these"],
            answer:"All of these"
        },
        {
            question:" In C Programming, the Ternary Operator is:",
            options:["if-else-if", "?:", "?;?", "None of these"],
            answer:"?:"
        },
        {
            question:"Which Statement is Needed for Executing a Block of Code When the Condition is False?",
            options:["for","if","else","All of these"],
            answer:"else"
        },
    ],
    React: [
        {
            question: "Which of the following is the correct name of React.js?",
            options: ["React", "React.js ", "ReactJS", "All of the above"],
            answer: "All of the above"
        },
        {
            question: " What of the following is used in React.js to increase performance?",
            options: ["Original DOM", "Virtual DOM", "Both Original and Virtual DOM", "None of the above"],
            answer: "Virtual DOM"
        },
        {
            question: "A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
            options: ["Constructor", "Class", "Object", "Dataobject"],
            answer: "Class"
        },
        {
            question:"Which of the following keyword is used to create a class inheritance?",
            options: ["Create", "Inherits", "Extends", "This"],
            answer: "Extends"
        },
        {
            question:" How many numbers of elements a valid react component can return?",
            options: ["1", "2", "4", "5"],
            answer: "1"
        },
        {
            question:"What is the declarative way to render a dynamic list of components based on values in an array?",
            options: ["Using the reduce array method", "Using the <Each /> component", "Using the Array.map() method", "With a for/while loop"],
            answer: "Using the Array.map() method"
        },
        {
            question:"How many ways of defining your variables in ES6?",
            options: ["1", "3", "4", "5"],
            answer: "3"
        },
    ],
    Javascript: [
        {
            question:"Which of the following is not a Java features?",
            options: ["Dynamic", "Architecture Neutral", "Use of pointers", "Object-oriented"],
            answer: "Use of pointers"
        },
        {
            question:" _____ is used to find and fix bugs in the Java programs.",
            options: ["JVM", "JRE", "JDK", "JDB"],
            answer: "JDB"
        },
        {
            question:"Does React.js create a VIRTUAL DOM in the memory?",
            options: ["TRUE", "FALSE", "Can be true or false", "Cannot say"],
            answer: "TRUE"

        },
        {
            question:"  In which memory a String is stored, when we create a string using new operator?",
            options: ["Stack", "String memory", "Heap memory", "Random storage space"],   
            answer: "Heap memory"
        },
        {
            question:"Evaluate the following Java expression, if x=3, y=5, and z=10: ++z + y - y + z + x++",
            options: ["24", "23", "20", "25"],
            answer: "25"
        },
        {
            question:"In which process, a local variable has the same name as one of the instance variables?",
            options: ["Serialization", "Variable Shadowing", "Abstraction", "Multi-threading"],
            answer: "Variable Shadowing"
        },
        {
            question:"What do you mean by chained exceptions in Java?",
            options: ["Exceptions occurred by the VirtualMachineError", "An exception caused by other exceptions", "Exceptions occur in chains with discarding the debugging information", "None of the above"],
            answer: "An exception caused by other exceptions"
        },

    ]
    ,Python: [
        {
            question:"Who developed Python Programming Language?",
            options: ["Wick van Rossum", "Rasmus Lerdorf", "Guido van Rossum", "Niene Stom"],
            answer: "Guido van Rossum"
        },
        {
            question:"Which of the following is the correct extension of the Python file?",
            options: [".python", ".pl", ".py", ".p"],
            answer: ".py"
        },
        {
            question:"All keywords in Python are in _________",
            options: ["Capitalized", "lower case", "UPPER CASE", "None of the mentioned"],
            answer: "None of the mentioned"
        },
        {
            question:"Which keyword is used for function in Python language?",
            options: ["Function", "def", "Fun", "Define"],               
            answer: "def"
        },
        {
            question:" Which of the following character is used to give single-line comments in Python?",
            options: ["//", "#", "!", "/*"],
            answer: "#"
        },
        {
            question:"Which of the following functions can help us to find the version of python that we are currently working on?",
            options: ["sys.version(1)", "sys.version(0)", "sys.version()", "sys.version"],
            answer: "sys.version"
        },
        {
            question:"Python supports the creation of anonymous functions at runtime, using a construct called __________?",
            options: ["pi", "anonymous", "lambda", "none of the mentioned"],
            answer: "lambda"
        },
    ]
};