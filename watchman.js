let l = JSON.parse(localStorage.getItem('userLogin'))

if (!l) {
    alert('You must login first !')
    window.location.href = 'login.html'
}