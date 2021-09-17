// Vent til DOM er klar
document.addEventListener('DOMContentLoaded',
    function() {
        document.removeEventListener('DOMContentLoaded', arguments.callee, false);
        // Få alle knappene div
        var buttons = document.getElementsByClassName('button-div');
        var index = 0, length = buttons.length;
        for (; index < length; index++) {
            // Kontroller for hver enkelt om den har en localStorage verdi
            if (localStorage.getItem(buttons[index].id) == 'clicked') {
                buttons[index].innerHTML = 'Takk for din stemme.';
            }
        }
    }, false
);

function recordFeedback(id, response) {
    userResponse = response.value;
    var div = document.getElementById('button-' + id);
    if (userResponse === 'yes') {
        div.innerHTML = 'Takk for din stemme.';
        // Få lagring og analyser den til et objekt
        var storage = JSON.parse(localStorage.getItem('userResponses'));
        // Initialiser det hvis det ikke finnes lagringsplass
        if (!storage) storage = {};
        storage['button-' + id] = 'clicked';
        // Gjør det til en streng og sett det
        localStorage.setItem('userResponses', JSON.stringify(storage));
    }
}

document.addEventListener('DOMContentLoaded',
    function() {
        document.removeEventListener('DOMContentLoaded', arguments.callee, false);
        var storage = JSON.parse(localStorage.getItem('userResponses'));
        // Ikke kast bort tid på å finne eller sløyfe hvis det ikke er stemmer
        if (storage) {
            var buttons = document.getElementsByClassName('button-div');
            var index = 0, length = buttons.length;
            for (; index < length; index++) {
                if (storage[buttons[index].id] == 'clicked') {
                    buttons[index].innerHTML = 'Thank for your feedback';
                }
            }
        }
    }, false
);

if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("result").innerHTML = "You have clicked the button " +
  localStorage.clickcount + " time(s).";