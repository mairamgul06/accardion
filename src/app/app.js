document.querySelectorAll('.accardion').forEach((el)=>{
    el.addEventListener('click', ()=>{
        let content = el.nextElementSibling;
        if(content.style.maxHeight){
            document.querySelectorAll('.content').forEach((el)=> el.style.maxHeight = null)
        }else{
            document.querySelectorAll('.content').forEach((el)=> el.style.maxHeight = null);
                content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
})
function darkMode(){
    const body = document.body;
    const wasDarkMode = localStorage.getItem('darkmode') === 'true'

    localStorage.setItem('darkmode', !wasDarkMode)
    body.classList.toggle('dark-mode',!wasDarkMode)
}
document.querySelector('.btn').addEventListener('click', darkMode);

function onLoad(){
    document.body.classList.toggle('dark-mode',localStorage.getItem('darkmode') === 'true' )
}
document.addEventListener('DOMContentLoaded', onLoad);