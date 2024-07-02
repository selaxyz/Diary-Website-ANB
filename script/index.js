const KEY = 'diary';

const setItem = (key, data) => localStorage.setItem(key, JSON.stringify(data));
/**
 * Retrieves an item from the local storage based on the provided key.
 *
 * @param {string} key - The key used to retrieve the item from the local storage.
 * @return {any|null} The retrieved item from the local storage, or null if the item does not exist.
 */
const getItem = (key) =>
  localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;

/**
 * Adds a new diary entry to the local storage if validation passes.
 *
 * @return {void}
 */
const addNewDiary = () => {
  if (validate() == true) {
    if (getItem(KEY) === null) {
      setItem(KEY, []);
    }

    const diary = getItem(KEY);
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const date = document.getElementById('date').value;

    diary.push({
      id: diary.length + 1,
      title: title,
      content: content,
      date: date,
    });

    setItem(KEY, diary);
    displayAllDiary();
    resetForm();
  }
};

/**
 * Updates a diary entry with the provided index.
 *
 * @param {number} index - The index of the diary entry to update
 * @return {void}
 */
const updateDiary = (index) => {
  const diary = getItem(KEY);
  document.getElementById('submit').style.display = 'none';
  document.getElementById('update').style.display = 'block';

  document.getElementById('title').value = diary[index].title;
  document.getElementById('content').value = diary[index].content;
  document.getElementById('date').value = diary[index].date;

  /**
   * Updates the diary entry at the specified index with the values from the form.
   *
   * @param {number} index - The index of the diary entry to update.
   * @return {void}
   */
  document.getElementById('update').onclick = function () {
    diary[index].title = document.getElementById('title').value;
    diary[index].content = document.getElementById('content').value;
    diary[index].date = document.getElementById('date').value;

    setItem(KEY, diary);
    displayAllDiary();
    resetForm();
  };
};

/**
 * Deletes a diary entry from the local storage based on the provided index.
 *
 * @param {number} index - The index of the diary entry to delete.
 * @return {void} This function does not return a value.
 */
const deleteDiary = (index) => {
  let diary = getItem(KEY);
  diary = diary.reduce((acc, item) => {
    if (diary.indexOf(item) !== index) {
      acc.push(item);
    }
    return acc;
  }, []);

  setItem(KEY, diary);
  displayAllDiary();
};

/**
 * Displays all diary entries.
 *
 * This function retrieves the diary entries from local storage and displays them on the webpage.
 * If there are no diary entries, it displays a message indicating that the diary is empty.
 *
 * @return {void} This function does not return anything.
 */
function displayAllDiary() {
  if (getItem(KEY) === null) {
    setItem(KEY, []);
  }

  const diaryList = document.getElementById('diary-list');
  const diaryItem = document.getElementById('diary-item');

  const diary = getItem(KEY);

  let html = '';
  diaryItem.innerHTML = `Found (${diary.length}) ${
    diary.length <= 1 ? 'diary' : 'diaries'
  }`;

  diary.forEach((data, index) => {
    const item = document.createElement('div');
    item.classList.add('diary-card');

    item.innerHTML = `
      <div class="content">
          <div class="summary">
            <h2>${stringLimiter(data.title, 20)}</h2>
            <p>${stringLimiter(data.content, 20)}</p>
            <p>${dateFormat(data.date)}</p>
          </div>
        <div class="action">
          <div onclick="updateDiary(${index})"><img src="../assets/icons/edit-icon.svg"></div>
          <button popovertarget="${index}-delete"><img src="../assets/icons/delete-icon.svg"></button>
        </div>
      </div>
      <div class="content-bottom">
        <button popovertarget="${index}" id="detail">View Detail</button>
      <div>

      <div popover id="${index}" class="diary-modal">
        <div class="diary-modal-header">
              <div class="diary-modal-close"> 
        <button popovertarget="${index}" popovertargetaction="hide">
        <img src="../assets/icons/close.svg" >
        </button> 
      </div>
          <div>
           <h2>${data.title}</h2>
           <p>${dateFormat(data.date)}</p>
        </div>
     
        </div>
        <hr>
        <p class='diary-modal-content'>${data.content}</p>
    </div>
        <div popover id="${index}-delete" class="diary-confirm-delete-modal">
        <div class="diary-confirm-delete-modal-close">
          <button popovertarget="${index}-delete" popovertargetaction="hide">
            <img src="../assets/icons/close.svg" />
          </button>
        </div>
        <div class="diary-confirm-delete-modal-header">
          <h2>Confirm to delete</h2>
        </div>
        <hr />
        <div class="diary-confirm-modal-content">
          <img src="./assets/images/confirm-delete-image.png" />
          <p>Are you sure you want to delete this diary?</p>
        </div>
        <hr />
        <div class="diary-confirm-delete-modal-action">
          <button onclick="deleteDiary(${index})">Delete</button>
          <button popovertarget="${index}-delete" popovertargetaction="hide">
            Cancel
          </button>
        </div>
      </div>

        `;
    html += `${item.outerHTML}`;
  });

  diaryList.innerHTML = html;
  if (diary.length === 0) {
    diaryList.innerHTML = `<div class='diary-list-empty'>
      <img src="../../assets/images/empty-list.png">
      <p>Your diary is empty, start writing some</p>
    </div>`;
  }
}

function clearAll() {
  if (getItem(KEY).length == 0) {
    alert('Nothing to delete 😇');
    return;
  }
  localStorage.clear();
  displayAllDiary();
}

/**
 * Validates the title, content, and date fields in a form.
 *
 * @return {boolean} Returns true if all fields are valid, false otherwise.
 */
function validate() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const date = document.getElementById('date').value;
  if (title === '') {
    alert('Hold On - Your title is empty 🙁');
    return false;
  }
  if (content === '') {
    alert('Hold On - Your content is empty 🙁');
    return false;
  }
  if (date === '') {
    alert('Hold On - Your date is empty 🙁');
    return false;
  }
  return true;
}

/**
 * A function to display or hide the manual popover by toggling a CSS class.
 *
 */
function displayManual() {
  const manualPopover = document.querySelector('.manual-popover');
  manualPopover.classList.toggle('manual-popover-display');
}

/**
 * Resets the form by clearing the title, content, and date fields, and adjusting the display of submit and update buttons.
 *
 * @return {void}
 */
function resetForm() {
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
  document.getElementById('date').value = '';
  document.getElementById('submit').style.display = 'block';
  document.getElementById('update').style.display = 'none';
}

/**
 * A function that limits the length of a string by adding dots if it exceeds a specified limit.
 *
 * @param {string} string - The input string to be limited.
 * @param {number} limit - The maximum length the string should be limited to.
 * @return {string} The string with limited length, potentially appended with dots.
 */
function stringLimiter(string, limit) {
  let dots = '...';
  if (string.length > limit) {
    string = string.substring(0, limit) + dots;
  }

  return string;
}

/**
 * Formats the input date into a human-readable date string.
 *
 * @param {Date} inputDate - The input date to be formatted.
 * @return {string} The formatted date string.
 */
function dateFormat(inputDate) {
  // Create a new Date object
  let date = new Date(inputDate);

  // Options for formatting the date
  let options = {
    weekday: 'short',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };

  // Format the date
  let formattedDate = date.toLocaleDateString('en-US', options);

  // Print the formatted date
  return formattedDate;
}

document.onload = displayAllDiary();
