document.getElementById('loveForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const hasil = {
    perasaan: formData.get('perasaan'),
    makan: formData.get('makan'),
    date: formData.get('date')
  };
  console.log("Jawaban terkumpul:", hasil);

  // Tampilkan pesan terima kasih
  document.getElementById('loveForm').classList.add('hidden');
  document.getElementById('thanks').classList.remove('hidden');
});