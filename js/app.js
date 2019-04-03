const heading = document.querySelector('.fa-bars');
const navigation = document.querySelector('.nav');

heading.addEventListener('click', () => {
    if(navigation.style.display == 'none'){
        navigation.style.display = 'block';
    }else{
        navigation.style.display = 'none';
    }
    
})