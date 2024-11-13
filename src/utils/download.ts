export function downloadFile(url: string, fileName?: string) {
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName || 'download';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function downloadFiles(fields: { url: string; fileName?: string }[]) {
  fields.forEach((file) => {
    downloadFile(file.url, file.fileName);
  });
}
