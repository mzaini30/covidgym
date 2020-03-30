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

var berulang = 0
var interval = setInterval(() => {
  berulang++
  berulang == 10 ? clearInterval(interval) : ""
  $(".selisih").html((Number($(".kemarin").html().replace(/\./g, "")) - Number($(".kemarin-lusa").html().replace(/\./g, ""))).toLocaleString("id"))
}, 1000)