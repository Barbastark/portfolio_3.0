const footerData = {
    mailIcon: "fa fa-envelope",
    mailTo: "mailto:niklas.lindb3rg@gmail.com",
    email: "niklas.lindb3rg@gmail.com",
    socialLinks: [
        {
            key: "footerLink1",
            link: "https://www.linkedin.com/in/niklas-lindberg-4695b659/",
            icon: "fa fa-linkedin fa-3x"  
        },
        {
            key: "footerLink2",
            link: "https://github.com/Barbastark?tab=repositories",
            icon: "fa fa-git fa-3x"  
        }
    ]

}

const contactFormData = {
    nodes: [
        {
            id: 1,
            name: "name",
            ["aria-label"]: "name",
            type: "text",
            placeholder: "Namn *"
        },
        {
            id: 2,
            name: "subject",
            ["aria-label"]: "subject",
            type: "text",
            placeholder: "Ämne *"
        },
        {
            id: 3,
            name: "email",
            ["aria-label"]: "email",
            type: "email",
            placeholder: "E-Post *"
        },
        {
            id: 4,
            name: "spamfilter",
            ["aria-label"]: "spam-filter",
            type: "text",
            placeholder: "Vad blir 2+2 *"
        },
        {
            id: 5,
            name: "message",
            ["aria-label"]: "message",
            type: "textarea",
            placeholder: "Skriv ett meddelande *",
            
        },
        {
            id: 6,
            type: "button",
            text: "Skicka"
        }
    ],
    state: {
        name: "",
        subject: "",
        email: "",
        spamfilter: "",
        message: ""
    }
}

export {
    footerData, 
    contactFormData
}