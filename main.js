import { senatorData } from './assets/senators.js'

const senators = senatorData.results[0].members;

const republicans = senators.filter(senator => senator.party === "R")
const democrats = senators.filter(senator => senator.party === "D")

const females = senators.filter(senator => senator.gender === "F")
const males = senators.filter(senator => senator.gender === "M")

const loyalRepublican = republicans.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)
const loyalDemocrat = democrats.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

console.log(`There are ${males.length} men and ${females.length} women in the senate`)

const senWithPics = senators.map(senator => {
    senator.imgURL = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-100px.jpeg`
    return senator
})

let pictureDiv = document.querySelector('.container');

senWithPics.forEach(senator => {
    let senatorPic = document.createElement('img')
    let senatorFig = document.createElement('figure')
    let senatorCap = document.createElement('figcaption')

    senatorPic.src = senator.imgURL
    senatorCap.textContent = `${senator.first_name} ${senator.last_name}`

    senatorFig.appendChild(senatorPic)
    senatorFig.appendChild(senatorCap)
    pictureDiv.appendChild(senatorFig)
})