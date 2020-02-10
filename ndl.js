import init, { sample_no_deco } from './pkg/capra_bindgen.js';

async function run() {
    await init();

    const result = sample_no_deco();
    document.addEventListener("DOMContentLoaded", function() {
        const body = document.body;
        const p = document.createElement("p");
        p.textContent = "wuuuuu";
        const p_again = document.createElement("p");
        p.textContent = "Yoooooo";
        body.appendChild(p);
        body.appendChild(p_again)
    });

}

run();