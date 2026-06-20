// © 2023 Pande Kadek Nathan Prabhaswara
// Cara pakai:
// 1. Buka halaman SIAM yang berisi pertanyaan kuesioner
// 2. Buka DevTools Chrome (F12 atau Ctrl + Shift + i)
// 3. Ketik "allow paste" lalu Enter
// 4. Copas kode ini di console
// 5. Tekan Enter

// Masukkan option yang akan dipilih
// 1 = sangat tidak baik
// 2 = tidak baik
// 3 = biasa
// 4 = baik
// 5 = sangat baik
const value = 4

// Masukkan komentar
const saran = "isi komentar kamu"

var inputElements = document.getElementsByTagName("input");
for (var i=0; i<inputElements.length; i++) {
  if (inputElements[i].getAttribute('type') == 'radio' && inputElements[i].getAttribute('value') == value) {
    inputElements[i].checked = true;
    // Trigger events so the webpage's scripts register the change
    inputElements[i].dispatchEvent(new Event('change', { bubbles: true }));
    inputElements[i].dispatchEvent(new Event('click', { bubbles: true }));
  }
}

var textarea = document.querySelector('textarea[name="saran"]');
if (textarea) {
  textarea.value = saran;
  // Trigger events for textarea as well
  textarea.dispatchEvent(new Event('input', { bubbles: true }));
  textarea.dispatchEvent(new Event('change', { bubbles: true }));
} else if (typeof jQuery !== 'undefined') {
  jQuery('textarea[name="saran"]').val(saran).trigger('change').trigger('input');
}
