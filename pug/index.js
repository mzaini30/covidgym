// new VConsole

var kemarin = moment().subtract(1, "days").format("M-D-YYYY")
var kemarin_lusa = moment().subtract(2, "days").format("M-D-YYYY")

$.get(`https://covid19.mathdro.id/api/daily/${kemarin}`, data => {
  for (var x of data){
    x.countryRegion == "Indonesia" ? $(".kemarin").html(Number(x.confirmed).toLocaleString("id")) : ""
  }
})
$.get(`https://covid19.mathdro.id/api/daily/${kemarin_lusa}`, data => {
  for (var x of data){
    x.countryRegion == "Indonesia" ? $(".kemarin-lusa").html(Number(x.confirmed).toLocaleString("id")) : ""
  }
})

setInterval(() => {
  $(".selisih").html((Number($(".kemarin").html().replace(/\./g, "")) - Number($(".kemarin-lusa").html().replace(/\./g, ""))).toLocaleString("id"))
}, 1000)

!localStorage.latihan ? localStorage.setItem("latihan", 0) : ""
var tampil_latihan = () => $(".latihan").html(localStorage.latihan)
tampil_latihan()
$(".submit-latihan").on("submit", x => {
  x.preventDefault()
  var latihan_sebelumnya = Number(localStorage.latihan)
  var latihan_baru = latihan_sebelumnya + Number($(".tambah-latihan").val())
  localStorage.setItem("latihan", latihan_baru)
  tampil_latihan()
  $(".tambah-latihan").val("")
})
$(".reset").click(() => {
  var hapus = confirm("Reset kah?")
  if (hapus){
    localStorage.setItem("latihan", 0)
    tampil_latihan()
  }
})