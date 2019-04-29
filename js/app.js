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
    // check if empty
    checkEmpty(name, lastName, email){
        let result;
        if (name === '' || lastName === '' || email === '') {
            result = false;
        } else{
            result = true;
        }
        return result;
    }
    // show feedback
    showFeedback (text, type){
        if (type === 'success'){
           let successFeedback = document.querySelector('.drink-form-feedback');
            successFeedback.classList.add('success');
            successFeedback.innerText = text;
            this.removeAlert('success');



        }else if ( type === 'error'){
            let feedback = document.querySelector('.drink-form-feedback');
            feedback.classList.add('error');
            feedback.innerText = text;
            this.removeAlert('error');
        }       
    }
    // remove alert
    removeAlert(type){
        setTimeout(() =>{document.querySelector('.drink-form-feedback').classList.remove(type)
    }, 3000)
    }

    addCustomer (customer){
        const images = [1,2,3,4,5];
        let random = Math.floor(Math.random() * images.length);
        
        const div = document.createElement('div');
        div.classList.add('person');
        div.innerHTML = ` <img src="/img/woman${random}.jpg" alt="person" class="person-thumbnail" width="50px" >
                            <h4 class="person-name">${customer.name}</h4>
                            <h4 class="person-last-name">${customer.lastName}</h4>`
        document.querySelector('.drink-card-list').appendChild(div);
    }
    clearFields(){
        document.querySelector('.input-name').value = ''; 
        document.querySelector('.input-lastname').value = ''; 
        document.querySelector('.input-email').value = ''; 
    }
    showModal(event){
        event.preventDefault();
        if(event.target.parentElement.classList.contains('work-item-icon')){
            let dataId = event.target.parentElement.dataset.id;
            const modal = document.querySelector('.work-modal');
            const modelItem = document.querySelector('.work-modal-item');

            modal.classList.add('work-modal-show');
            modelItem.style.backgroundImage = `url(img/work${dataId}.jpg)`; 
        }
    }
    closeModal(event){
            if(event.target.parentElement.classList.contains('work-modal-close')){
                const modal = document.querySelector('.work-modal');
                modal.classList.remove('work-modal-show');
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
    // video control
    const videoSwitch = document.querySelector('.video-switch');
    videoSwitch.addEventListener('click', () =>{
        ui.videoControl(); 
    })

    // submit form
    const formSubmit = document.querySelector('.drink-form');
    formSubmit.addEventListener('submit', (e) =>{
        e.preventDefault();
        const name = document.querySelector('.input-name').value;
        const lastName = document.querySelector('.input-lastname').value;
        const email = document.querySelector('.input-email').value;
        
        let value = ui.checkEmpty(name, lastName, email);
        if (value){
            let customer = new Customer (name, lastName, email);
            ui.addCustomer(customer);
            console.log(customer)
            
            ui.showFeedback('Good to go', 'success')
            ui.clearFields(); 
        }else{
            ui.showFeedback('some form value are empty', 'error');
        }
        
    })
    // display modal
    const links = document.querySelectorAll('.work-item-icon');

    links.forEach((item)=>{
        item.addEventListener('click', (event) =>{
            ui.showModal(event);
        })
    })
    // hide modal
    const hide = document.querySelector('.fa-window-close');
    hide.addEventListener('click', (event) =>{
        ui.closeModal(event);
    })
}

function Customer(name, lastName, email ) {
     this.name = name,
     this.lastName = lastName,
     this.email = email;;
}