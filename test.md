This is the algorithm:

for (let i = 0; i <= random; i++) {
if (i % 3 == 0) {
opponentChoice = "rock";
} else if (i % 2 == 0) {
opponentChoice = "paper";
} else {
opponentChoice = "scissors";
}
}

if (opponentChoice == "rock") {
if (input == 1) {
outcome = "win";
} else if (input == 2) {
outcome = "lose";
} else {
outcome = "draw";
}
}

```
The iteration:

for (let i = 0; i <= random; i++) {
    if (i % 3 == 0) {
      opponentChoice = "rock";
    } else if (i % 2 == 0) {
      opponentChoice = "paper";
    } else {
      opponentChoice = "scissors";
    }
  }

(theres constants before that set a number 1-100)

for loop runs 100

```
