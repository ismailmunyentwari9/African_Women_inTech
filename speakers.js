const section = document.getElementById('card-contents-js');
const speakers = [
  {
    name: 'John Doe',
    image: './imgs/John_Dee_Ashmolean.jpg',
    expertIn: 'John is a renowned open source software developer and advocate.',
    description: 'John is a renowned open source software developer and advocate. In his presentation, he discussed the importance of open source software in driving innovation and creativity in the tech industry.',
  },
  {
    name: 'Mary Johnson',
    image: './imgs/mary.jpg',
    expertIn: 'Mary is a well-known open source software developer and contributor.',
    description: 'In her keynote speech, she talked about the impact of open and free culture on the creative process, and how it has enabled her to collaborate with others to create innovative projects.',
  },
  {
    name: 'Bob Johnson',
    image: './imgs/bob.jpg',
    expertIn: 'Bob is a leading researcher in the field of open innovation',
    description: 'In his presentation, he shared his insights on the role of open culture in fostering innovation and creativity in a variety of industries.',
  },
  {
    name: 'Sarah Lee ',
    expertIn: 'Sarah is a successful entrepreneur and open culture advocate.',
    image: './imgs/sara.jpeg',
    description: 'In her workshop, she shared her experiences and lessons learned on building successful businesses based on open and free culture principles.',
  },
  {
    name: 'Tom Brown',
    expertIn: 'Tom is a renowned musician and open culture activist.',
    image: './imgs/tom.png ',
    description: 'In his keynote speech, he discussed the impact of open culture on the music industry and how it has enabled him to collaborate with other musicians and create new, innovative sounds.',
  },

  {
    name: 'Elizabeth Kim',
    expertIn: 'Elizabeth is a prominent researcher and scholar in the field of open culture.',
    image: './imgs/kim.png',
    description: 'She may have shared her insights and findings on the relationship between open culture and innovation, and the ways in which open and free culture can drive creativity and innovation in various industries and fields.',
  },

];

const cardsHTML = speakers.map((speaker) => `<div class="col-6" id="card">
      <div class="row" id="speaker-card">
        <div class="col-3">
          <img src="${speaker.image}" alt="${speaker.name}">
        </div>
        <div class="col-6">
          <p>${speaker.name}</p>
          <p>${speaker.expertIn}</p>
          <p>${speaker.description}</p>
        </div>
      </div>
    </div>`).join('');

const html = `
   
      <div class="row">
        ${cardsHTML}
      </div>
     
   `;
section.innerHTML += html;

const moreButton = document.querySelector('#more-button');
const lessButton = document.querySelector('#less-button');
const cards = document.querySelectorAll('#card');

for (let i = 2; i < cards.length; i += 1) {
  cards[i].classList.add('hide-mobile');
}

moreButton.addEventListener('click', () => {
  for (let i = 2; i < cards.length; i += 1) {
    cards[i].classList.remove('hide-mobile');
    moreButton.style.display = 'none';
    lessButton.style.setProperty('display', 'flex', 'important');
    moreButton.style.visibility = 'hidden';
    lessButton.style.visibility = 'visible';
  }
});

lessButton.addEventListener('click', () => {
  for (let i = 2; i < cards.length; i += 1) {
    cards[i].classList.add('hide-mobile');
    moreButton.style.display = 'flex';
    lessButton.style.setProperty('display', 'flex', 'important');
    moreButton.style.visibility = 'visible';
    lessButton.style.visibility = 'hidden';
  }
});
