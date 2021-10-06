function padLeft(padding, input) {
    if (typeof padding === "number") {
        return new Array(padding + 1).join(" ") + input;
    }
    return padding + input;
}
function first() {
    return "Yes + 1";
}
