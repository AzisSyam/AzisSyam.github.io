document.getElementById('form-pesan').addEventListener('submit', function (e) {
  e.preventDefault()
  let nama = document.getElementById('nama')
  let email = document.getElementById('email')
  let pesan = document.getElementById('pesan')
  alert("Pesan terkirim")
  nama.value = ""
  email.value = ""
  pesan.value = ""
})