let alertMatchCount = ()=>{
    let matchCount = document.querySelectorAll("input:checked").length;
    let username = document.getElementById("username").value;

    alert(`${username}님, 저와 ${matchCount}개의 취향이 같으시네요!`);
    clearMovieCheckBox()
}

let clearMovieCheckBox = ()=>{
    document.querySelectorAll("input:checked").forEach(checkbox =>{
        checkbox.checked = false;
    })

    document.getElementById("username").value = null;
}