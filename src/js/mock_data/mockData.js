const routerData = [
    {
        id: "1",
        component: "home",
        routeKey: "routeItem_1",
        path: "/",
        exactPath: true,
    },
    {
        id: "2",
        component: "about",
        routeKey: "routeItem_2",
        path: "/about/aboutme",
        exactPath: true,
    },
    {
        id: "3",
        component: "about",
        routeKey: "routeItem_3",
        path: "/about/cv",
        exactPath: false,
    },
    {
        id: "4",
        component: "projects",
        routeKey: "routeItem_4",
        path: "/projects",
        exactPath: false,
    },
    {
        id: "5",   
        component: "contact",
        routeKey: "routeItem_5",
        path: "/contact",
        exactPath: false,
    }
    
]
const siteNavData = [
    {
     id: "1",
     key: "siteNavItem1",   
     to: "/",
     linkText: "start"
    },
    {
     id: "2",
     key: "siteNavItem2",
     to: "/about/aboutme",
     linkText: "om mig"
    },
    {
     id: "3",
     key: "siteNavItem3",   
     to: "/projects",
     linkText: "projekt"
    },
    {
     id: "4",
     key: "siteNavItem4",
     to: "/contact",
     linkText: "kontakt"
    }
]

const aboutNavData = [
    {
     id: "1",
     key: "aboutNavItem1",   
     to: "/about/aboutme",
     linkText: "om mig"
    },
    {
     id: "2",
     key: "aboutNavItem2",
     to: "/about/cv",
     linkText: "cv"
    }
]

const homePageData = 
{
    firstName: "Niklas",
    lastName: "Lindberg",
    occupation: "Webbutvecklare"
}


const aboutPageData = [
    {
        id: "1",
        key: "aboutPageContent1",
        slug: "/about/aboutme",
        fadeClass: "fade-left",   
        headerText: "Om mig",
        content: "Color contrast is a common web accessibility issue that is often overlooked. People who may have low vision, or may be colorblind, could encounter some difficulty distinguishing text from a background color if the contrast is insufficient. There are nearly three times more individuals with low vision than those with total blindness; and one out of twelve people has some sort of color deficiency. So, it is critical to consider adequate contrast between text and backgrounds." 
    },
    {
        id: "2",   
        key: "aboutPageContent2",
        slug: "/about/cv",
        fadeClass: "fade-right",   
        headerText: "CV",
        content: "Color contrast is a common web accessibility issue that is often overlooked. People who may have low vision, or may be colorblind, could encounter some difficulty distinguishing text from a background color if the contrast is insufficient. There are nearly three times more individuals with low vision than those with total blindness; and one out of twelve people has some sort of color deficiency. So, it is critical to consider adequate contrast between text and backgrounds. Color contrast is a common web accessibility issue that is often overlooked. People who may have low vision, or may be colorblind, could encounter some difficulty distinguishing text from a background color if the contrast is insufficient. There are nearly three times more individuals with low vision than those with total blindness; and one out of twelve people has some sort of color deficiency. So, it is critical to consider adequate contrast between text and backgrounds."
    },
    {
        id: "3",
        key: "aboutPageContent3",
        slug: "/about/test1",
        fadeClass: "fade-left",   
        headerText: "Test1",
        content: "Color contrast is a common web accessibility issue that is often overlooked. People who may have low vision, or may be colorblind, could encounter some difficulty distinguishing text from a background color if the contrast is insufficient. There are nearly three times more individuals with low vision than those with total blindness; and one out of twelve people has some sort of color deficiency. So, it is critical to consider adequate contrast between text and backgrounds." 
    },
    {
        id: "4",   
        key: "aboutPageContent3",
        slug: "/about/test2",
        fadeClass: "fade-right",   
        headerText: "Test2",
        content: "Color contrast is a common web accessibility issue that is often overlooked. People who may have low vision, or may be colorblind, could encounter some difficulty distinguishing text from a background color if the contrast is insufficient. There are nearly three times more individuals with low vision than those with total blindness; and one out of twelve people has some sort of color deficiency. So, it is critical to consider adequate contrast between text and backgrounds. Color contrast is a common web accessibility issue that is often overlooked. People who may have low vision, or may be colorblind, could encounter some difficulty distinguishing text from a background color if the contrast is insufficient. There are nearly three times more individuals with low vision than those with total blindness; and one out of twelve people has some sort of color deficiency. So, it is critical to consider adequate contrast between text and backgrounds."
    }
]



export {routerData, siteNavData, aboutPageData, homePageData, aboutNavData}