const forms = document.querySelector('form');
//form submit button

forms.addEventListener('submit', function (e) {
    // when it use not submit on server
    e.preventDefault();

    const heights = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector("#Weight").value);
    const result = document.querySelector('#result');
    //for condition check:
    if (heights ===''|| heights < 0 || isNaN(heights)) {
        result.innerHTML = `please your height in positve number ${heights}`;
    
    }
    
    else if (weight ===" " || weight< 0 || isNaN(weight)) {
        result.innerHTML = `please Enter weight in positive number ${weight}`;
    }
    else{

        // for bmi calcution;
       const bmi =  (weight /((heights*heights)/10000)).toFixed(2);
       result.innerHTML = `<span> Your EMI is : ${bmi}</span>`;
    }

});
