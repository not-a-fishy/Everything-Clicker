"use strict";

const NUMBER_SUFFIXES = ["K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No"];
for (const tens of ["Dc", "Vg", "Tg", "Qd", "Qn", "SxG", "SpG", "Og", "Nn"]) {
    NUMBER_SUFFIXES.push(tens, ...["U", "D", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No"].map(p => p + tens));
}
NUMBER_SUFFIXES.push("Ct");

function format(n) {
    n = Number(n);
    if (!Number.isFinite(n)) return n > 0 ? "∞" : "0";
    if (n < 0) return "-" + format(-n);

    if (n < 1000) {
        return Number.isInteger(n) ? String(n) : String(parseFloat(n.toFixed(2)));
    }

    let tier = Math.floor(Math.log10(n) / 3);
    tier = Math.min(tier, NUMBER_SUFFIXES.length);

    let scaled = n / Math.pow(10, tier * 3);

    if (scaled >= 1000 && tier < NUMBER_SUFFIXES.length) {
        tier++;
        scaled = n / Math.pow(10, tier * 3);
    } else if (scaled < 1) {
        tier--;
        scaled = n / Math.pow(10, tier * 3);
    }

    const truncated = Math.floor(scaled * 100) / 100;
    return parseFloat(truncated.toFixed(2)) + NUMBER_SUFFIXES[tier - 1];
}
