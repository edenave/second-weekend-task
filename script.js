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

            startedAt: new Date("2021-01-20:11:00"),
            
            finishedAt: new Date("2021-01-20:14:00"),
            
            tasksGiven: 10,
            
            tasksFinished: 7,
            
            topic: "JavaScript"
            
            },

            {

                startedAt: new Date("2021-01-20:11:00"),
                
                finishedAt: new Date("2021-01-20:14:00"),
                
                tasksGiven: 10,
                
                tasksFinished: 7,
                
                topic: "JavaScript"
                
                },
                {

                    startedAt: new Date("2021-01-20:11:00"),
                    
                    finishedAt: new Date("2021-01-20:14:00"),
                    
                    tasksGiven: 10,
                    
                    tasksFinished: 7,
                    
                    topic: "JavaScript"
                    
                    },
                    {

                        startedAt: new Date("2021-01-20:11:00"),
                        
                        finishedAt: new Date("2021-01-20:14:00"),
                        
                        tasksGiven: 10,
                        
                        tasksFinished: 7,
                        
                        topic: "JavaScript"
                        
                        },
                        {

                            startedAt: new Date("2021-01-20:11:00"),
                            
                            finishedAt: new Date("2021-01-20:14:00"),
                            
                            tasksGiven: 10,
                            
                            tasksFinished: 7,
                            
                            topic: "JavaScript"
                            
                            },
                            {

                                startedAt: new Date("2021-01-20:11:00"),
                                
                                finishedAt: new Date("2021-01-20:14:00"),
                                
                                tasksGiven: 10,
                                
                                tasksFinished: 7,
                                
                                topic: "JavaScript"
                                
                                },
                                {

                                    startedAt: new Date("2021-01-20:11:00"),
                                    
                                    finishedAt: new Date("2021-01-20:14:00"),
                                    
                                    tasksGiven: 10,
                                    
                                    tasksFinished: 7,
                                    
                                    topic: "JavaScript"
                                    
                                    },
                                    {

                                        startedAt: new Date("2021-01-20:11:00"),
                                        
                                        finishedAt: new Date("2021-01-20:14:00"),
                                        
                                        tasksGiven: 10,
                                        
                                        tasksFinished: 7,
                                        
                                        topic: "JavaScript"
                                        
                                        },
                                        {

                                            startedAt: new Date("2021-01-20:11:00"),
                                            
                                            finishedAt: new Date("2021-01-20:14:00"),
                                            
                                            tasksGiven: 10,
                                            
                                            tasksFinished: 7,
                                            
                                            topic: "JavaScript"
                                            
                                            },

];

let totalTime;

for( let x of mainArr){
x.totalTime = (x.finishedAt - x.startedAt)/3600000 + " hours";
};

for(let y of mainArr ){

    let yfloored = Math.floor((y.tasksFinished / y.tasksGiven) * 100)
    y.tasksFinishedPrecent = yfloored + " %";


    
};




let tableStart = document.write("<table>");
// let table head = document.write(`<th> <td>${Object.keys(mainArr)} </td></th>`)
// for(let th of mainArr){
   let tableHead = document.write(`<th> ${Object.keys(mainArr[1])}</th>`)
// }

for (let tr of mainArr){
    document.write( "<tr><td>" + tr + "</td></tr>")
};



let tableEnd = document.write("</table>");
// console.log(mainArr)



