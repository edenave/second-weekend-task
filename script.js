"use strict"

const mainArr = [
    {

        startedAt: new Date("2021-01-20:13:00"),

        finishedAt: new Date("2021-01-20:19:00"),

        tasksGiven: 10,

        tasksFinished: 7,

        topic: "JavaScript"

    },


    {

        startedAt: new Date("2021-01-11:11:00"),

        finishedAt: new Date("2021-01-11:12:00"),

        tasksGiven: 20,

        tasksFinished: 10,

        topic: "Html"

    },

    {

        startedAt: new Date("2021-01-01:13:00"),

        finishedAt: new Date("2021-01-01:20:00"),

        tasksGiven: 12,

        tasksFinished: 2,

        topic: "CSS"

    },
    {

        startedAt: new Date("2021-01-26:11:00"),

        finishedAt: new Date("2021-01-26:15:00"),

        tasksGiven: 10,

        tasksFinished: 10,

        topic: "JS Functions"

    },
    {

        startedAt: new Date("2021-01-21:11:00"),

        finishedAt: new Date("2021-01-21:16:00"),

        tasksGiven: 40,

        tasksFinished: 27,

        topic: "Dom Manipulations"

    },
    {

        startedAt: new Date("2021-01-20:14:00"),

        finishedAt: new Date("2021-01-20:18:00"),

        tasksGiven: 70,

        tasksFinished: 7,

        topic: "Arrays"

    },
    {

        startedAt: new Date("2021-01-20:17:00"),

        finishedAt: new Date("2021-01-20:19:00"),

        tasksGiven: 11,

        tasksFinished: 4,

        topic: "Objects"

    },
    {

        startedAt: new Date("2021-01-20:09:00"),

        finishedAt: new Date("2021-01-20:12:00"),

        tasksGiven: 5,

        tasksFinished: 3,

        topic: "Loops"

    },
    {

        startedAt: new Date("2021-01-20:11:00"),

        finishedAt: new Date("2021-01-20:18:00"),

        tasksGiven: 10,

        tasksFinished: 6,

        topic: "GitHub"

    },
    {

        startedAt: new Date("2021-01-20:11:00"),

        finishedAt: new Date("2021-01-20:13:00"),

        tasksGiven: 80,

        tasksFinished: 7,

        topic: "TypeScript"

    },

];


// START TO CALCULATE TOTAL TIME AND TASKS FINISHED PRECENT:
let totalTime;

for (let x of mainArr) {
    x.totalTime = parseInt((x.finishedAt - x.startedAt) / 3600000);
};

for (let y of mainArr) {

    let yfloored = Math.floor((y.tasksFinished / y.tasksGiven) * 100)
    y.tasksFinishedPrecent = parseInt(yfloored);



};


// START OF TABLE

let tableStart = document.write("<table>");

for (let keyhead in mainArr[1]) { //getting the table heads by the arrays key
    document.write(`<th>${keyhead}</th>`);
};



for (let tr of mainArr) {  //start of the table data and rows
    let classTotalTime;
    if (tr.totalTime <= 2) {
        classTotalTime = "ifLessTwoHours";
    } else if (tr.totalTime <= 4) {
        classTotalTime = "ifLessFourHours";

    } else {
        classTotalTime = "ifMore";
    }

    let classPrecent;
    if (tr.tasksFinishedPrecent <= 30) {
        classPrecent = "ifLessThirty";

    } else if (tr.tasksFinishedPrecent <= 66) {
        classPrecent = "ifLessSixsty"

    } else {
        classPrecent = "ifMorePrecent"
    }

    document.write(
        `<tr> <td> ${tr.startedAt.toLocaleTimeString()} </td> <td> ${tr.finishedAt.toLocaleTimeString()} </td> <td> ${tr.tasksGiven} </td> 
<td> ${tr.tasksFinished} </td> <td> ${tr.topic} </td> <td class = ${classTotalTime}> ${tr.totalTime} hours </td> <td class = ${classPrecent}> ${tr.tasksFinishedPrecent} % </td> </tr>`
);



};

let tableEnd = document.write("</table>");






