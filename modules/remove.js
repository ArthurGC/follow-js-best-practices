import { setDataLocalStorage, getDataLocalStorage } from './store.js';
import { refreshIndex, renderTaskDom } from './render.js';
import { refreshDragDropTarget } from './drag-drop.js';
import { refreshDescriptions } from './description.js';

const refreshHandlersAndUpdate = (listTask) => {
    refreshIndex(listTask);
    setDataLocalStorage(listTask);
    renderTaskDom();
    refreshDragDropTarget();
    refreshDescriptions();
}

export const removeTask = (event) => {
  let isRemoveIcon = event.target.classList.contains('remove');
  if (isRemoveIcon) {
    const listTasks = getDataLocalStorage();
    const id = parseInt(event.target.parentElement.dataset.id, 10);
    listTasks.splice(id, 1);
    refreshHandlersAndUpdate(listTasks);
  }
};

export const removeTaskChecked = () => {
  const listTasks = getDataLocalStorage();
  if (listTasks !== []) {
    const newListTask = listTasks.filter((task) => task.status === false);
    refreshHandlersAndUpdate(newListTask);
  }
};

export const removeAllTask = () => {
  const listTasks = [];
  setDataLocalStorage(listTasks);
  renderTaskDom();
}
