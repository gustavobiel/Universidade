var btn = document.getElementById('btn_med');
var form = document.getElementById('text_med');

btn.addEventListener('click', function() {
  if(form.style.display != 'block') {
    form.style.display = 'block';
    return;
  }
  form.style.display = 'none';
});

document.getElementById("btn_med").addEventListener("click", displayForm);
function displayForm() {
    document.getElementById("text_med").style.display = 'block';
}
var btn = document.getElementById('btn_eng');
var form = document.getElementById('text_eng');

btn.addEventListener('click', function() {
  if(form.style.display != 'block') {
    form.style.display = 'block';
    return;
  }
  form.style.display = 'none';
});

var btn = document.getElementById('btn_dir');
var form = document.getElementById('text_dir');

btn.addEventListener('click', function() {
  if(form.style.display != 'block') {
    form.style.display = 'block';
    return;
  }
  form.style.display = 'none';
}); 

var btn = document.getElementById('btn_psi');
var form = document.getElementById('text_psi');

btn.addEventListener('click', function() {
  if(form.style.display != 'block') {
    form.style.display = 'block';
    return;
  }
  form.style.display = 'none';
});

var btn = document.getElementById('btn_fil');
var form = document.getElementById('text_fil');

btn.addEventListener('click', function() {
  if(form.style.display != 'block') {
    form.style.display = 'block';
    return;
  }
  form.style.display = 'none';
});