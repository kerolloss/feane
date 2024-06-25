var h2s = document.querySelectorAll('h2')
document.write("hhhhhhhhhhhhhhhhhhhh")
for (let i = 0; i < h2s.length; i++) {
    h2s[i].addEventListener('click',function(eventInfo){
        eventInfo.target.classList.add('bg-danger','d-inline')
    console.log(eventInfo);
    });
}