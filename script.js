const email = document.getElementById('email');
const select = document.getElementById('select');
const pass = document.getElementById('password')

email.addEventListener('change', function(e){
    console.log('change', e.target.value);
})
email.addEventListener('input', function(e){
    console.log(e.target.value);
})

select.addEventListener('change', function(e){
    console.log(e.target.value);
})

pass.addEventListener('blur', function(e){
    console.log(e.target.value);
    e.target.style.background=''
})
pass.addEventListener('focus', function(e){
    console.log('focus',e.target.value);
    e.target.style.background='blue'
})

// ---- window load -----
window.addEventListener('load', function(){
    console.log('window loading .....');
    this.alert('please wait .......')
})
