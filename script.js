document.addEventListener('DOMContentLoaded', function() {
    fetch('menu.json')
      .then(response => response.json())
      .then(data => {
        const menuContainer = document.getElementById('menu');
        const menu = createMenu(data.menu);
        menuContainer.appendChild(menu);
      });
  
    function createMenu(items) {
      const ul = document.createElement('ul');
      items.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.name;
        a.href = item.link;
        li.appendChild(a);
  
        if (item.subMenu) {
          const subMenu = createMenu(item.subMenu);
          li.appendChild(subMenu);
        }
  
        ul.appendChild(li);
      });
      return ul;
    }
  });
