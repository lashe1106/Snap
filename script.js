const body = document.querySelector('body');
const logoNav = document.querySelector('.logoNav');
const header = document.querySelector('.header');
const navigation = document.querySelector('.navigation');
const navigationNav = document.querySelectorAll('.nav');
const navMain = document.querySelector('.nav-main');
const navFeatures = document.getElementById('nav-features');
const Features = document.querySelector('#nav-features nav');
const imgFeatures = document.querySelector('#nav-features img');
const featuresDiv = document.getElementById('features-content');
const navCompany = document.getElementById('nav-company');
const Company = document.querySelector('#nav-company nav');
const imgCompany = document.querySelector('#nav-company img');
const companyDiv = document.getElementById('company-content');
const menuBtn = document.querySelector('.loginBtn');
const loginBtn = document.querySelector('#login');
const registerBtn = document.querySelector('#register')
const otherBtn = document.querySelector('#btn');
const divMenu = document.querySelector('.iconMenu');
const iconMenu = document.querySelector('.iconMenu img');
const mobileImg = document.querySelector('.imgM');
const menuContent = document.querySelector('#menu-content');
const iconCloseMenu = document.createElement('img');
const initialDivMenu = divMenu.style.cssText;
const initialNavigation = navigation.style.cssText;
const initialBody = body.style.cssText;
const initialMenuBtn = menuBtn.style.cssText;
const initialMobileImg = mobileImg.style.cssText;
const initialOtherBtn = otherBtn.style.cssText;
const initialFeaturesDiv = featuresDiv.style.cssText;
const initialCompanyDiv = companyDiv.style.cssText;

body.addEventListener('click', operateBody);

navigationNav.forEach(nav => operateNavigationNav(nav));

navFeatures.addEventListener('click', operateNavFeatures);

navCompany.addEventListener('click', operateNavCompany);

loginBtn.addEventListener('click', () => loginBtn.style.color = 'hsl(0, 0%, 8%)');

registerBtn.addEventListener('click', operateRegisterBtn);

otherBtn.addEventListener('click', operateOtherBtn);

iconMenu.addEventListener('click',operateIconMenu); 

function operateBody(event) {
    if (!navFeatures.contains(event.target)) {
        featuresDiv.style.display = 'none';
        Features.style.color = 'hsl(0, 0%, 41%)';
        imgFeatures.src = './images/icon-arrow-down.svg';
    };

    if (!navCompany.contains(event.target)) {
        companyDiv.style.display = 'none';
        Company.style.color = 'hsl(0, 0%, 41%)';
        imgCompany.src = './images/icon-arrow-down.svg';
    };
    
    navigationNav.forEach((nav) => {
        if (!nav.contains(event.target)) {
            nav.style.color = 'hsl(0, 0%, 41%)';
        }
    }); 

    if (!otherBtn.contains(event.target)) {
        otherBtn.style.color = 'hsl(0, 0%, 98%)';
        otherBtn.style.border = 'none';
        otherBtn.style.backgroundColor = 'hsl(0, 0%, 8%)';
        otherBtn.style.fontWeight = '500';
    };

    if (!registerBtn.contains(event.target)) {
        registerBtn.style.color = 'hsl(0, 0%, 41%)';
        registerBtn.style.border = '1px solid hsl(0, 0%, 41%)';
        registerBtn.style.backgroundColor = 'hsl(0, 0%, 98%)';
    };

    if (!loginBtn.contains(event.target)) {
        loginBtn.style.color = 'hsl(0, 0%, 41%)';
    };
}; 

function operateNavigationNav(nav) {
    nav.addEventListener('click', () => {
        navigationNav.forEach((i) => {
           i.style.color = 'hsl(0, 0%, 41%)';
        });

        nav.style.color = 'hsl(0, 0%, 8%)';

        featuresDiv.style.display ='none';
        Features.style.color = 'hsl(0, 0%, 41%)';
        imgFeatures.src = './images/icon-arrow-down.svg';

        companyDiv.style.display = 'none';
        Company.style.color = 'hsl(0, 0%, 41%)';
        imgCompany.src = './images/icon-arrow-down.svg';    
    });
}

function operateNavFeatures() {
    imgFeatures.src = './images/icon-arrow-up.svg';
    Features.style.color = 'hsl(0, 0%, 8%)';
    featuresDiv.style.display ='flex';
    featuresDiv.innerHTML = '<div style="display: flex; flex-direction: column; gap: 15px;"><div><img src="./images/icon-todo.svg" alt=""><h3>Todo List</h3></div><div><img src="./images/icon-calendar.svg" alt=""><h3>Calendar</h3></div><div><img src="./images/icon-reminders.svg" alt=""><h3>Reminders</h3></div><div><img src="./images/icon-planning.svg" alt=""><h3>Planning</h3></div></div>'
};

function operateNavCompany() {
    imgCompany.src = './images/icon-arrow-up.svg';
    Company.style.color = 'hsl(0, 0%, 8%)';
    companyDiv.style.display = 'flex';
    companyDiv.innerHTML = '<h3>History</h3><h3>Our Team</h3><h3>Blog</h3>';
}

function operateRegisterBtn() {
    registerBtn.style.color = 'hsl(0, 0%, 8%)';
    registerBtn.style.border = '1px solid hsl(0, 0%, 8%)';
    registerBtn.style.backgroundColor = 'hsl(0, 0%, 98%)';
};

function operateOtherBtn() {
    otherBtn.style.color = 'hsl(0, 0%, 8%)';
    otherBtn.style.border = '1px solid hsl(0, 0%, 8%)';
    otherBtn.style.backgroundColor = 'hsl(0, 0%, 98%)';
    otherBtn.style.fontWeight = '700';
};

function operateIconMenu() {
    iconCloseMenu.src = './images/icon-close-menu.svg';
    iconMenu.parentNode.replaceChild(iconCloseMenu, iconMenu);
    iconCloseMenu.style.float = 'right'

    body.style.zIndex = '2'
    
    mobileImg.style.opacity = '0.65'

    divMenu.style.backgroundColor = 'hsl(0, 0%, 98%)'
    divMenu.style.zIndex = '1'
    divMenu.style.width = '60%'
    divMenu.style.position = 'absolute'
    divMenu.style.top = '0px'
    divMenu.style.right = '0px'
    divMenu.style.margin = '-10px -20px 0px 0px'
    divMenu.style.height = document.documentElement.scrollHeight + 'px';
    divMenu.style.boxSizing = 'border-box';
    divMenu.style.padding = '20px'
    divMenu.style.gap = '35px'

    operateAtMobile()
    
    iconCloseMenu.addEventListener('click', () => {
        divMenu.style.cssText = initialDivMenu;
        navigation.style.cssText = initialNavigation;
        body.style.cssText = initialBody;
        menuBtn.style.cssText = initialMenuBtn;
        otherBtn.style.cssText = initialOtherBtn;
        mobileImg.style.cssText = initialMobileImg;

        otherBtn.addEventListener('click', operateOtherBtn);

        iconCloseMenu.parentNode.replaceChild(iconMenu, iconCloseMenu);
    });
};

function operateAtMobile() {
    body.style.background = 'linear-gradient(rgba(58, 58, 58, 0.65), rgba(58, 58, 58, 0.65))'

    divMenu.style.display = 'flex'
    divMenu.style.flexDirection = 'column'

    otherBtn.style.opacity = '0.65'
    otherBtn.removeEventListener('click', operateOtherBtn);

    menuContent.appendChild(navigation);
    menuContent.style.width = '100%'
    
    navigation.style.display = 'flex'
    navigation.style.flexDirection = 'column'
    navigation.style.alignItems = 'normal'
    navigation.style.gap = '25px'
    navigation.style.marginBottom = '25px'
    
    navMain.style.flexDirection = 'column'
    navMain.style.alignItems = 'flex-start'
    navMain.style.gap = '25px'

    navFeatures.style.gap = '30px'
    navCompany.style.gap = '27px'

    featuresDiv.style.position = 'static'
    featuresDiv.style.backgroundColor = 'hsl(0, 0%, 98%)';
    featuresDiv.style.boxShadow = 'none'
    featuresDiv.style.marginLeft = '15px'
    featuresDiv.style.padding = '0px'

    companyDiv.style.position = 'static'
    companyDiv.style.backgroundColor = 'hsl(0, 0%, 98%)';
    companyDiv.style.boxShadow = 'none'
    companyDiv.style.marginLeft = '15px'
    companyDiv.style.padding = '0px'

    menuBtn.style.display = 'flex'
    menuBtn.style.flexDirection = 'column'
    menuContent.appendChild(menuBtn)
    
    loginBtn.style.marginLeft = '0px'
    registerBtn.style.marginLeft = '0px'
    registerBtn.style.width = '100%'
};

function watchScreenSize() {
    if (window.innerWidth > 768) {
        divMenu.style.display = 'none'

        body.style.background = 'none'
        body.style.backgroundColor = 'hsl(0, 0%, 98%)'

        otherBtn.style.opacity = '1'
        otherBtn.addEventListener('click', operateOtherBtn);
        
        logoNav.appendChild(navigation);

        header.appendChild(menuBtn);

        navigation.style.cssText = initialNavigation

        navMain.style.flexDirection = 'row'
        navMain.style.alignItems = 'center'
        navMain.style.gap = '40px'

        featuresDiv.style.cssText = initialFeaturesDiv;
        companyDiv.style.cssText = initialCompanyDiv;

        navFeatures.style.gap = '5px'
        navCompany.style.gap = '5px'

        menuBtn.style.cssText = initialMenuBtn;

        loginBtn.style.marginLeft = '20px'
        registerBtn.style.marginLeft = '20px'
        registerBtn.style.width = '80px'
    } else {
        if (window.getComputedStyle(divMenu).gap === '35px') {
            operateAtMobile()
            return;
        }
        divMenu.style.display = 'flex'
        divMenu.style.flexDirection = 'column'
    };
};

window.addEventListener('resize', watchScreenSize);

watchScreenSize();




