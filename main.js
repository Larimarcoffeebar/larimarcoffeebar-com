document.addEventListener('DOMContentLoaded', () => {
  const homeView = document.getElementById('home-view');
  const menusView = document.getElementById('menus-view');
  const viewMenuBtn = document.getElementById('view-menu-btn');
  const backBtn = document.getElementById('back-btn');
  
  const tabBtns = document.querySelectorAll('.tab-btn');
  const menuSections = document.querySelectorAll('.menu-section');

  // Navigation logic
  viewMenuBtn.addEventListener('click', () => {
    homeView.classList.remove('active');
    menusView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  backBtn.addEventListener('click', () => {
    menusView.classList.remove('active');
    homeView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Tabs logic
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      menuSections.forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Menu Detail logic - Accordion Style
  document.querySelectorAll('.menu-item-text').forEach(item => {
    item.addEventListener('click', () => {
      // close others if needed (optional, for a cleaner look)
      document.querySelectorAll('.menu-item-text.expanded').forEach(openItem => {
        if (openItem !== item) openItem.classList.remove('expanded');
      });
      
      // toggle current
      item.classList.toggle('expanded');
    });
  });

});
