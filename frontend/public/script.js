const parseJSON = async (url) =>{
    const response = await fetch(url);
    return response.json()
}


//COMPONENTS

const headerComponent = () => {
    return `
        <header>
            <div class='nav-bar'>
                <a href="" class="logo">Logo</a>
                <div class="navigation">
                    <div class="nav-items">
                        <i class="uil uil-times nav-close-btn"></i>
                        <a href="#"><i class="uil uil-home"></i>Home</a>
                        <a href="#"><i class="uil uil-compass"></i>Challenge</a>
                        <a href="#"><i class="uil uil-info-circle"></i>About</a>
                        <a href="#"><i class="uil uil-document-layout-left"></i>Blog</a>
                        <a href="#"><i class="uil uil-envelope"></i>Contact</a>
                    </div>
                </div>
                    <i class="uil uil-list-ui-alt nav-menu-btn"></i>
            </div>
        </header>
        `
}

const swiperSlideComponent = ({ title, filename, country}) =>{
    return `
        <div class='swiper-slide dark-layer'>
            <img src="/pub/img/${filename}"> 
            <div class="text-content">
                <h2 class="title">${country} <span>${title}</span></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="#" class='click-btn'>Go to Challange<i class="uil uil-arrow-right"></i></a>
            </div>
        </div>
        
       `
}


const swiperComponent = (data,comp) => {
    return`
        <div class="media-icons">
            <a href="#"><i class="uil uil-facebook-f"></i></a>
            <a href="#"><i class="uil uil-instagram"></i></a>
            <a href="#"><i class="uil uil-twitter"></i></a>
        </div>
        <div class="swiper">        
            <div class="swiper-wrapper">
                ${data.map(img=>comp(img)).join('')}
            </div>
        
        </div>       
    `
}

const swiperComponentThumb = (data,comp) => {
    return`
        <div class="thumb-swiper">        
            <div class="swiper-wrapper">
                ${data.map(img=>comp(img)).join('')}
            </div>
        
        </div>       
    `
}

const thumbsComponent = ({ filename }) => {
    return `
    <div class="swiper-slide thumb-container">
        <img src="/pub/img/${filename}">
    </div>`;
  };

const formComponent = () => {
    return `
        <div class="container">
            <div class="regform">
                <h1>Share your photos</h1>
            </div>
            <div class="main">
                <form>
                    <div class="input-field">
                        <label for="fistname">First name</label>                       
                        <input id="firstname" type="text" name="first_name">                                                
                    </div>
                    <div class="input-field">
                        <label for="lastname">Last name</label>                       
                        <input id="lastname" type="text" name="last_name">                                                
                    </div>
                    <div class="input-field">
                        <label for="email">E-mail</label>                       
                        <input id="email" type="text" name="email">                                                
                    </div>
                    <div class="input-field">
                        <label for="country">Country</label>                       
                        <input id="country" type="text" name="country">                                                
                    </div>
                    <div class="input-field">
                        <label for="title">Title</label>                       
                        <input id="title" type="text" name="title">                                                
                    </div>
                    <div class="input-field">
                        <label for="description">Description</label>                       
                        <textarea id="description" type="text" name="description"></textarea>                                            
                    </div>
                    <div class="input-field">
                        <label>Gender</label>                       
                        <select class="select" name="subject">
                            <option disabled="disabled" selected="selected">--Choose Option--</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>                                         
                    </div>

                    <div class="input-field">
                        <label for="student">Did you like?</label>                       
                        <label class="radio">
                            <input class="radio-one" type="radio" checked="checked" name="">
                            <span class="checkmark"><span>
                        Yes
                        </label>
                        <label class="radio">
                            <input class="radio-two" type="radio" checked="checked" name="">
                            <span class="checkmark"><span>
                        No
                        </label>                                          
                    </div>

                    <div class="button">
                        <button id="submit" type="submit">Send</button>
                        <button id="delete">Delete</button>
                    </div>
                </form>
            </div>   
        </div>

    `
}



/* LOAD EVENT */

const loadEvent = async () => {

    const rootElement = document.getElementById('root')
    const formElement = document.getElementById('form')

    const result = await parseJSON('image-list')

/* RENDERING TO THE DOM */

    rootElement.insertAdjacentHTML('beforeend', headerComponent());
    rootElement.insertAdjacentHTML('beforeend', swiperComponent(result,swiperSlideComponent));
    rootElement.insertAdjacentHTML('beforeend', swiperComponentThumb(result,thumbsComponent));
    formElement.insertAdjacentHTML('beforeend', formComponent());


/* STICKY HEADER */

    window.addEventListener("scroll", () => {
        const header = document.querySelector("header")
    
        header.classList.toggle("sticky", window.scrollY > 0)

    })

/* NAVBAR */

    const menuBtn = document.querySelector(".nav-menu-btn")
    const closeBtn = document.querySelector(".nav-close-btn")
    const navigation = document.querySelector(".navigation")

    menuBtn.addEventListener("click", () =>{
        navigation.classList.add("active")
    })
    closeBtn.addEventListener("click", () =>{
        navigation.classList.remove("active")
    })

/* SWIPER */
    
    const swiper = new Swiper('.swiper', {
        loop: true,
/*         thumbs: {
            swiper: swiper,
        },  */
    })

    const swiper2 = new Swiper(".thumb-swiper", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 4,
/*         freeMode: true,
        watchSlidesProgress: true, */
        thumbs: {
            swiper: swiper,
        }
    });    



}
window.addEventListener('load', loadEvent)