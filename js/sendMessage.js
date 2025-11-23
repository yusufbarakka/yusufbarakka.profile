// ================================
// Telegram Form Sender Script (FINAL)
// ================================

// Token bot kamu
const BOT_TOKEN = "8205959372:AAFgAu6sznYTyzh5B5w0ri-Uuq57-aoqtbo";

// Chat ID kamu
const CHAT_ID = "1931321968";

// Ketika halaman sudah siap
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (!form) {
    console.error("Form dengan ID 'contact-form' tidak ditemukan.");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil data input
    const name = form.querySelector('input[placeholder="Your name here..."]').value.trim();
    const email = form.querySelector('input[placeholder="Your email here..."]').value.trim();
    const message = form.querySelector('textarea[placeholder="Your message here..."]').value.trim();

    // Validasi sederhana
    if (!name || !email || !message) {
      alert("Harap isi semua field sebelum mengirim!");
      return;
    }

    // Format pesan
    const text = `
📩 *New Message from Website*
=========================
👤 *Name:* ${name}
📧 *Email:* ${email}
💬 *Message:* 
${message}
`;

    // Kirim ke Telegram
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "Markdown"
      })
    })
      .then(() => {
        alert("Your message has been sent! Thank you 🙌");
        form.reset();
      })
      .catch(() => {
        alert("Failed to send message. Please try again later.");
      });
  });
});
