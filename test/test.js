document.getElementById('add-btn').addEventListener('click',
function(){
    const inputFieldValue = document.getElementById('text-input');
    const value = inputFieldValue.value;
    
    // Append Now
    const container = document.getElementById('parent-container');
    const li = document.createElement('li');
    li.innerHTML = value;
    li.classList.add('new-li');
    container.appendChild(li);

    const allList = document.getElementsByClassName('new-li');
    for(const item of allList){
        item.addEventListener('click', function(e){
            e.target.parentNode.removeChild(e.target);
            // console.log(e.target)
        })
    }
})   