    (function(){
      const root = document.documentElement;
      const key = "cv_theme_pref";
      const btn = document.getElementById('themeToggle');
      const saved = localStorage.getItem(key);
      if(saved === 'light'){ root.classList.add('light'); }

      btn?.addEventListener('click', ()=>{
        root.classList.toggle('light');
        localStorage.setItem(key, root.classList.contains('light') ? 'light' : 'dark');
      });
    })();
