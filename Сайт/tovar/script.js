/*---Модальное Окно---*/
const orderButton = document.querySelector('button[type="submit"]');
const orderModal = document.getElementById('order-modal');
const closeButton = document.querySelector('.close');

orderButton.addEventListener('click', () => {
  orderModal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  orderModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === orderModal) {
    orderModal.style.display = 'none';
  }
});
