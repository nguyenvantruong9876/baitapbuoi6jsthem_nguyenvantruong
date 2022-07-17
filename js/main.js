// bài 3 Tính Giai thừa
function kiemtra() {
    for (var i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i == 0) {
            return false;
        }
        return num > 1;
    }
}
function inso() {
    var n = document.getElementById("nhapinso").value;
    inra = '';

    for (var i = 1; i <= n; i++) {
        if (kiemtra) {
            inra += '' + i
        } else {
            inra;
        }

        document.getElementById("txtResultinso").innerHTML = inra;
    }

}
document.getElementById("btninso").onclick = inso;
