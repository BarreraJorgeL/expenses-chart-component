const BAR_CONTAINERS = Array.from(document.querySelectorAll('.day')),
    BARS = Array.from(document.querySelectorAll('.day__bar'));

BAR_CONTAINERS.forEach(bar => {
    bar.addEventListener('mouseover', e=>{
        console.log(e.target);
    });
});

function show_hideAmountPerDay(target, amount, show){
    if(show){
        const HTML = `<p class="day__bar--amount">${amount}</p>`;
        target.insertAdjacentHTML('beforebegin',HTML);
    }
    else{
        
    }
}