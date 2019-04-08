class UI {
    hidePreLoader(){
        document.querySelector('.preloader').style.display = 'none';
    }
    showNav() {
        let navContain = document.querySelector('.nav');
        navContain.classList.toggle('nav-show');
    }

    videoControl (){
         let btn = document.querySelector('.video-switch-btn');
         if(!btn.classList.contains('btnSlide')){
             btn.classList.add('btnSlide');
             document.querySelector('.video-item').pause();
         }else{
            btn.classList.remove('btnSlide');
            document.querySelector('.video-item').play();
         }
    }
}
// contain video

// windows event listener
eventL();
function eventL(){
    // hide preloader once all images and scripts have loaded
    const ui = new UI ();
    window.addEventListener('load', () => {
        ui.hidePreLoader();
    })

    // navBtn
    const navBtn = document.querySelector('.navBtn');
    navBtn.addEventListener('click', ()=> {
       ui.showNav();
    })

    const videoSwitch = document.querySelector('.video-switch');
    videoSwitch.addEventListener('click', () =>{
        ui.videoControl(); 
    })
}
