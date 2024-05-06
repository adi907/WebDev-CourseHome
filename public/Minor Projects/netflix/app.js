const basic_card=document.getElementById("basic-card");
const pro_card=document.getElementById('pro-card');
const premium_card=document.getElementById('premium-card');
const subscribe_button=document.getElementById('subscribe-button');

function selectCard(selectedCard){
    basic_card.style.background='#e3343d';
    premium_card.style.background='#e3343d';
    pro_card.style.background='#e3343d';

    basic_card.style.boxShadow='none';
    premium_card.style.boxShadow='none';
    pro_card.style.boxShadow='none';

    selectedCard.style.background="red";
    selectedCard.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px';


    subscribe_button.removeAttribute('disabled');

}

basic_card.addEventListener('click',function(){
    selectCard(basic_card);
});

pro_card.addEventListener('click',function(){
    selectCard(pro_card);
});

premium_card.addEventListener('click',()=>{
    selectCard(premium_card);
});