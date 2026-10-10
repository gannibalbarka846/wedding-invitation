/* =========================================================================
   TO'Y TAKLIFNOMASI SOZLAMALARI (WEDDING INVITATION CONFIG)
   -------------------------------------------------------------------------
   Saytdagi BARCHA matn, rasm, musiqa va manzilni shu yerda o'zgartirasiz.
   Boshqa fayllarni (HTML/CSS/JS) ochish shart emas.
   ========================================================================= */

window.weddingConfig = {

  /* ---------- KELIN-KUYOV ISMLARI ---------- */
  groomName: "Abdulaziz",
  brideName: "Elinura",

  /* ---------- SANA VA VAQT ----------
     Countdown (kun sanoq) shu sanagacha ishlaydi.
     Format: "YYYY-MM-DDTHH:MM:SS"  (24 soatlik vaqt) */
  weddingDate: "2026-10-24T18:00:00",

  /* Bosh sahifada ko'rinadigan sana/vaqt matni (istalgan formatda yozishingiz mumkin) */
  displayDate: "24-Oktabr, 2026-yil",
  displayTime: "18:00",
  displayWeekday: "Shanba",

  /* ---------- TAKLIF MATNI ---------- */
  inviteTitle: "Bizning to'yimizga",
  inviteSubtitle: "Marhamat qilib tashrif buyurishingizni so'raymiz",
  welcomeMessage:
    "Hayotimizdagi eng baxtli onlarning birida yonimizda turishingizdan, quvonchimizga sherik bo'lishingizdan mamnunmiz!!!",
  parentsMessage: "",

  /* ---------- TO'YXONA / MANZIL ---------- */
  venueName: "\"DOSTON\" to'yxonasi",
  venueAddress: "Qarshi shahar",

  /* Google Xarita manzili qanday olinadi:
     1) Google Maps'da joyni toping -> "Share" -> "Embed a map" -> HTML kodidan
        src="..." ichidagi havolani shu yerga qo'ying (mapEmbedUrl).
     2) "Yo'nalish olish" tugmasi uchun oddiy Google Maps havolasini
        mapDirectionsUrl ga qo'ying (masalan, joy nomini qidiruv linki). */
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.80737263898!2d65.78795697488982!3d38.83687215027479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea900192b1b93%3A0xcb2765f1474d8413!2sDoston%20To%CA%BByxona!5e0!3m2!1sen!2s!4v1791661931021!5m2!1sen!2s",
  mapDirectionsUrl: "https://maps.app.goo.gl/cRkzairNQeBAp98T8",

  /* ---------- RASMLAR ----------
     Rasmlaringizni "assets/images/" papkasiga qo'ying va nomini shu yerga yozing.
     Masalan: heroImage: "assets/images/hero.jpg" */
  heroImage: "assets/images/11.jpg",
  coupleImage: "assets/images/2.jpg",

  /* Galereya uchun istalgancha rasm qo'shishingiz mumkin (massivga qator qo'shib) */
  gallery: [
    "assets/images/3.jpg",
    "assets/images/4.jpg",
    "assets/images/5.jpg",
    "assets/images/6.jpg"
  ],

  /* ---------- MUSIQA ----------
     Fon musiqasini "assets/music/" papkasiga qo'ying (mp3 format tavsiya etiladi)
     va nomini shu yerga yozing. Masalan: "assets/music/song.mp3" */
  musicFile: "assets/music/song1.mp3",
  musicAutoplay: true,

  /* ---------- YAKUNIY QISM ---------- */
  footerMessage: "Sizni albatta kutamiz!!!",
  footerNames: "Abdulaziz & Elinura"
};
