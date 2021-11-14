const pendingTasks = document.getElementById('pending-tasks');
const finishedTasks = document.getElementById('finished-tasks');
/*
Todo elemento que se desea arrastrar hay que colocar en el elemento
la etiqueta draggable en true => draggable= "true"
*/
// dataTransfer
// setData: Establece la información que queremos compartir
// getData: Establece la información que queremos obtener

pendingTasks.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', e.target.id);
});

pendingTasks.addEventListener('drag', (e) => {
  e.target.classList.add('active');
});

pendingTasks.addEventListener('dragend', (e) => {
  e.target.classList.remove('active');
});

// OBLIGATORIO, SI NO, NO FUNCIONA
finishedTasks.addEventListener('dragover', (e) => {
  e.preventDefault();
});

finishedTasks.addEventListener('drop', (e) => {
  e.preventDefault();
  // Guardar el elemento que vamos a mover
  const element = document.getElementById(e.dataTransfer.getData('text'));
  element.classList.remove('active');
  /*
  Cuando eliminamos un hijo de un contenedor, el método removeChild devuelve
  el elemento que hemos eliminado. Es decir, quita el elemento de tareas
  pendientes => pendingTasks y agregalo a tareas terminadas => finishedTasks.
  */
  finishedTasks.appendChild(pendingTasks.removeChild(element));
});
