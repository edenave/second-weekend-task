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
}

for(let y of mainArr ){

    let yfloored = Math.floor((y.tasksFinished / y.tasksGiven) * 100)
    y.tasksFinishedPrecent = yfloored + " %";
}




console.log(mainArr)