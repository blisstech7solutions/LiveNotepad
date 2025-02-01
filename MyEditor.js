
// editor script 
function formatText(command) {
    document.execCommand(command, false, null);
  }
  
  function addBullet() {
    document.execCommand('insertUnorderedList', false, null);
  }
  
  function addNumberedList() {
    document.execCommand('insertOrderedList', false, null);
  }
  
  function changeBackgroundColor(color) {
    document.execCommand('backColor', false, color);
  }
  function changeColor(color) {
    document.execCommand('foreColor', false, color);
  }
  document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.key === 'K') {
    event.preventDefault(); 
    changeColor('black'); 
  }
  if (event.ctrlKey && event.shiftKey && event.key === 'R') {
    event.preventDefault(); 
    changeColor('red'); 
  }
  if (event.ctrlKey && event.shiftKey && event.key === 'G') {
    event.preventDefault(); 
    changeColor('green'); 
  }
  if (event.ctrlKey && event.shiftKey && event.key === 'B') {
    event.preventDefault(); 
    changeColor('blue'); 
  }
  if (event.ctrlKey && event.shiftKey && event.key === 'U') {
    event.preventDefault(); 
    addBullet(); 
  }
  if (event.ctrlKey && event.shiftKey && event.key === 'O') {
    event.preventDefault(); 
    addNumberedList(); 
  }
  if (event.ctrlKey  && event.key === 'B') {
    event.preventDefault(); 
    formatText('bold')
  }
  });