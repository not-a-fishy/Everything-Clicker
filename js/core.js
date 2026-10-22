"use strict";

const STAGES = {};
let currentStage = null;

function setStage(name) {
    if (name === "bash" && localStorage.getItem("rebirthed") !== "1") name = "money";
    if (!STAGES[name]) name = "money";
    if (currentStage) STAGES[currentStage].stop();
    currentStage = name;
    localStorage.setItem("stage", name);
    document.body.dataset.stage = name;
    STAGES[name].start();
}
