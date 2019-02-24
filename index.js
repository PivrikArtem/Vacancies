function hideIcon() {
    let i =document.getElementById('i');
    let search =document.getElementById('search');
    i.style.display = 'none';
    if(search.value===''){
        i.style.display = 'block';
    }
}