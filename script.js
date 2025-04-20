function loadContent(page) {
    const title = document.getElementById('page-title');
    const content = document.getElementById('content');
  
    switch (page) {
      case 'home':
        title.textContent = 'Home';
        content.innerHTML = '<p>Welcome to the dashboard!</p>';
        break;
      case 'stats':
        title.textContent = 'Statistics';
        content.innerHTML = '<p>Here are your statistics...</p>';
        break;
      case 'users':
        title.textContent = 'Users';
        content.innerHTML = '<p>List of users will appear here.</p>';
        break;
      case 'settings':
        title.textContent = 'Settings';
        content.innerHTML = '<p>Configure your dashboard here.</p>';
        break;
    }
  }