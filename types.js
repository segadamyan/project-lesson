var membership;
(function (membership) {
    membership[membership["S"] = 0] = "S";
    membership[membership["M"] = 1] = "M";
    membership[membership["L"] = 2] = "L";
    membership[membership["XL"] = 3] = "XL";
    membership[membership["XXL"] = 4] = "XXL";
})(membership || (membership = {}));
var m = membership.M;
console.log(m);
