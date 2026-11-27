// ===== เมนูหลัก (ใช้ร่วมกันทุกหน้า) =====
const PAGES = [
  { href: "index.html",      th: "หน้าแรก",            en: "Home" },
  { href: "law.html",        th: "กฎหมายดิจิทัล",       en: "Digital Law" },
  { href: "ethics.html",     th: "จริยธรรมดิจิทัล",      en: "Digital Ethics" },
  { href: "security.html",   th: "ความปลอดภัยดิจิทัล",   en: "Digital Security" },
  { href: "case-study.html", th: "กรณีศึกษา",           en: "Case Study" },
  { href: "quiz.html",       th: "แบบทดสอบ",           en: "Quiz" },
  { href: "references.html", th: "อ้างอิงและผู้จัดทำ",     en: "References & Credits" }
];

function buildLayout() {
  const current = location.pathname.split("/").pop() || "index.html";
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="container nav-wrap">
      <a class="brand" href="index.html">🛡️ รู้ทัน Deepfake</a>
      <button class="menu-toggle" aria-label="เปิด/ปิดเมนู">☰</button>
      <nav><ul>
        ${PAGES.map(p => `<li><a href="${p.href}" class="${p.href === current ? "active" : ""}">
          ${p.th}<small>${p.en}</small></a></li>`).join("")}
      </ul></nav>
    </div>`;
  document.body.prepend(header);
  header.querySelector(".menu-toggle").addEventListener("click", () => header.classList.toggle("open"));

  const footer = document.createElement("footer");
  footer.innerHTML = `<div class="container">© ${new Date().getFullYear()} โครงการ "รู้ทัน Deepfake" — สื่อการเรียนรู้เพื่อการศึกษา ไม่ใช่คำปรึกษาทางกฎหมาย</div>`;
  document.body.append(footer);
}

// ===== แบบทดสอบ =====
const QUIZ = [
  { dim: "กฎหมาย",
    q: "การนำภาพใบหน้าเพื่อนไปตัดต่อด้วย AI ให้ดูน่าอับอาย แล้วโพสต์ในที่สาธารณะ เข้าข่ายผิดกฎหมายใดชัดเจนที่สุด",
    choices: ["พ.ร.บ.คอมพิวเตอร์ฯ มาตรา 16", "พ.ร.บ.ลิขสิทธิ์ เท่านั้น", "ไม่ผิดกฎหมาย เพราะเป็นแค่ภาพที่ AI สร้าง", "พ.ร.บ.จราจรทางบก"],
    answer: 0,
    explain: "มาตรา 16 กำหนดความผิดสำหรับการนำภาพของผู้อื่นที่สร้างขึ้น ตัดต่อ เติม หรือดัดแปลงด้วยวิธีการทางอิเล็กทรอนิกส์ เข้าสู่ระบบคอมพิวเตอร์ที่ประชาชนเข้าถึงได้ โดยประการที่น่าจะทำให้ผู้อื่นเสียชื่อเสียง ถูกดูหมิ่น ถูกเกลียดชัง หรือได้รับความอับอาย การอ้างว่า AI เป็นผู้สร้างไม่ทำให้พ้นผิด" },
  { dim: "กฎหมาย",
    q: "ข้อมูลใบหน้าที่ใช้ระบุตัวตนบุคคลด้วยเทคโนโลยี (ข้อมูลชีวภาพ) จัดเป็นข้อมูลประเภทใดตาม PDPA",
    choices: ["ข้อมูลทั่วไปที่ใช้ได้อิสระ", "ข้อมูลส่วนบุคคลที่มีความอ่อนไหว (Sensitive Data)", "ข้อมูลสาธารณะ", "ไม่ใช่ข้อมูลส่วนบุคคล"],
    answer: 1,
    explain: "มาตรา 26 ของ พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 กำหนดให้ข้อมูลชีวภาพ (Biometric) เป็นข้อมูลอ่อนไหว โดยหลักการเก็บรวบรวมต้องได้รับความยินยอมโดยชัดแจ้ง" },
  { dim: "จริยธรรม",
    q: "ข้อใดเป็นการใช้ AI สร้างภาพหรือเสียงของบุคคลอื่นอย่างมีจริยธรรมมากที่สุด",
    choices: ["ทำเพื่อความสนุก ไม่ต้องบอกเจ้าตัว", "ขอความยินยอมจากเจ้าของใบหน้า และระบุชัดเจนว่าสร้างด้วย AI", "ทำแล้วลบภายใน 24 ชั่วโมง", "ทำเฉพาะกับคนดังเพราะเป็นบุคคลสาธารณะ"],
    answer: 1,
    explain: "หลักจริยธรรมสำคัญคือการเคารพสิทธิ์ของเจ้าของใบหน้า (Consent) และความโปร่งใสต่อผู้ชม (Transparency) แม้จะเป็นบุคคลสาธารณะก็ไม่ได้แปลว่าใช้ใบหน้าเขาทำอะไรก็ได้" },
  { dim: "ความปลอดภัย",
    q: "ข้อใด 'ไม่ใช่' สัญญาณที่อาจบ่งชี้ว่าวิดีโอเป็น Deepfake",
    choices: ["ริมฝีปากขยับไม่ตรงกับเสียง", "การกะพริบตาหรือแสงเงาบนหน้าผิดธรรมชาติ", "ขอบใบหน้าหรือเส้นผมเบลอเมื่อหันศีรษะ", "วิดีโอมีความละเอียด Full HD"],
    answer: 3,
    explain: "ความละเอียดสูงไม่ได้บ่งบอกว่าเป็นของจริงหรือของปลอม สัญญาณที่ควรสังเกตคือความผิดธรรมชาติของปาก ตา แสงเงา และขอบใบหน้า อย่างไรก็ตาม Deepfake รุ่นใหม่เนียนขึ้นมาก จึงควรตรวจสอบจากแหล่งอื่นประกอบเสมอ" },
  { dim: "ความปลอดภัย (สถานการณ์)",
    q: "สถานการณ์: มีวิดีโอคอลจากบัญชีใหม่ ใบหน้าและเสียงเหมือน 'แม่' บอกว่าโทรศัพท์หาย และขอให้โอนเงิน 5,000 บาทด่วน คุณควรทำอย่างไร",
    choices: ["โอนทันทีเพราะเห็นหน้าและได้ยินเสียงแม่", "วางสาย แล้วโทรกลับเบอร์เดิมของแม่ที่บันทึกไว้ หรือถามคำถามลับที่รู้กันในครอบครัว", "ขอให้ส่งรูปบัตรประชาชนมายืนยันแล้วค่อยโอน", "โอนครึ่งหนึ่งก่อนเพื่อความปลอดภัย"],
    answer: 1,
    explain: "มิจฉาชีพใช้ AI ปลอมใบหน้าและเสียงได้ และรูปบัตรประชาชนก็ปลอมได้เช่นกัน วิธีที่ปลอดภัยคือยืนยันผ่านช่องทางอื่นที่เชื่อถือได้ (Out-of-band verification) และตั้ง 'รหัสลับครอบครัว' ไว้ล่วงหน้า" },
  { dim: "จริยธรรม + กฎหมาย (สถานการณ์)",
    q: "สถานการณ์: มีคนส่งคลิป Deepfake ที่ตัดต่อเพื่อนร่วมห้องให้ดูน่าอับอายเข้ามาในกลุ่มแชทห้อง คุณควรทำอย่างไร",
    choices: ["ส่งต่อให้เพื่อนกลุ่มอื่นดู เพราะไม่ได้เป็นคนทำเอง", "กดหัวเราะแล้วเงียบไว้", "ไม่ส่งต่อ แคปหน้าจอเก็บเป็นหลักฐาน แจ้งเพื่อนผู้เสียหายและครู และกดรายงานคลิป", "แชร์ลงโซเชียลเพื่อประจานคนทำ"],
    answer: 2,
    explain: "การส่งต่อเท่ากับช่วยเผยแพร่และอาจทำให้ตนเองมีความผิดไปด้วย การประจานคนทำก็ยิ่งทำให้คลิปแพร่กระจาย ทางที่ถูกคือหยุดการแพร่กระจาย เก็บหลักฐาน และแจ้งผู้ที่ช่วยเหลือได้" },
  { dim: "ความปลอดภัย",
    q: "เมื่อพบว่าตนเองถูกนำใบหน้าไปทำ Deepfake ขั้นตอนใดควรทำ 'ก่อน' ขอให้แพลตฟอร์มลบโพสต์",
    choices: ["ลบบัญชีโซเชียลทั้งหมดทันที", "เก็บหลักฐาน เช่น แคปหน้าจอ ลิงก์ URL ชื่อบัญชี และวันเวลา", "โพสต์ด่าผู้กระทำ", "ไม่ต้องทำอะไร รอให้เรื่องเงียบไปเอง"],
    answer: 1,
    explain: "ถ้าโพสต์ถูกลบไปก่อน อาจไม่มีหลักฐานไว้ใช้แจ้งความหรือดำเนินคดี จึงควรเก็บหลักฐานให้ครบก่อน แล้วค่อยรายงานแพลตฟอร์มและแจ้งเจ้าหน้าที่" }
];

function buildQuiz() {
  const box = document.getElementById("quiz");
  if (!box) return;
  box.innerHTML = QUIZ.map((item, i) => `
    <div class="q" id="q${i}">
      <span class="tag">${item.dim}</span>
      <p><strong>ข้อ ${i + 1}.</strong> ${item.q}</p>
      ${item.choices.map((c, j) => `<label><input type="radio" name="q${i}" value="${j}"> ${String.fromCharCode(3585 + j)}. ${c}</label>`).join("")}
      <div class="explain"></div>
    </div>`).join("");

  document.getElementById("submitQuiz").addEventListener("click", () => {
    let score = 0, unanswered = 0;
    QUIZ.forEach((item, i) => {
      const el = document.getElementById("q" + i);
      const picked = el.querySelector("input:checked");
      el.classList.remove("correct", "wrong");
      el.classList.add("checked");
      const ok = picked && Number(picked.value) === item.answer;
      if (!picked) unanswered++;
      if (ok) score++;
      el.classList.add(ok ? "correct" : "wrong");
      el.querySelector(".explain").innerHTML =
        `${ok ? "✅ ถูกต้อง" : "❌ ยังไม่ถูก"} — เฉลย: <strong>${String.fromCharCode(3585 + item.answer)}. ${item.choices[item.answer]}</strong><br>${item.explain}`;
    });
    const s = document.getElementById("score");
    const pct = Math.round(score / QUIZ.length * 100);
    const msg = pct >= 80 ? "ยอดเยี่ยม! คุณรู้ทัน Deepfake แล้ว 🎉" : pct >= 50 ? "ดีแล้ว ลองทบทวนบางหัวข้ออีกนิด 👍" : "ลองกลับไปอ่านบทเรียนอีกครั้งนะ 📚";
    s.style.display = "block";
    s.innerHTML = `คะแนนของคุณ: ${score} / ${QUIZ.length} (${pct}%)<br><small>${msg}${unanswered ? ` — ยังไม่ได้ตอบ ${unanswered} ข้อ` : ""}</small>`;
    s.scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("resetQuiz").addEventListener("click", () => {
    buildQuiz();
    document.getElementById("score").style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => { buildLayout(); buildQuiz(); });