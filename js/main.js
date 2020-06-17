const btn = document.querySelector('.switch');
const basic = document.querySelector('.price-basic');
const pro = document.querySelector('.price-pro');
const master = document.querySelector('.price-master');

btn.onclick = (e) => {
    
    e.target.classList.toggle('active');

    if(btn.classList.contains('active')){
        basic.textContent = "199.99";
        pro.textContent = "249.99";
        master.textContent = "399.99";
    }else{
        basic.textContent = "19.99";
        pro.textContent = "24.99";
        master.textContent = "39.99";
    }

}

