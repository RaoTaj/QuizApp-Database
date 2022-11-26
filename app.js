 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
 import { getDatabase, ref, push, set, child } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyArT_K5z-eeYOVKqShC0ud_DiHTun18YjA",
   authDomain: "sikandardatabase.firebaseapp.com",
   projectId: "sikandardatabase",
   storageBucket: "sikandardatabase.appspot.com",
   messagingSenderId: "828602577274",
   appId: "1:828602577274:web:bee91016e2304addb066c3",
   measurementId: "G-BEZHR6CPVJ"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

window.submitQuiz = function () {
    var quizName = document.getElementById('quizName').value
    var numb = Math.random() * 1000000000;
    var mykey = numb.toFixed()
    var quizkey = quizName + mykey.toString();


    var question1 = document.getElementById('questionContent1').value;
    var question1_option1 = document.getElementById('q1option1').value;
    var question1_option2 = document.getElementById('q1option2').value;
    var question1_option3 = document.getElementById('q1option3').value;
    // var question1_option4 = document.getElementById('q1option4').value;
    var question1_correct = document.getElementById('q1Correct').value;

    var ques1 = {
        question: question1,
        options: {
            option1: question1_option1,
            option2: question1_option2,
            optiosn3: question1_option3,
            // option4: question1_option4
        },
        correct: question1_correct
    }

    writeData(ques1, quizkey)


    var question2 = document.getElementById('questionContent2').value;
    var question2_option1 = document.getElementById('q2option1').value;
    var question2_option2 = document.getElementById('q2option2').value;
    var question2_option3 = document.getElementById('q2option3').value;
    // var question2_option4 = document.getElementById('q2option4').value;
    var question2_correct = document.getElementById('q2Correct').value;

    var ques2 = {
        question: question2,
        options: {
            option1: question2_option1,
            option2: question2_option2,
            option3: question2_option3,
            // option4: question2_option4
        },
        correct: question2_correct
    }

    writeData(ques2, quizkey)

    var question3 = document.getElementById('questionContent3').value;
    var question3_option1 = document.getElementById('q3option1').value;
    var question3_option2 = document.getElementById('q3option2').value;
    var question3_option3 = document.getElementById('q3option3').value;
    // var question3_option4 = document.getElementById('q3option4').value;
    var question3_correct = document.getElementById('q3Correct').value;

    var ques3 = {
        question: question3,
        options: {
            option1: question3_option1,
            option2: question3_option2,
            option3: question3_option3,
            // option4: question3_option4
        },
        correct: question1_correct
    }
    writeData(ques3, quizkey)

    
    var question4 = document.getElementById('questionContent3').value;
    var question4_option1 = document.getElementById('q4option1').value;
    var question4_option2 = document.getElementById('q4option2').value;
    var question4_option3 = document.getElementById('q4option3').value;
    // var question3_option4 = document.getElementById('q3option4').value;
    var question4_correct = document.getElementById('q4Correct').value;

    var ques4 = {
        question: question4,
        options: {
            option1: question4_option1,
            option2: question4_option2,
            option3: question4_option3,
            // option4: question3_option4
        },
        correct: question1_correct
    }
    writeData(ques4, quizkey)
    console.log("Run horaha hai bhaiiiiiiiiiiiiiiiiiiiiiiiii")
}

function writeData(obj, quizkey) {
    const newquizRef = push(child(ref(db), `quiz/${quizkey}`));
    set(newquizRef, obj);
}