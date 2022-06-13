let container = document.querySelector('.row')
let data = [
    {
        topic: `შესავალი Web Developement-ში, \n  HTML ელემენტები`,
        files: [{ "name": "დიზაინი", "file": "./Files/დღე 1.xd" }],
        links: [{name:'HTML Elements', link:'https://www.w3schools.com/html/html_elements.asp'}]
    },
    {
        topic: "HTML Forms, CSS Basics, \n CSS Display (Block,Inline,Inline-Block,None)",
        files: [
            { "name": "სავარჯიშო 1", "file": "./Files/დღე 2 სავარჯიშო.docx" },
            { "name": "სავარჯიშო 2", "file": "./Files/დღე 2 სავარჯიშო 2.docx" },
            { "name": "დიზაინი", "file": "./Files/დღე 2.xd" },
            { "name": "დიზაინი 2", "file": "./Files/დღე 2 ვარ.2.xd" }
        ],
        links: [
            {name:'Forms', link:'https://www.w3schools.com/html/html_forms.asp'},
            {name: 'CSS Selectors', link: 'https://www.w3schools.com/cssref/css_selectors.asp'},
        ]
    },
    {
        topic: "CSS Box Model, CSS Positions",
        files: [{ "name": "დიზაინი", "file": "./Files/დღე 3.xd" }],
        links: [
            {name: 'CSS Box Model', link: 'https://www.w3schools.com/css/css_boxmodel.asp'},
            {name: 'CSS Positions', link: 'https://www.w3schools.com/css/css_positioning.asp'},
    ]
    },
    {
        topic: "CSS Animations, Importing Fonts, \n Reset CSS",
        files: [
            { "name": "სავარჯიშო 1", "file": "./Files/დღე 4 სავარჯიშო.docx" },
            { "name": "სავარჯიშო 2", "file": "./Files/დღე 4 Animations.docx" },
            { "name": "დიზაინი ", "file": "./Files/დღე 4.xd" }],
        links: [{ name: 'Reset CSS', link: 'https://justpaste.it/6y9vz' },
        { name: 'Animations ( W3School)', link: 'https://www.w3schools.com/css/css3_animations.asp' },
        { name: 'Google Fonts', link: 'https://fonts.google.com/' },
        { name: 'Georgian Fonts', link: 'https://web-fonts.ge/' },
        { name: 'Transfonter', link: 'https://transfonter.org/' }
        ]
    },
    {
        topic: "GitHub, CSS Display Flex",
        files: [{ "name": "დიზაინი", "file": "./Files/დღე 5.xd" }],
        links: [
            { name: 'GitHub', link: 'https://github.com/' },
            { name: 'GitHub Desktop', link: 'https://desktop.github.com/' },
            { name: 'Display Flex (W3School)', link: 'https://www.w3schools.com/css/css3_flexbox.asp' },
        ]
    },
]
data.slice(0).reverse().map((item, index) => {
    // Card
    let card = document.createElement('div')
    card.classList.add('col-3-md')
    card.classList.add('p-4')
    card.classList.add('m-5')
    card.classList.add('shadow')
    container.appendChild(card)
    // Day
    let day = document.createElement('h2')
    day.innerText = `დღე ${data.length - index}`
    day.style.fontWeight = 'bold'
    day.style.fontFamily = "BPG QuadroSquare Mtavruli"
    card.appendChild(day)

    // Topics

    let topic = document.createElement('h6')
    topic.innerText = `თემები: ${item.topic}`
    topic.style.fontFamily = "BPG QuadroSquare Mtavruli"
    card.appendChild(topic)

    // Tasks
    let task = document.createElement('p')
    task.innerText = `დავალებები: `
    task.style.fontFamily = "BPG QuadroSquare Mtavruli"
    task.style.marginTop = '20px'
    card.appendChild(task)

    // links
    item.files.map((item) => {
        let wrapper = document.createElement('div')
        wrapper.style.display = 'flex'
        wrapper.style.justifyContent = 'space-between'
        wrapper.style.padding = '20px'
        wrapper.style.alignItems = 'center'
        card.appendChild(wrapper)

        let davaleba = document.createElement('p')
        davaleba.innerText = `${item.name}`
        davaleba.style.fontFamily = "BPG QuadroSquare Mtavruli"
        wrapper.appendChild(davaleba)

        // let link = document.createElement('a')
        // link.setAttribute('href', `${item.file}`)
        // link.setAttribute('target', `_blank`)
        // wrapper.appendChild(link)

        let form = document.createElement('form')
        form.setAttribute('method', 'get')
        form.setAttribute('action', item.file)
        wrapper.appendChild(form)
        form.style.width = 'fit-content'

        let button = document.createElement('button')
        button.style.fontSize = '12px'
        button.classList.add('btn-warning')
        button.innerHTML = 'Download'
        form.appendChild(button)

    })
    if (item.links !== undefined && item.links !== null) {
        let hel = document.createElement('p')
        hel.innerText = `ლინკები:`
        hel.style.fontFamily = "BPG QuadroSquare Mtavruli"
        card.appendChild(hel)

        item.links.map((item) => {
            let tag = document.createElement('a')
            tag.setAttribute('href', `${item.link}`)
            tag.innerHTML = item.name
            tag.setAttribute('target', `_blank`)
            card.appendChild(tag)
            tag.style.textDecoration = 'none'
            tag.style.fontFamily = "Kdam Thmor Pro",
                tag.style.color = 'white'
            tag.style.display = 'block'

        })

    }
})