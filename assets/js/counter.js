const numbers = document.getElementById("numbers");
var numbersCoords = numbers.getBoundingClientRect();
var topNumbersCoords = numbersCoords.top;

function contador() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            
            if (count < target) {
                counterFixed = count + inc;
                counter.innerText = counterFixed.toFixed(1);
                setTimeout(updateCount, 2);
            } else {
                counter.innerText = target;}
            };
            updateCount();
        });
    }
    
window.onscroll = function() {
        var y = window.scrollY;
        
        if (y +500 >= topNumbersCoords) {
            contador()
        }

    };