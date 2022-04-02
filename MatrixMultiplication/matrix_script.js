function multiply(){
    var a11 = document.getElementsByName("a11")[0].value;
    var a12 = document.getElementsByName("a12")[0].value;
    var a13 = document.getElementsByName("a13")[0].value;
    var a21 = document.getElementsByName("a21")[0].value;
    var a22 = document.getElementsByName("a22")[0].value;
    var a23 = document.getElementsByName("a23")[0].value;
    var a31 = document.getElementsByName("a31")[0].value;
    var a32 = document.getElementsByName("a32")[0].value;
    var a33 = document.getElementsByName("a33")[0].value;

    var b11 = document.getElementsByName("b11")[0].value;
    var b12 = document.getElementsByName("b12")[0].value;
    var b13 = document.getElementsByName("b13")[0].value;
    var b21 = document.getElementsByName("b21")[0].value;
    var b22 = document.getElementsByName("b22")[0].value;
    var b23 = document.getElementsByName("b23")[0].value;
    var b31 = document.getElementsByName("b31")[0].value;
    var b32 = document.getElementsByName("b32")[0].value;
    var b33 = document.getElementsByName("b33")[0].value;

    var c11 = (a11*b11)+(a12*b21)+(a13*b31);
    var c12 = (a11*b12)+(a12*b22)+(a13*b32);
    var c13 = (a11*b13)+(a12*b23)+(a13*b33);
    var c21 = (a21*b11)+(a22*b21)+(a23*b31);
    var c22 = (a21*b12)+(a22*b22)+(a23*b32);
    var c23 = (a21*b13)+(a22*b23)+(a23*b33);
    var c31 = (a31*b11)+(a32*b21)+(a33*b31);
    var c32 = (a31*b12)+(a32*b22)+(a33*b32);
    var c33 = (a31*b13)+(a32*b23)+(a33*b33);

    document.getElementsByName("c11")[0].value = c11;
    document.getElementsByName("c12")[0].value = c12;
    document.getElementsByName("c13")[0].value = c13;
    document.getElementsByName("c21")[0].value = c21;
    document.getElementsByName("c22")[0].value = c22;
    document.getElementsByName("c23")[0].value = c23;
    document.getElementsByName("c31")[0].value = c31;
    document.getElementsByName("c32")[0].value = c32;
    document.getElementsByName("c33")[0].value = c33;

    document.getElementsByName("result")[0].innerHTML = `STEPS: <br>
    (${a11*b11} + ${a12*b21} + ${a13*b31})    (${a11*b12} + ${a12*b22} + ${a13*b32})    (${a11*b13} + ${a12*b23} + ${a13*b33})<br>
    (${a21*b11} + ${a22*b21} + ${a23*b31})    (${a21*b12} + ${a22*b22} + ${a23*b32})    (${a21*b13} + ${a22*b23} + ${a23*b33})<br>
    (${a31*b11} + ${a32*b21} + ${a33*b31})    (${a31*b12} + ${a32*b22} + ${a33*b32})    (${a31*b13} + ${a32*b23} + ${a33*b33})<br>`;

    document.getElementsByName("result")[0].style.position = "absolute";
    document.getElementsByName("result")[0].style.top = "30%";
    document.getElementsByName("result")[0].style.right = "10%";
    document.getElementsByName("result")[0].style.fontSize = "25";
    document.getElementsByName("result")[0].style.background = "#f2f2f2";


}

