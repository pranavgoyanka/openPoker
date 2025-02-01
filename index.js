"use strict";
exports.__esModule = true;
var i = require("prompt-sync");
var clc = require("cli-color");
var prompt = i({ sigint: true });
var names = ["Ekaansh", "Pranav", "Manasvi"];
var players = [];
names.map(function (name) {
    players.push({
        name: name,
        score: 0
    });
});
// let players = [{name: "Ekaansh", score: 0}, {name: "Pranav", score: 0}];
var loseMoney = 5;
var winMoney = (players.length - 1) * loseMoney;
var _loop_1 = function () {
    var winner = prompt("Winner? ");
    players.map(function (player, index) {
        if (parseInt(winner) <= players.length) {
            if (index + 1 === parseInt(winner)) {
                player.score += winMoney;
                console.log(clc.greenBright(player.name + ": " + player.score));
            }
            else {
                player.score -= loseMoney;
                console.log(clc.redBright(player.name + ": " + player.score));
            }
        }
    });
    console.log(clc.black("---"));
};
while (true) {
    _loop_1();
}
