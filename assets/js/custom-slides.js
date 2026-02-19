window.addEventListener('load', () => {
  if (window.location.search.match(/print-pdf/gi)) {
        setTimeout(() => {
            window.print();
        }, 1000);
    }
});