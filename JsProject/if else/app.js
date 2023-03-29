function checkgroup() {
    var x = document.getElementById("inp1").value
    var y = x.slice(-3, -2)
    if (y == 1) {

        document.getElementById("morning").innerHTML = `Səhər Qrupudur`

    }
    else if (y == 2) {
        document.getElementById("noon").innerHTML = `Günorta Qrupudur`

    }
    else if (y == 3) {
        document.getElementById("evening").innerHTML = `Axşam  Qrupudur`

    }
}