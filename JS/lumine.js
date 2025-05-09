const sobre = document.querySelector('.sobre')
const oque = document.querySelector('.oque')
const como = document.querySelector('.txt-como')

const observarleft = new IntersectionObserver (([entry])=>{
    if(entry.isIntersecting){
        entry.target.classList.add('left');
        observar.unobserve(entry.target);
    }
},{
    threshold: 0.5
});
observarleft.observe(sobre);
observarleft.observe(oque)
observarleft.observe(como)

const como_img = document.querySelector('#como-img')
const observarright = new IntersectionObserver (([entry])=>{
    if(entry.isIntersecting){
        entry.target.classList.add('right');
        observar.unobserve(entry.target);
    }
},{
    threshold: 0.5
});
observarright.observe(como_img)