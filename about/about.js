const p2 = document.querySelectorAll('p')[2];

setTimeout(() => {
    p2.classList.toggle('second-p');
}, 150);

setTimeout(() => {
    p2.classList.toggle('hidden');
}, 0);
setTimeout(() => {
    p2.classList.toggle('hidden');
}, 149);



const skillContain = document.querySelector('.skill-contain');

const slideSkillContain = document.querySelector('.skill-contain-tools')

const techStack = document.querySelectorAll('div')[6];

const tools = document.querySelectorAll('div')[7];



techStack.addEventListener('click',function(){
    techStack.classList.add('tech-stack-color');
    tools.classList.remove('tools-color')
    techStack.classList.remove('hiddenColor')
    skillContain.classList.remove('hiddenContent')
    slideSkillContain.classList.remove('show')

})


tools.addEventListener('click',function(){
    techStack.classList.remove('tech-stack-color');
    tools.classList.add('tools-color')
    techStack.classList.add('hiddenColor')
    skillContain.classList.add('hiddenContent')
    slideSkillContain.classList.add('show')
    slideSkillContain.classList.add('presisi')
    
})



