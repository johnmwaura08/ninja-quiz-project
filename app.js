const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', elem => {
    elem.preventDefault(); //preventing default action


    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });
    //show result on page
    scrollTo(0, 0);
    result.classList.remove('d-none'); //we're now removing the d-none class which hides the result section. 
    //we dont have an onlcick because thesubmit is the eventlistner

    let output = 0;
    const timer = setInterval(() => {
            result.querySelector('span').textContent = `${output}%`; // this gets us the span in the result div
            if (output === score) {
                     clearInterval(timer);
                                 }  
                                 else {
            output++;
        }

    }, 10);
    //soo what have we done with the setinterval?
    //First of all we set the output variable to be zero.

    // Then we've created a timer which is equal to this set interval.

    // Now the callback function  is going to fire every 10 milliseconds so every 10 milliseconds would get in the result on the text content of the result.

    // And we're certainly equal to whatever the output is at that time.

    // Now to begin with it's zero.

    // So we are put zero.

    // Then we do this a check.

    // Now if the output is equal to the score at that point then we clear the interval and we don't need to

    // do any more animation if it's not.

    // Then we add one to the output.

    // So now the output is 1 and then we run this again after another 10 milliseconds.

    // So then we output one and it's going to go all the way up to the score and at the point when

    // it reaches what value the score is then it's going to clear the interval.


});


 //window object (global object)
 //scroll method
 //setInterval fires the function on and on and on. we might want to stop