function sprawdz(x, y) {
    var x = 30;
    var y = 12;
    if (x == 20 || y == 20) {
        return true;
    } else if (x + y <= 20) {
        return true;
    } else {
        return false;
    }
} sprawdz();