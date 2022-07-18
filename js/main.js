// bài 3 Tính Giai thừa
function kiemtra(num) {
    var kq = true;
    
    if (num < 2) {
        kq = false;
    } else if (num == 2) {
        kq = true;
    }else if (num % 2 == 0) {
        kq = false;
    }else {
        for (var i = 3; i <=  Math.sqrt(num); i += 2) {
            if (num % i == 0) {
                return  false;
                
            }
        }
    }
    return kq;
}
function inso() {
    var n = document.getElementById("nhapinso").value;
    var inra = '';

    for (var i = 1; i <= n; i++) {
        if (kiemtra(i)) {
            inra += "  " + i;
        }
        document.getElementById("txtResultinso").innerHTML = inra;
    }

}
document.getElementById("btninso").onclick = inso;

