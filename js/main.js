"use strict";
/*
//harjoittelut-----------
const testi = document.querySelector('#testi');
//console.log(testi);
testi.innerHTML = '<a href="http://metropolia.fi"> Moro, klikkaa tästä:DD</a>';


const piilotaElementti = (evt) => {
      console.log(evt);
      evt.target.setAttribute('class', 'hidden');
}
testi.addEventListener('click', piilotaElementti);
//huomaa järjestys, ensin toi const

const esimKappaleet = document.querySelectorAll('.esim');


console.log(esimKappaleet);

esimKappaleet[0].innerHTML = 'Eka kappale:DD';
esimKappaleet[1].innerHTML = 'Toka kappaleXDD';
//------------------------ */

//teht B

let lomakeOK = '';

const checkAttribute = (attr, elements, func) =>{   //attribute, elements.  funktion tarkoitus olla monikäyttöinen
  elements.forEach( (el) => {
    if (el.hasAttribute(attr)) {
      func(el);
    }
  });
};


const checkEmpty = (el) => {
  //console.log(el);
  if (el.value === '') {
    //el.style = 'border: 1px solid red';
    el.setAttribute('style', 'border: 1px solid red');
    lomakeOK += '0';
  }else{
    el.setAttribute('style', '');
    lomakeOK += '1';
  }

};

const checkPattern = (el) => {
  console.log(el.getAttribute('pattern'));
  const pat = el.getAttribute('pattern');
  const lauseke =  new RegExp(pat,'i');
  if (!lauseke.exec(el.value) && el.value!=='') {
      el.setAttribute('style', 'border: 1px solid yellow');
    lomakeOK += '0';
  }else{
    if (el.value!=='') {
      el.setAttribute('style', '');
      lomakeOK += '1';
    }
  }
};

const inputElements = document.querySelectorAll('input');
//checkAttribute('required', inputElements, checkEmpty);  //huom ei checkEmpty()  koska kutsuisi samantien eikä toimisi

const lomake = document.querySelector('form');

lomake.addEventListener('submit', (evt) => {
  evt.preventDefault();
  lomakeOK = '';
  checkAttribute('required', inputElements, checkEmpty); //estetään lomakkeen lähetys ja tarkistetaan, sit värjätään punaseks
  checkAttribute('pattern', inputElements, checkPattern);
  //tarkastetaan onko nollia
  console.log(lomakeOK);
  const lauseke =  new RegExp('0');
  if (!lauseke.exec(lomakeOK)){
    lomake.submit();
  }
});

