let studentRecords=[{
    name:"John",
    id:123,
    marks:98
   },
   {
    name:"Baba",
    id:101,
    marks:23
   },
   {
    name:"yaga",
    id:200,
    marks:45
   },
   {
    name:"Wick",
    id:115,
    marks:75
   }
   ]
   
   //for getting the details  of students that have marks greater than 50
   
   for(let i=0;i<studentRecords.length;i++){
    let a=studentRecords[i].marks>50;
    if(a){
     console.log(studentRecords[i])
    }
    
    
   }
   // using higher order function for printing name in Upper case
   
   studentRecords.forEach(n=>console.log(n.name.toUpperCase()))
   
   // details of student  who scored more than 50 and id greater than 120
   
   for(let i=0;i<studentRecords.length;i++){
    let a=studentRecords[i].marks>50 && studentRecords[i].id>120;
    if(a){
     console.log(studentRecords[i])
    }
    
    
   }
   
   // sum of the total marks
   
   let sum=studentRecords.map(n=>n.marks).reduce((a,b)=>a+b,0);
   
   console.log(sum);
   
   // sum of marks of students with id greater than 120
   
   let grt20=studentRecords.filter(n=>n.id>120).map(n=>n.marks).reduce((a,b)=>a+b,0);
   
    
   
   console.log(grt20);
   
   

