const senhaEl = document.getElementById("senha");
const copiarEl = document.getElementById("copiar");
const lenEl = document.getElementById("len");
const maiEl = document.getElementById("mai");
const minEl = document.getElementById("min");
const numeroEl = document.getElementById("numero");
const car_especEl = document.getElementById("car_espec");
const geradorEl = document.getElementById("gerador");

const maiusc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusc = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const especiais = "!@#$%^&*()_+=";

function getmincase() {
    return minusc[Math.floor(Math.random() * minusc.length)];
}

function getmaicase() {
    return maiusc[Math.floor(Math.random() * maiusc.length)];
}

function getnumero() {
    return numeros[Math.floor(Math.random() * numeros.length)];
}

function getcar_espec() {
    return especiais[Math.floor(Math.random() * especiais.length)];
}

function geradorPassword() {
    const len = lenEl.value;

    let password = "";

    if (maiEl.checked) {
        password += getmaicase();
    }

    if (minEl.checked) {
        password += getmincase();
    }

    if (numeroEl.checked) {
        password += getnumero();
    }

    if (car_especEl.checked) {
        password += getcar_espec();
    }

    for (let i = password.length; i < len; i++) {
        const x = geradorX();
        password += x;
    }

    senhaEl.innerText = password;
}

function geradorX() {
    const xs = [];
    if (maiEl.checked) {
        xs.push(getmaicase());
    }

    if (minEl.checked) {
        xs.push(getmincase());
    }

    if (numeroEl.checked) {
        xs.push(getnumero());
    }

    if (car_especEl.checked) {
        xs.push(getcar_espec());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

geradorEl.addEventListener("click", geradorPassword);

copiarEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = senhaEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copiar");
    textarea.remove();
    alert("A senha foi copiada");
});