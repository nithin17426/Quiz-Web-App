
import { db } from './firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const quizContainer = document.getElementById('quizContainer');

async function loadQuiz() {
  const querySnapshot = await getDocs(collection(db, "quizData"));
  querySnapshot.forEach((doc, index) => {
    const data = doc.data();
    const html = `
      <div>
        <h3>${index + 1}. ${data.question}</h3>
        ${data.options.map((opt, i) => `
          <label>
            <input type="radio" name="q${index}" value="${opt}">
            ${opt}
          </label><br>`).join('')}
      </div><hr>
    `;
    quizContainer.innerHTML += html;
  });
}

window.onload = loadQuiz;
