
import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

document.getElementById('submitQuiz').addEventListener('click', async () => {
  const question = document.getElementById('question').value;
  const optionA = document.getElementById('optionA').value;
  const optionB = document.getElementById('optionB').value;
  const optionC = document.getElementById('optionC').value;
  const optionD = document.getElementById('optionD').value;
  const correct = document.getElementById('correctAnswer').value;

  try {
    await addDoc(collection(db, "quizData"), {
      question,
      options: [optionA, optionB, optionC, optionD],
      correct
    });
    alert("✅ Question Added Successfully!");
  } catch (e) {
    alert("❌ Error adding question");
    console.error("Error: ", e);
  }
});
