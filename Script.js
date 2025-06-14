function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

function closeMenu() {
  const menu = document.getElementById('menu');
  menu.classList.remove('active');
}

window.onclick = function(event) {
  const menu = document.getElementById('menu');
  if (!event.target.matches('.menu-toggle') && menu.classList.contains('active')) {
    menu.classList.remove('active');
  }
};

window.addEventListener("load", () => {
  if (window.location.hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
});

document.getElementById("form-cadastro").addEventListener("submit", function(e) {
  if (!this.checkValidity()) {
    e.preventDefault();
    alert("Por favor, preencha todos os campos corretamente.");
  }
});