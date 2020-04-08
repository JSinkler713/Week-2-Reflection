console.log('Gotham calls! 🦇');

//Create an object with the following key value pairs:

//1. {name:string,favoriteHobby:string, profileImg:string, greeting:string, funScale:number(1-10), skills:[array of strings]}

const james = {
  name: 'james',
  favoriteHobby: 'surfing',
  profileImg: 'batman.jpg',
  greeting: 'Howdy folks...',
  funScale: 9,
  skills: ['guitar', 'wood-working', 'ceramics']
}

//2. select the button
let button = document.querySelector('#btn');

//6. select the h2 with the secret identity is...
let h2Secret = document.querySelectorAll('h2')[1];

//7.select the custom greeting
const customGreeting = document.querySelector('.greeting');

//8.select the favorite hobby
const favHobby = document.querySelector('.fav-hobby')

//9.select the fun-scale
const funScale = document.querySelector('#fun-scale')

//10. selct the skills-list
const skillsList = document.querySelector('.skills-list')

//11.select the img element
const img = document.querySelector('.image')
console.log(img)
//12.check this is the one to update
console.log(h2Secret)
//13.update directly before putting in function

//h2Secret.innerHTML = '<p>My secret Identity is ...<strong> JAMES</strong></p>';

//it worked, will move into main function


button.addEventListener('click', ()=> {
  //3 check it is hooked up with a console log
  //4 console.log('it got clicked');

  //5. or 14. change one thing based on the click
  h2Secret.innerHTML = '<p>My secret Identity is ...<strong> JAMES</strong></p>';

  //15. ok now start changing things using the object created above
  customGreeting.innerText = james.greeting
  //works
  
  //16.  check how using append looks
  favHobby.append(james.favoriteHobby)
  // looks good
  
  //17. link to batman image
  img.src = './batman.jpeg'

  //18. update funScale
  funScale.append(james.funScale)
  
  //19. bonus
  skillsList.innerHTML = '<p>BONUS: here are my skills -</p>'

  //20. loop through skills
  for (let i=0; i<james.skills.length; i++) {
    if (i <james.skills.length -1) {
      skillsList.append(james.skills[i] + ', ') 
    } else {
      skillsList.append(james.skills[i] + '.')
    }
  }

})

