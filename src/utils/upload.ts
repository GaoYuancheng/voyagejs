export function upload(cb: (file: File) => void) {
  const inputElement = document.createElement('input');
  inputElement.type = 'file';
  inputElement.accept = '.xls, .xlsx';
  inputElement.style.display = 'none';
  inputElement.onchange = function (event) {
    // @ts-expect-error
    cb(event.target!.files[0]);
  };
  document.body.appendChild(inputElement);
  inputElement.click();
}
