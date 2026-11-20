export default function decorate(block) {
  const rows = [...block.children];
  block.replaceChildren();
  rows.forEach((row) => {
    const [title, content] = [...row.children];
    if (!title?.textContent.trim()) return;
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = title.textContent.trim();
    const panel = document.createElement('div');
    panel.className = 'accordion-content';
    if (content) panel.append(...content.childNodes);
    details.append(summary, panel);
    block.append(details);
  });
}