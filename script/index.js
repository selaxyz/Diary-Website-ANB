const KEY = "diary";

const setItem = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getItem = (key) =>
  localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;

const addNewDiary = () => {
  if (validate() == true) {
    if (getItem(KEY) === null) {
      setItem(KEY, []);
    }

    const diary = getItem(KEY);
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const date = document.getElementById("date").value;

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

const updateDiary = (index) => {
  const diary = getItem(KEY);
  document.getElementById("submit").style.display = "none";
  document.getElementById("update").style.display = "block";

  document.getElementById("title").value = diary[index].title;
  document.getElementById("content").value = diary[index].content;
  document.getElementById("date").value = diary[index].date;

  document.getElementById("update").onclick = function () {
    diary[index].title = document.getElementById("title").value;
    diary[index].content = document.getElementById("content").value;
    diary[index].date = document.getElementById("date").value;

    setItem(KEY, diary);
    displayAllDiary();
    resetForm();
  };
};

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

function displayAllDiary() {
  if (getItem(KEY) === null) {
    setItem(KEY, []);
  }

  const diaryList = document.getElementById("diary-list");
  const diaryItem = document.getElementById("diary-item");

  const diary = getItem(KEY);

  let html = "";
  diaryItem.innerHTML = `Found (${diary.length}) ${
    diary.length <= 1 ? "diary" : "diaries"
  }`;

  diary.forEach((data, index) => {
    const item = document.createElement("div");
    item.classList.add("diary-card");
    item.innerHTML = `
      <div class="content">
          <div class="summary">
            <h2>${stringLimiter(data.title, 20)}</h2>
            <p>${stringLimiter(data.content, 20)}</p>
            <p>${data.date}</p>
          </div>
        <div class="action">
          <div onclick="updateDiary(${index})"><img src="../assets/icons/edit-icon.svg"></div>
          <div onclick="deleteDiary(${index})"><img src="../assets/icons/delete-icon.svg"></div>
        </div>
      </div>
      <div class="content-bottom">
        <button popovertarget="${index}" id="detail">View Detail</button>
      <div>
      <div popover id="${index}" class="diary-modal">
        <div class="diary-modal-header">
          <div>
           <h2>${data.title}</h2>
           <h3>${data.date}</h3>
        </div>
        <button popovertarget="${index}" popovertargetaction="hide"><img src="../assets/icons/close.svg" ></button>
        </div>
        <hr>
        <p>${data.content}</p>
    </div>
        `;
    html += `${item.outerHTML}`;
  });
  diaryList.innerHTML = html;
}

function clearAll() {
  localStorage.clear();
  displayAllDiary();
}

function validate() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const date = document.getElementById("date").value;
  if (title === "") {
    alert("Title is empty");
    return false;
  }
  if (content === "") {
    alert("Content is empty");
    return false;
  }
  if (date === "") {
    alert("date is empty");
    return false;
  }
  return true;
}

function displayManual() {
  const manualPopover = document.querySelector(".manual-popover");
  manualPopover.classList.toggle("manual-popover-display");
}

function resetForm() {
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  document.getElementById("date").value = "";
  document.getElementById("submit").style.display = "block";
  document.getElementById("update").style.display = "none";
}

function stringLimiter(string, limit) {
  let dots = "...";
  if (string.length > limit) {
    string = string.substring(0, limit) + dots;
  }

  return string;
}

document.onload = displayAllDiary();
