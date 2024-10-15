var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//function to scroll smoothy to sections when clicking list items
const navItems=document.querySelectorAll("nav ul li");

navItems.forEach(item =>{
    item.addEventListener("click",()=>{
        const sectionId=item.querySelector('a').getAttribute("href").substring(1);// Get section ID
        const section=document.getElementById(sectionId); //Find the corresponding section by ID

        section.scrollIntoView({behavior:"smooth"}); // Scroll smoothly to the section
    });
});

//Highlight active section on scroll
const sections=document.querySelectorAll('section');
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{
    let currentSection="";
    
    sections.forEach(section=>{
        const sectionTop=section.offsetTop;
        const sectionHeight=section.clientHeight;
        if(pageYOffset >= sectionTop- sectionHeight /3){
            currentSection=section.getAttribute("id");
        }
    });

    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href")===`#${currentSection}`){
            link.classList.add("active");
        }
    });
});
