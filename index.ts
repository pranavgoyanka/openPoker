import i = require("prompt-sync");
import clc = require("cli-color");
const prompt = i({ sigint: true })

let names = ["Ekaansh", "Pranav"]
let players = names.map(name => {
	return ({
		name,
		score: 0
	})
})

const loseMoney = 5;
const winMoney = (players.length - 1) * loseMoney;

while (true) {
	const winner = prompt("Winner? ");

	players.forEach((player, index) => {
		if(parseInt(winner) <= players.length) {
			if (index + 1 === parseInt(winner)) {
				player.score += winMoney;
				console.log(clc.greenBright(player.name + ": " + player.score));
			} else {
				player.score -= loseMoney;
				console.log(clc.redBright(player.name + ": " + player.score));
			}
		}
	})
	console.log(clc.black("---"));
}