function skillsMember() {
    var member = document.getElementById("member").value;
    var memberError = document.getElementById("memberError");
    if (member == null || member == "") {
        memberError.innerHTML = "Please enter your name";
        return false;
    } else {
        memberError.innerHTML = "";
        return true;
    }
}