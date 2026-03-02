const message = `Dear Nayala\n\n Hi nay, semoga km baca ini sampe abis ya aku cuma mau sampein perasaanku kok. Thank you very much for choosing me ya, aku bersyukur banget tau bisa jadi pacar kamu, bisa jadi orang yang kamu curhatin tentang apapuuun, aku seneng banget lho setiap km cerita ke aku km tuh excited banget meskipun cerita-cerita random, terus kamu tuh peduli banget nay sama aku, first time in my whole life aku merasakan sedipeduliin ini sama orang lain. Aku ga nyangka km betah sama orang gajelas kaya aku huhu, km padahal cantik, baik, peduli, dan pinter nay aku beruntung banget bisa sama kamu. Aku minta maaf banget kamu jadi banya sedihnya daripada senengnya nay, aku merasa blm bisa treat km better meskipun kita udah 1 tahun lebih, aku masih sering jahatin km, aku nyebelin, aku nggarai km trs, dan yang bikin emosi aku gapernah berubah, even inisiatif pun aku gapernah ke km, aku mrs cm jadi penghambat km buat grow, aku sering bikin km sedih, dan aku masih gt gt aja. Aku mau bilang makasih banyak sama sm km yang udh ngerubah aku banyak banget, inget gasi aku dulu setakutan apa, sepemalu apa, bahkan buat senyum tulus aja aku gabisa dulu. Tapi semenjak sama kamu nay aku sekarang bisa lebih berani buat ngadepin orang, lebih punya sopan santun, udh ga pemaluuu lagi kaya dulu dan senyumku udah bagus bgt hehe :> itu semua aku lewatin bareng-bareng sama kamu. Makanya nay aku kali ini percaya bgt sm km, percaya bgt sama hubungan ini, aku siap buat evaluasi terus demi our relationship, aku mau sama kamu terus nay, walaupun mungkin kita merasa kita ga cocok tapi aku masih percaya banget kita bisa ngadepin semuanyaaaa. Aku sayang sama kamu, I love you so much nay \n\n\- Arul`;

function startHunt() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";
  document.getElementById("huntBox").style.display = "block";
}

function check1() {
  const val = document.getElementById("a1").value.toLowerCase();
  if (val === "28") {
    // ganti sesuai jawaban asli
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
  } else {
    alert("Salah, inget lagi 🫩");
  }
}

function check2() {
  const val = document.getElementById("a2").value.toLowerCase();
  if (val === "cimut") {
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "block";
  } else {
    alert("Hayo inget-inget");
  }
}

function openLetter() {
  const val = document.getElementById("a3").value.toLowerCase();
  if (val === "1" || val === "1") {
    document.getElementById("huntBox").style.display = "none";
    showLetter();
  } else {
    alert("Salah lagi 🤓");
  }
}

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
