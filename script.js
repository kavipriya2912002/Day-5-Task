
//Q1: for the given JSON iterate over all the for loops(for,for in,for OfflineAudioCompletionEvent,for each)

var sample_json_data = {
    Name: "Kavipriya Sugumar",
    Email: "xyz@gmail.com",
    birth_year: "2002",
    Gender: "Female",
    Nationality: "Indian",
    Age: 21
  };

  const c=Object.keys(sample_json_data);
//for loop
  for(var k=0;k<c.length;k++)
  {
    console.log(sample_json_data[c[k]]);
  }
//For in
  for(var i in sample_json_data)
  {
    console.log(sample_json_data[i]);
  }

//For of
  for (var j of c) {
    console.log(sample_json_data[j]);
  }

console.log("________________________________________________________________________________");


//Q2: Create your own resume data in JSON Format.

console.log("RESUME");

var resume = {
    My_Name: "Kavipriya S",
    Email: "kavipriya2912002@gmail.com",
    Date_Of_Birth: "29.01.2002",
    Gender: "Female",
    Native:"Dharmapuri",
    Nationality: "Indian",
    Languages_known: [ "Tamil","English"],
    Age: 21,
    Marks: { "B.Tech": "CGPA 9.25", 
    "Higher Secondary": "76.38%", 
    SSLC: "92%" },
    Qualification: "B.Tech IT",
    Software_proficiency: [
      "java",
      "c++",
      "HTML",
      "css",
      "javascript",
      "Oops",
      "SQL",
      "Ms office",
    ],
    Area_Of_Interest:["Web Development","App Development"],
    Projects:["Women Safety App","Quizz App"],
    Key_strength: ["Perseverant","Quick learner", "creative", "adaptive"],
    Hobbies: ["Drawing"],
  };
  for(var i in resume)
  {
    console.log(resume[i]);
  }