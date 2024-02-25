import { useEffect, useState } from "react";
import useAjendacontext from "../hooks/useAjendacontext";

const Sessionform = () => {
  const { ajenda, _id, dispatch } = useAjendacontext();

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [timeRange, setTimeRange] = useState("");
  const [isDisable, setIsDisable] = useState(false);

  useEffect(() => {
    if (_id) {
      ajenda.map((i) => {
        if (i._id == _id) {
          setDate(i.date);
          setTitle(i.title);
          setStartTime(i.startTime);
          setEndTime(i.endTime);
          setTimeRange(i.timeRange);
          setIsDisable(true);
        }
      });
    }
  }, [_id, ajenda]);

  const handleUpdate = async () => {
    const subData = { title, date, startTime, endTime, timeRange, _id };

    const response = await fetch(`http://localhost:4000/api/ajendas/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data.error);
    }

    if (response.ok) {
      console.log("ajenda updated");
      console.log(data);
      console.log(subData);

      setDate("");
      setTitle("");
      setStartTime("");
      setEndTime("");
      setTimeRange("");
      setIsDisable(false);

      dispatch({ type: "UPDATE_AJENDA", payload: subData });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subData = { title, date, startTime, endTime, timeRange };

    const response = await fetch("http://localhost:4000/api/ajendas/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data.error);
    }

    if (response.ok) {
      setDate("");
      setTitle("");
      setStartTime("");
      setEndTime("");
      setTimeRange("");

      dispatch({ type: "CREATE_AJENDA", payload: data });

      console.log("new ajenda added");
    }
  };

  return (
    <div className="agenda-form">
      <form className="create" onSubmit={handleSubmit}>
        <label>Date :</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>From :</label>
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />

        <label>To :</label>
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />

        <label>Agenda :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Time Range</label>
        <input
          type="text"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        />

        <button disabled={isDisable}>Submit</button>
      </form>
      <button onClick={handleUpdate} disabled={!isDisable}>
        update
      </button>
    </div>
  );
};

export default Sessionform;
