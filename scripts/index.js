var experience = setInterval(yearsExperience, 200);
let count1 = 0;

function yearsExperience(){
    count1++
    document.getElementById("number1").innerHTML = count1 + "+";

    if(count1 == 12){
        clearInterval(experience)
    }
}


var courses = setInterval(careerCourses, 100);
let count2 = 0;

function careerCourses(){
    count2++
    document.getElementById("number2").innerHTML = count2 + "+";

    if(count2 == 25){
        clearInterval(courses)
    }
}


var recruiters = setInterval(valuedRecruiters, 50);
let count3 = 0;

function valuedRecruiters(){
    count3++
    document.getElementById("number3").innerHTML = count3 + "+";

    if(count3 == 50){
        clearInterval(recruiters)
    }
}


var trainers = setInterval(certifiedTrainers, 200);
let count4 = 0;

function certifiedTrainers(){
    count4++
    document.getElementById("number4").innerHTML = count4 + "+";

    if(count4 == 10){
        clearInterval(trainers)
    }
}


var students = setInterval(studentsCertified, 1);
let count5 = 500;

function studentsCertified(){
    count5++
    document.getElementById("number5").innerHTML = count5 + "+";

    if(count5 == 1000){
        clearInterval(students)
    }
}

