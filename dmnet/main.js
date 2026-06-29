function copyBib(){
  const text = document.getElementById('bibtex-text').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    const old = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(()=>btn.textContent = old, 1500);
  });
}
