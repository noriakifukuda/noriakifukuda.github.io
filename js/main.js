'use strict';

// overlay
{
    const open =  document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');

    open.addEventListener('click',()=>{
        overlay.classList.add('show');
        open.classList.add('hide');

    });

    close.addEventListener('click',()=>{
        overlay.classList.remove('show');
        open.classList.remove('hide');
        overlay.classList.add('hideClose')
    });
}

// おみくじ
{
    const omikuji = document.getElementById('omikuji');

    omikuji.addEventListener('click', ()=>{
        const n = Math.random();
        if (n < 0.05) { 
            omikuji.textContent = "大吉";　//5%
        }else if (n <0.2){
            omikuji.textContent = "中吉";  //15%
        }else{
            omikuji.textContent = "凶";   //80%
        }
    });
}

