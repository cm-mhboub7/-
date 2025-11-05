/* 
  🎮 منطق اللعبة الكامل
  ⚙️ يمكنك تعديل الأسئلة والاختيارات والجواب الصحيح من هنا
*/

const questions = [
  {
    question: "شنو هو التاريخ لي اعترفت ليك فيها بحبي؟",
    options: ["10 ماي 🌼", "17 غشت ❤️", "8 نونبر 🎂"],
    correct: 1 // الجواب الصحيح هو الثاني
  },
  {
    question: "شنو هي الكلمة لي كنبغي نسمعها منك بزااااف؟",
    options: ["بعد عليا", "كنبغيك ❤️", "فينك ؟ "],
    correct: 1
  },
  {
    question: "شنو هو اللقب لي كنبغي نعيطك بيه؟",
    options: ["بنتي ❤️", "اهياتا", "فطوم 😂"],
    correct: 0
  },
  {
    question: "شنو أكتر حاجة كتعجبني فيك؟",
    options: ["عصبيتك", "عينيك ", "نكدك"],
    correct: 1
  },
  {
    question: "شنو الإحساس لي حسّيت به أول مرة عرفتك؟",
    options: ["راحة وطمأنينة ", "الملل", "والو"],
    correct: 0
  },
  {
    question: "شنو أول كلمة قليتها ليا خلاتني نبتسم؟",
    options: ["راك عزيز عليا ❤️", "تصبح على خير", "شنو كتدير؟ 🤨"],
    correct: 0
  },
  {
    question: "شنو الحاجة لي كنفتاخر بيك فيها بزاف؟",
    options: ["أخلاقك وعفتك ❤️", "زينك 💄", "خيالك الواسع 💭"],
    correct: 0
  },
  {
    question: "شنو كنتمنا ليك فهاد العيد ميلاد؟ 🎂",
    options: [
      "توفيق فدراستك وتكوني خطيبتي ❤️",
      "تشري تليفون جديد 😂",
      "دوزي نهار زوين وبس 🌸"
    ],
    correct: 0
  }
];

// 💗 المتغيرات
let currentQuestion = 0;
let hearts = 0;

// 📍 عناصر الصفحة
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const heartsEl = document.getElementById("hearts");
const nextBtn = document.getElementById("next-btn");

// 💬 عرض السؤال الحالي
function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn";
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });

  nextBtn.disabled = true;
}

// 🧠 التحقق من الجواب
function checkAnswer(selectedIndex) {
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === q.correct) btn.classList.add("correct");
    else if (index === selectedIndex) btn.classList.add("wrong");
  });

  // ✅ إذا الجواب صحيح نزيد قلب
  if (selectedIndex === q.correct) {
    hearts++;
    heartsEl.textContent = `القلوب: ${hearts} / 8 ❤️`;
  }

  // 🔓 تفعيل زر "التالي"
  nextBtn.disabled = false;
}

// ⏭️ الانتقال للسؤال الموالي
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    // 🎁 ملي تكمل 8 قلوب → تمشي للهدية
    if (hearts >= 8) {
      window.location.href = "gift.html";
    } else {
      alert("جمعي كل القلوب باش توصلي للمفاجأة ❤️");
      location.reload();
    }
  }
});

// 🩷 أول سؤال عند بداية الصفحة
showQuestion();
