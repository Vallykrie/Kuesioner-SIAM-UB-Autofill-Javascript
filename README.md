# 🚀 SIAM UB Kuesioner Autofill

Lelah harus klik satu per satu tombol "Baik" atau "Sangat Baik" di kuesioner SIAM setiap akhir semester demi melihat nilai? Repository ini berisi script JavaScript sederhana untuk mengisi kuesioner tersebut secara otomatis dalam hitungan detik.

## 📋 Fitur
* **Auto Select Rating:** Otomatis memilih rating (Default: 4/Baik).
* **Auto Comment:** Otomatis mengisi kotak saran/komentar.
* **Fast:** Tidak perlu klik satu-satu lagi.

## 🛠 Cara Pakai

1.  Buka [SIAM UB](https://siam.ub.ac.id/).
2.  Masuk ke halaman kuesioner dosen yang ingin diisi.
3.  Buka **Developer Tools** di browser kamu:
    * Windows/Linux: `F12` atau `Ctrl + Shift + I`
    * Mac: `Cmd + Option + I`
4.  Pilih tab **Console**.
5.  Copy dan Paste kode di bawah ini ke dalam Console, lalu tekan **Enter**.

```javascript
// =Configuration=
// 1 = Sangat Tidak Baik, 2 = Tidak Baik, 3 = Biasa, 4 = Baik, 5 = Sangat Baik
const ratingValue = 4; 
const komentar = "Terima kasih, metode pengajaran sudah baik.";

// =Logic=
// 1. Mengisi Radio Button
var inputElements = document.getElementsByTagName("input");
for (var i = 0; i < inputElements.length; i++) {
    if (inputElements[i].getAttribute('type') == 'radio' && inputElements[i].getAttribute('value') == ratingValue) {
        inputElements[i].checked = true;
        // Trigger event agar form web mendeteksi perubahan
        inputElements[i].dispatchEvent(new Event('change', { bubbles: true }));
        inputElements[i].dispatchEvent(new Event('click', { bubbles: true }));
    }
}

// 2. Mengisi Textarea Saran (Mendukung jQuery bawaan SIAM)
var textarea = document.querySelector('textarea[name="saran"]');
if (textarea) {
    textarea.value = komentar;
    // Trigger event untuk textarea
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
    textarea.dispatchEvent(new Event('change', { bubbles: true }));
} else if (typeof jQuery !== 'undefined') {
    // Fallback jika menggunakan jQuery
    jQuery('textarea[name="saran"]').val(komentar).trigger('change').trigger('input');
}
