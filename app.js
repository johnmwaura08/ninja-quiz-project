 const correctAnswers = ['B','B','B','B'];
 const form = document.querySelector('.quiz-form');
 const result = document.querySelector('.result');

 form.addEventListener('submit', elem =>{
     elem.preventDefault(); //preventing default action


    let score  =0;
    const userAnswers =[form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers

    userAnswers.forEach((answer,index) =>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
//show result on page
result.querySelector('span').textContent = `${score}%`; // this gets us the span in the result div
result.classList.remove('d-none'); //we're now removing the d-none class which hides the result section. 
//we dont have an onlcick because thesubmit is the eventlistner



 } );
