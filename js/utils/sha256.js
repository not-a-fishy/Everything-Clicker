"use strict";

const SHA_K = [];
const SHA_H = [];
for (let n = 2, count = 0; count < 64; n++) {
    let isPrime = true;
    for (let d = 2; d * d <= n; d++) {
        if (n % d === 0) {
            isPrime = false;
            break;
        }
    }
    if (!isPrime) continue;
    if (count < 8) SHA_H[count] = (Math.pow(n, 1 / 2) * 2 ** 32) | 0;
    SHA_K[count] = (Math.pow(n, 1 / 3) * 2 ** 32) | 0;
    count++;
}

function rotr(x, n) {
    return (x >>> n) | (x << (32 - n));
}

function sha256(text) {
    const bytes = Array.from(new TextEncoder().encode(text));
    const bitLength = bytes.length * 8;
    bytes.push(0x80);
    while (bytes.length % 64 !== 56) bytes.push(0);
    for (let i = 7; i >= 0; i--) bytes.push(i > 3 ? 0 : (bitLength >>> (i * 8)) & 0xff);

    const h = SHA_H.slice();
    const w = new Array(64);

    for (let off = 0; off < bytes.length; off += 64) {
        for (let i = 0; i < 16; i++) {
            w[i] =
                (bytes[off + 4 * i] << 24) |
                (bytes[off + 4 * i + 1] << 16) |
                (bytes[off + 4 * i + 2] << 8) |
                bytes[off + 4 * i + 3];
        }
        for (let i = 16; i < 64; i++) {
            const s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
            const s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
            w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
        }

        let [a, b, c, d, e, f, g, hh] = h;
        for (let i = 0; i < 64; i++) {
            const S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
            const ch = (e & f) ^ (~e & g);
            const t1 = (hh + S1 + ch + SHA_K[i] + w[i]) | 0;
            const S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
            const maj = (a & b) ^ (a & c) ^ (b & c);
            const t2 = (S0 + maj) | 0;
            hh = g;
            g = f;
            f = e;
            e = (d + t1) | 0;
            d = c;
            c = b;
            b = a;
            a = (t1 + t2) | 0;
        }
        const added = [a, b, c, d, e, f, g, hh];
        for (let i = 0; i < 8; i++) h[i] = (h[i] + added[i]) | 0;
    }

    return h.map((x) => (x >>> 0).toString(16).padStart(8, "0")).join("");
}
