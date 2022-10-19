document.addEventListener('DOMContentLoaded', function () {
  let username = document.getElementById('username')
  let password = document.getElementById('password')
  let nama = document.getElementById('nama')
  let usernameDaftar = document.getElementById('username-daftar')
  let passwordDaftar = document.getElementById('password-daftar')
  let cekTampilPass = document.getElementById('tampil-pass-masuk')
  let passTampilDaftar = document.getElementById('tampil-pass-daftar')

  // function submit form signin
  document.getElementById('form-signin').addEventListener('submit', function (event) {
    let usernameValue = username.value
    let passwordValue = password.value
    event.preventDefault()

    if (localStorage.getItem('passwordTersimpan') == passwordValue && localStorage.getItem('usernameTersimpan') == usernameValue) {
      window.location.href = "./profile.html"
    } else {
      alert("Password atau username salah!")
      clearFormSignIn()
    }
  })

  // function submit form signup
  document.getElementById('form-signup').addEventListener('submit', function (event) {
    event.preventDefault()
    let namaValue = nama.value
    let usernameDaftarValue = usernameDaftar.value
    let passwordDaftarValue = passwordDaftar.value

    if (passwordDaftarValue.length < 8) {
      alert("Password harus lebih dari 8 karakter")
    } else {
      localStorage.setItem('namaTersimpan', namaValue)
      localStorage.setItem('usernameTersimpan', usernameDaftarValue)
      localStorage.setItem('passwordTersimpan', passwordDaftarValue)
      if (namaValue == "" || usernameDaftarValue == "") {
        alert("Input tidak lengkap!")
      } else {
        document.getElementById('form-signin').style.display = "flex"
        document.getElementById('form-signup').style.display = "none"
        alert("Akun berhasil dibuat:)")
        clearFormSignup()
      }
    }
  })

  // fungsi untuk membersihkan form daftar
  function clearFormSignup() {
    nama.value = ""
    usernameDaftar.value = ""
    passwordDaftar.value = ""
    passTampilDaftar.checked = false
  }

  // fungsi untuk membersihkan form masuk
  function clearFormSignIn() {
    username.value = ""
    password.value = ""
    cekTampilPass.checked = false
  }

  // menampilkan form daftar
  document.getElementById('buat-akun').addEventListener('click', function () {
    document.getElementById('form-signin').style.display = "none"
    document.getElementById('form-signup').style.display = "flex"
    clearFormSignIn()
  })

  // menampilkan form masuk
  document.getElementById('kembali').addEventListener('click', function () {
    document.getElementById('form-signin').style.display = "flex"
    document.getElementById('form-signup').style.display = "none"
    clearFormSignup()
  })

  // menampilkan password
  document.getElementById('tampil-pass-masuk').addEventListener('click', function () {
    if (cekTampilPass.checked == true) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  })

  document.getElementById("tampil-pass-daftar").addEventListener('click', function () {
    if (passTampilDaftar.checked == true) {
      passwordDaftar.type = "text";
    } else {
      passwordDaftar.type = "password";
    }
  })
})