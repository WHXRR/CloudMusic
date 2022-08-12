export default function jump(anchorName) {
  if (anchorName) {
    let anchorElement = document.getElementById(anchorName);
    if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
  }
}