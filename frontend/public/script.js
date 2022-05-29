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
        <div class="regform">
            <h1>Share your photos</h1>
        </div>
        <div class="mane">
            <form>
                <div id="name">
                    <h2 class="name">Name</h2>
                    <input class="firstname" type="text" name="first_name"><br>
                    <label class="firstlabel">first name</label>
                    <input class="lastname" type="text" name="last_name"><br>
                    <label class="lastlabel">last name</label>
                </div>

                <h2 class="name">Email</h2>
                <input class="email" type="text" name="email">

                <h2 class="name">Country</h2>
                <input class="country" type="text" name="country">

                <h2 class="name">Title</h2>
                <input class="title" type="text" name="title">

                <h2 class="name">Subject</h2>
                <select class="option" name="subject">
                    <option disabled="disabled" selected="selected">--Choose Option</option>
                    <option>Subject 1</option>
                    <option>Subject 2</option>
                    <option>Subject 3</option>
                </select>

                <h2 class="name">Description</h2>
                <input class="description" type="text" name="description">
                
                <h2 id="student">Is it your first picture here?</h2>

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

                <button type="submit">Send</button>
                <button>Delete</button>
            </form>
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