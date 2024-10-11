
/*  icon header  active class to be clicking */

document.querySelectorAll('.list-items a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Remove active class from all links
        document.querySelectorAll('.list-items a')
        .forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to the clicked link
        this.classList.add('active');
    });
});


//-------------------------------------------------------------//



// second-header-page down-header active class to be clicking //

document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.down-header .lists');

    listItems.forEach(item => {
        item.addEventListener('click', function() {
            listItems.forEach(el => el.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

//  --------------------------------------------------------------  //




// image clicking with the active class  for second-header-page //

document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.down-header .lists');
    const images = document.querySelectorAll('.side-slide-images img');
    const firstImage = document.getElementById('image1');

    // Show the first image by default
    if (firstImage) {
        firstImage.classList.add('active');
    }

    if (listItems.length > 0 && images.length > 0) {
        listItems.forEach(item => {
            item.addEventListener('click', function() {
                listItems.forEach(el => el.classList.remove('active'));
                this.classList.add('active');

                // Get the image ID from the data-image attribute
                const imageId = this.getAttribute('data-image');
                const selectedImage = document.getElementById(imageId);

                if (selectedImage) {
                    images.forEach(img => img.classList.remove('active'));
                    selectedImage.classList.add('active');
                }
            });
        });
    }
});

// ------------------------------------------------------------ //




/* To make the hidden lists items visible and clicking .  */ 

const feature = document.getElementById('feature');
const sectionFeature = document.getElementById('click-feature');
const scroll = document.getElementsByClassName('scroll-container')[0]; // Access the first element
const iconHeader = document.querySelector('.icon-header'); 
const html = document.documentElement;

feature.addEventListener('click', function(event){
    sectionFeature.style.display = 'block';
    sectionsolution.style.display = 'none';
    sectionplan.style.display = 'none';
    Sectionresources.style.display = 'none';
    scroll.style.display = 'none';
    iconHeader.classList.add('active'); // To activate the box shadow when clicked
    feature.classList.add('active');
    html.style.overflowY = 'hidden'; // Disable scrolling
    event.stopPropagation(); // Prevent this click from triggering the body click event
});

document.addEventListener('click', function(){
    sectionFeature.style.display = 'none';
    feature.classList.remove('active');
    scroll.style.display = 'flex'; 
    iconHeader.classList.remove('active');
    html.style.overflow = 'auto'; // able scrolling once more
});

// Prevent hiding the section when clicking inside the section 
sectionFeature.addEventListener('click', function(event){
    event.stopPropagation();
});



// 2nd list items SOLUTIONS  //

const solution = document.getElementById('Solutions');
const sectionsolution = document.getElementById('solutions-header');

solution.addEventListener('click', function(event){
    sectionsolution.style.display = 'flex';
    sectionFeature.style.display = 'none';
    sectionplan.style.display = 'none';
    Sectionresources.style.display = 'none';
    scroll.style.display = 'none';
    html.style.overflow = 'hidden'; // Disable scrolling
    iconHeader.classList.add('active'); // To activate the box shadow when clicked
    solution.classList.add('active');
    event.stopPropagation(); 
});

document.addEventListener('click', function(){
    sectionsolution.style.display = 'none';
    solution.classList.remove('active');
    scroll.style.display = 'flex'; 
    html.style.overflow = 'auto'; // able scrolling once more
    iconHeader.classList.remove('active'); 
});



sectionsolution.addEventListener('click', function(event){
    event.stopPropagation();
});




//  3rd lists item plans   // 

const plan = document.getElementById('plans');
const sectionplan = document.getElementById('plans-header')

plan.addEventListener('click', function(event) {
    sectionplan.style.display = 'flex';
    sectionsolution.style.display = 'none';
    sectionFeature.style.display = 'none';
    Sectionresources.style.display = 'none';
    scroll.style.display = 'none';
    html.style.overflow = 'hidden'; // Disable scrolling
    iconHeader.classList.add('active'); // To activate the box shadow when clicked
    sectionplan.classList.add('active');
    event.stopPropagation(); 
});

document.addEventListener('click', function(){
    sectionplan.style.display = 'none';
    plan.classList.remove('active');
    scroll.style.display = 'flex'; 
    html.style.overflow = 'auto'; // able scrolling once more
    iconHeader.classList.remove('active'); 
});

sectionsolution.addEventListener('click', function(event){
    event.stopPropagation();
});




/* fourth list items RESOURCES */

const Resources = document.getElementById('resources');
const Sectionresources = document.getElementById('resources-header');

Resources.addEventListener('click', function(event) {
    Sectionresources.style.display = 'block';
    sectionplan.style.display = 'none';
    sectionsolution.style.display = 'none';
    sectionFeature.style.display = 'none';
    scroll.style.display = 'none';
    html.style.overflow = 'hidden'; // Disable scrolling
    iconHeader.classList.add('active'); // To activate the box shadow when clicked
    Resources.classList.add('active');
    Sectionresources.classList.add('active');
    event.stopPropagation(); 
});


document.addEventListener('click', function(){
    Sectionresources.style.display = 'none';
    Resources.classList.remove('active');
    scroll.style.display = 'flex'; 
    html.style.overflow = 'auto'; // able scrolling once more
    iconHeader.classList.remove('active'); 
});

Sectionresources.addEventListener('click', function(event){
    event.stopPropagation();
});





/* To get data links for 3rd lists item  */ 


document.addEventListener('DOMContentLoaded', function() {
    const planContents = document.querySelectorAll('.plans .plans-header .table .plans-content');

    planContents.forEach(planContent => {
        planContent.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
    });
});


/* -------------------------------------------- */ 






/* Third-section-page to make the overflow container scroll with arrows or mouse*/ 


document.addEventListener('DOMContentLoaded', (event) => {
    const overflowContainer = document.querySelector('.overflow-contents');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    if (!overflowContainer || !leftArrow || !rightArrow) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    // Mouse down event
    overflowContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        overflowContainer.classList.add('active');
        startX = e.pageX - overflowContainer.offsetLeft;
        scrollLeft = overflowContainer.scrollLeft;
    });

    // Mouse leave event
    overflowContainer.addEventListener('mouseleave', () => {
        isDown = false;
        overflowContainer.classList.remove('active');
    });

    // Mouse up event
    overflowContainer.addEventListener('mouseup', () => {
        isDown = false;
        overflowContainer.classList.remove('active');
    });

    // Mouse move event
    overflowContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - overflowContainer.offsetLeft;
        const walk = (x - startX) * 3; // Adjust scroll speed
        overflowContainer.scrollLeft = scrollLeft - walk;
    });

    // Right arrow click event
    rightArrow.addEventListener('click', () => {
        overflowContainer.scrollLeft += 350; // Adjust scroll amount as needed
    });

    // Left arrow click event
    leftArrow.addEventListener('click', () => {
        overflowContainer.scrollLeft -= 350; // Adjust scroll amount as needed
    });
});


/* ------------------------------------------------------------------------------------- */





// making the input text , max be 5000 and nothing more than it . selecting all the desire input i want. //

// Select the elements
const rangeInput = document.querySelector('.inp-2');
const textInput = document.querySelector('.inp-1');
const annualPriceSpan = document.querySelector('.annual-price');
const valueSpan = document.querySelector('.value-4');

// Function to update values
function updateValues() {
    if (!rangeInput || !textInput || !annualPriceSpan || !valueSpan) return;

    let rangeValue = parseInt(rangeInput.value);
    textInput.value = rangeValue;

    // Calculate annual price
    let maxRange = 5000;
    let minAnnualPrice = 210.00;
    let maxAnnualPrice = 88.50; 
    let annualPrice = minAnnualPrice - ((minAnnualPrice - maxAnnualPrice) / maxRange * rangeValue);
    annualPriceSpan.textContent = annualPrice.toFixed(2);

    // Calculate per user/month value
    let minPerUserPrice = 17.50;
    let maxPerUserPrice = 7.38; 
    let perUserValue = minPerUserPrice - ((minPerUserPrice - maxPerUserPrice) / maxRange * rangeValue);
    valueSpan.textContent = perUserValue.toFixed(2);
}

// Check if elements exist before adding event listeners
if (rangeInput && textInput) {
    rangeInput.addEventListener('input', updateValues);

    textInput.addEventListener('input', function() {
        let textValue = parseInt(this.value);

        if (isNaN(textValue) || textValue < 50) {
            this.value = 50;
        } else if (textValue > 5000) {
            this.value = 5000;
        }

        rangeInput.value = this.value;
        updateValues();
    });

    // Initialize values
    updateValues();
}






/* Hamburger menu button */ 


const menuBtn = document.getElementById('menu-btn');
const cancelBtn = document.getElementById('cancel-btn');
const IconHeader = document.querySelector('.icon-header');
const ICon = document.getElementById('all-icon');
const ListItems = document.querySelector('.list-items');
const ListLogins = document.querySelector('.lists-login');



menuBtn.addEventListener('click', function() {
    menuBtn.style.display = 'none';
    cancelBtn.style.display = 'inline'; // display cancel button
    IconHeader.style.height = 'fit-content';
    IconHeader.style.flexDirection = 'column';
    ListItems.style.display = 'flex';
    ListLogins.style.display = 'inline';
    ClickItems.style.paddingTop = '0px';
});


cancelBtn.addEventListener('click', function() {
    cancelBtn.style.display = 'none';
    if (menuBtn) {
        menuBtn.style.display = 'inline';   
    }

    if (IconHeader) {
        IconHeader.style.height = 'auto';
    }

    if (Icon) {
        Icon.style.display = 'inline';  
    }

    // Ensure ListItems exists before hiding it
    if (ListItems) {
        ListItems.style.display = 'none';   
    }

    // Ensure ListLogins exists before hiding it
    if (ListLogins) {
        ListLogins.style.display = 'none'; 
    }
});



// hamburger menu for the back-cancel button //

const BackButtons = document.querySelectorAll('.back');
const Icon = document.getElementById('all-icon');
const IHeader = document.querySelector('.icon-header');
const FeatSec = document.getElementById('click-feature');
const SolSec = document.getElementById('solutions-header');
const PlanSec = document.getElementById('plans-header');
const ResSec = document.getElementById('resources-header');
const ClickSecFeat = document.getElementById('feature');
const ClickSecSolution = document.getElementById('Solutions');
const ClickPlans = document.getElementById('plans');
const ClickResources = document.getElementById('resources')
const ClickItems = document.querySelector('.list-items');
const ClickLogins = document.querySelector('.lists-login');



BackButtons.forEach(function(BackBtn) {
    BackBtn.addEventListener('click', function() {
        Icon.style.left = '0em';
        IHeader.style.height = 'fit-content';
        IHeader.style.flexDirection = 'column';
        FeatSec.style.display = 'none';
        SolSec.style.display = 'none';
        PlanSec.style.display = 'none';
        ResSec.style.display = 'none';
        ClickItems.style.paddingTop = '0px';
    });
});


// Function to hide all sections
function hideAllSections() {
    FeatSec.style.display = 'none';
    SolSec.style.display = 'none';
    PlanSec.style.display = 'none';
    ResSec.style.display = 'none';
}


ClickSecFeat.addEventListener('click', function() {

     // Check if the screen width is 1115px or below

     if (window.innerWidth <= 991) {
        Icon.style.left = '-15em';
    } else {
        Icon.style.left = '0';
    }

})


ClickSecSolution.addEventListener('click', function() {

   // Check if the screen width is 1115px or below

     if (window.innerWidth <= 991) {
        Icon.style.left = '-15em';
    } else {
        Icon.style.left = '0';
    }
    
})


ClickPlans.addEventListener('click', function() {

     // Check if the screen width is 1115px or below

     if (window.innerWidth <= 991) {
        Icon.style.left = '-15em';
    } else {
        Icon.style.left = '0';
    }
   
})


ClickResources.addEventListener('click', function() {

     // Check if the screen width is 1115px or below

     if (window.innerWidth <= 991) {
        Icon.style.left = '-15em';
    } else {
        Icon.style.left = '0';
    }

  
})


const SIGNUP = document.querySelectorAll('.signup');

SIGNUP.forEach(function(button) {
    button.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
});
