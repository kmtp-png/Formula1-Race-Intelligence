/* Add your published Tableau view URL below.
   Example format: https://public.tableau.com/views/WorkbookName/DashboardName?:showVizHome=no
   Use the published view URL, not the local .twbx file. */
const TABLEAU_VIEW_URL = "https://public.tableau.com/app/profile/tejswa.purohit/viz/Book1_17931851890660/Dashboard3"

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

if (TABLEAU_VIEW_URL.startsWith('https://public.tableau.com/')) {
  const iframe = document.getElementById('tableauEmbed');
  const placeholder = document.getElementById('embedPlaceholder');
  const separator = TABLEAU_VIEW_URL.includes('?') ? '&' : '?';

iframe.src = TABLEAU_VIEW_URL + separator +
  ':embed=yes&:showVizHome=no&:tabs=yes&:toolbar=yes';
  iframe.hidden = false;
  placeholder.hidden = true;
}
