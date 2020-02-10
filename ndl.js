const neon = require('capra-neon');

document.addEventListener("DOMContentLoaded", function() {
    let depth = 20;
    let time = 0;

    const body = document.body;
    const h = document.createElement("h1");
    h.textContent = "NDL Dive at " + depth + "m has NDL: " + neon.ndlDemo(depth, time) + "mins";
    body.appendChild(h);
});