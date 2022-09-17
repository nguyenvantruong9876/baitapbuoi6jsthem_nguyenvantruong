// bài 3 Tính Giai thừa
function kiemtra(num) {
    if (num < 2) {
        return false;
      }
      for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
          return false;
        }
      }
      return true;
}
function inso() {
    var n = document.getElementById("nhapinso").value;
    var inra = '';
    if (n < 2) {
        alert("Bạn hãy nhập số lớn hơn 2");
    } 
    else{
        for (var i = 1; i <= n; i++) {
            if (kiemtra(i) == true) {
                inra += i + " ";
            }
            document.getElementById("txtResultinso").innerHTML = inra;
        }
    }
    

}
document.getElementById("btninso").onclick = inso;

