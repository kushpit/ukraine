// отримуємо список всіх елементів списку
const factListItems = document.querySelectorAll('li');

// проходимося циклом по кожному елементу та додаємо кнопку
factListItems.forEach((listItem, index) => {
  // створюємо кнопку
  const button = document.createElement('button');
  button.innerText = '+';

  // додаємо обробник подій для кнопки
  button.addEventListener('click', () => {
    // знаходимо елементи заголовка та контенту
    const title = listItem.querySelector('.fact-title');
    const content = listItem.querySelector('.fact-content');

    // перевіряємо, чи контент прихований
    if (content.style.display === 'none') {
      // якщо так, робимо його видимим
      content.style.display = 'block';
      button.innerText = '-';
    } else {
      // якщо ні, ховаємо його
      content.style.display = 'none';
      button.innerText = '+';
    }
  });

  // додаємо кнопку до елементу списку
  listItem.insertBefore(button, listItem.firstChild);

  // приховуємо контент на початку
  const content = listItem.querySelector('.fact-content');
  content.style.display = 'none';
});
