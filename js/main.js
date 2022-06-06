const DATA = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];

// CREATING GRAPHIC -------------
const GRAPHIC_DESIGN_CONTAINER = document.querySelector('.balance--week__graphic');
const GRAPHIC_TITLE_CONTAINER = document.querySelector('.balance--week__title');

const GRAPHIC_TITLE = `Spending - Last ${DATA.length} days`;

const GRAPHIC_DESIGN = dt =>`<li class="day">
    <div class="day__bar" value="${dt.amount}"></div>
    <p class="day__name">${dt.day}</p>
  </li>`

function createGraphic(){
  GRAPHIC_TITLE_CONTAINER.innerText = GRAPHIC_TITLE;
  createBars();
}

function createBars(){
  DATA.slice().reverse().forEach( dt => {
    GRAPHIC_DESIGN_CONTAINER.insertAdjacentHTML('afterbegin', GRAPHIC_DESIGN(dt));
  });
}

createGraphic();

// CREATING FLOAT DESCRIPTION ----------
const BAR_CONTAINERS = Array.from(document.querySelectorAll('.day'));
const BARS = Array.from(document.querySelectorAll('.day__bar'));

function setHeightBars(){
  BARS.forEach(e => {
    e.style.height = (e.attributes.value.value) * 2 + 'px';
  });
}
function compareNumbers(a, b){
  return a - b;
}

function resaltMostTallBar(){
  let amounts =[];
  let mostHightAmount;
  let mostTallBar;
  BARS.forEach(e => {
    amounts.push(e.attributes.value.value);
  });
  mostHightAmount = amounts.sort(compareNumbers)[amounts.length - 1];
  console.log(mostHightAmount);
  BARS.forEach(e => {
    if(e.attributes.value.value === mostHightAmount){
      e.classList.add('dangerous-day');
    }
  });
}

setHeightBars();
resaltMostTallBar();

function showFloatingDescription(target, show){
  try{
    if(show){
      const amount =  target.firstElementChild.attributes.value.value;
      const DESCRIPTION = `<p class="day__bar--amount">$${amount}</p>`;
      target.insertAdjacentHTML('beforeend', DESCRIPTION);
    }
    else{
      const DESCRIPTION = document.querySelector('.day__bar--amount');
      DESCRIPTION.remove();
    }
  }
  catch(err){
    return
  }
}

BAR_CONTAINERS.forEach(bar => {
    bar.addEventListener('mouseenter', () => {
      showFloatingDescription(bar, true);
    });
    bar.addEventListener('mouseleave', e => {
      showFloatingDescription(bar, false);
    });
});
