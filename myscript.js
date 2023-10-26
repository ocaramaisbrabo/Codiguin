function calcular(){
    const v1i = Number(document.queryselector("#velocidade1").value);
    const v2i = Number(document.queryselector("#velocidade2").value);
    const m1 = Number(document.queryselector("#massa1").value);//massa1
    const m2 = Number(document.queryselector("#massa2").value);//massa2

    const v1 = v1i ( m1 - m2 ) +2 ( v2 * m2 ) / m1 + m2; //velocidade 1
    const v2 = v2i ( m1 - m2 ) +2 ( v1 * m2 ) / m1 + m2;  //velocidade 2

    document.querySelector("#resultadov1").textContent = "velocidadeinicial1: " + v1.toFixed(2) (m/s);
    document.querySelector("#resultadov2").textContent = "ResultadoV2: " + v2.toFixed(2) (m/s);
    }

    document.addEventListener("DOMContentLoaded", () => {

const calcularButton = document_queryselector("#calcular");
calcularButton.addEventListener("click", calcular);
    });

    