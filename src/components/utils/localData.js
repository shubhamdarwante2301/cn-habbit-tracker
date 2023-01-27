// store data in localstorage
const setLocalData = (data) => {
  localStorage.setItem("localData", JSON.stringify(data));
};

// retrive data from localstorage
const getLocalData = () => {
  return JSON.parse(localStorage.getItem("localData"));
};

// create week data for habbit
const weekData = () => {
let newHabbitDetails = [];
  for (let i = 0; i < 7; i++) {
    let today = new Date();
    let yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - i);
    let weekday = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
      yesterday
    );
    let year = yesterday.getFullYear();
    let month = yesterday.getMonth() + 1;
    let day = yesterday.getDate();
    let x = day + "/" + month + "/" + year;
    newHabbitDetails.push({ id: x, habbitStatus: "not define", weekday: weekday });
  }

  return newHabbitDetails;
};

export { setLocalData, getLocalData, weekData };
