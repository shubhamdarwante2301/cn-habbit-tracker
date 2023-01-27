import { useSelector, useDispatch } from "react-redux";
import { UPDATE_APP_DAILY } from "../../actions/index";

// custom hook to update app
const useUpdateApp = () => {
  const localData = useSelector((state) => state);

  // today date
  let today = new Date();
  let date = today.toLocaleDateString();

  // get last updated date from localstorage
  const lastUpdatedDate = localStorage.getItem("lastUpdatedDate");

  // is last updated date is not store in localstorage then store it
  if (lastUpdatedDate === null) {
    localStorage.setItem("lastUpdatedDate", date);
  }

  // if last updated date is not today
  if (lastUpdatedDate !== date) {
    let habbits = localData.habbits;
    if (habbits.length > 0) {
      let habbitIds = habbits.map((habbitObj) => {
        return habbitObj.id;
      });

      for (let z = 0; z < habbitIds.length; z++) {
        let habbitDetail = localData[habbitIds[z]];
        let updatedHabbitDetails = [];
        for (let j = 0; j < 7; j++) {
          let today = new Date();
          let yesterday = new Date(today);
          yesterday.setDate(yesterday.getDate() - j);
          let weekday = new Intl.DateTimeFormat("en-US", {
            weekday: "short",
          }).format(yesterday);
          let year = yesterday.getFullYear();
          let month = yesterday.getMonth() + 1;
          let day = yesterday.getDate();
          let x = day + "/" + month + "/" + year;

          let res = false;
          for (let k = 0; k < habbitDetail.length; k++) {
            if (x === habbitDetail[k].id) {
              res = true;
              updatedHabbitDetails.push(habbitDetail[k]);
              break;
            }
          }
          if (res === false) {
            updatedHabbitDetails.push({
              id: x,
              habbitStatus: "not define",
              weekday: weekday,
            });
          }
        }
        localData[habbitIds[z]] = updatedHabbitDetails;
      }
    }
  }

  useDispatch({
    type: UPDATE_APP_DAILY,
    payload: localData,
  });
};

export default useUpdateApp;
