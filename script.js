// circle = 0, cross = 1

let state = 0;

const buttons = document.querySelectorAll('.btn');
const win = document.querySelector('.win');

const checkWin = () => {
    let config = [];
    let won = false;
    buttons.forEach((btn) => {
        config.push(btn.textContent);
    });
    console.log(config);
    if (config[0] == config[1] && config[1] == config[2] && config[0]) {
        won = true;
    }
    else if (config[3] == config[4] && config[4] == config[5] && config[3]) {
        won = true;
    }
    else if (config[6] == config[7] && config[7] == config[8] && config[6]) {
        won = true;
    }
    else if (config[0] == config[3] && config[3] == config[6] && config[0]) {
        won = true;
    }
    else if (config[1] == config[4] && config[4] == config[7] && config[1]) {
        won = true;
    }
    else if (config[2] == config[5] && config[5] == config[8] && config[2]) {
        won = true;
    }
    else if (config[0] == config[4] && config[4] == config[8] && config[0]) {
        won = true;
    }
    else if (config[2] == config[4] && config[4] == config[6] && config[2]) {
        won = true;
    }
    console.log(won);
    return won;
}

const playAgainBtn = document.createElement('button');
playAgainBtn.classList.add('play-again');
playAgainBtn.textContent = 'Play Again'

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (!btn.textContent) {
            btn.textContent = (state == 0 ? 'O' : 'X');
            if (checkWin() == true) {
                const message = document.createElement('h1');
                message.classList.add('win-text');
                message.textContent = `Player ${(state == 0 ? 'O' : 'X')} has won!!`;
                win.append(message);
                buttons.forEach((btn) => btn.disabled = true);
                document.querySelector('.game').after(playAgainBtn);
            }
            state = !state;
        }
    });
});

playAgainBtn.addEventListener('click', () => {
    location.reload();
})