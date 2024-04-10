import { useEffect, useRef, useState } from "react";
import useAjendacontext from "../hooks/useAjendacontext";
import { useParams } from "react-router-dom";
import axios from "axios";

const Sessionform = () => {
  const { eventId } = useParams();

  const { ajenda, _id, dispatch } = useAjendacontext();

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [timeRange, setTimeRange] = useState("");
  const [isDisable, setIsDisable] = useState(false);

  const [name, setName] = useState("");
  const [contribution, setContribution] = useState("");
  const [file, setFile] = useState([]);

  const inputfile = useRef(null);

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
  console.log(eventId);

  useEffect(() => {
    const timeRangeCalculate = () => {
      const stDate = new Date(`${date}T` + `${startTime}:00`);
      const edDate = new Date(`${date}T` + `${endTime}:00`);
      let range = Math.abs(edDate.getTime() - stDate.getTime()) / 60000;
      return range;
    };
    setTimeRange(timeRangeCalculate());
  }, [startTime, endTime, date]);

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

    const subData = { title, date, startTime, endTime, timeRange, eventId };

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

  const handleContributesubmit = (e) => {
    e.preventDefault();

    const contributeData = new FormData();
    contributeData.append("name", name);
    contributeData.append("contribution", contribution);
    contributeData.append("file", file);
    contributeData.append("eventId", eventId);

    axios
      .post("http://localhost:4000/api/contributors", contributeData)
      .then(console.log("new contributer added"))
      .then(setName(""))
      .then(setContribution(""))
      .catch((error) => console.log(error));

    if (inputfile.current) {
      inputfile.current.value = "";
      inputfile.current.type = "text";
      inputfile.current.type = "file";
    }
  };
  return (
    <>
      <div className="agenda-form">
        <h1>Sessions</h1>
        <form className="create" onSubmit={handleSubmit}>
          <label className="block">Date :</label>
          <input
            className="block p-[10px] mt-[10px] mb-[20px] w-full border-[1px] border-[solid] border-[#ddd] rounded-[4px] box-border"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label className="block">From :</label>
          <input
            className="block p-[10px] mt-[10px] mb-[20px] w-full border-[1px] border-[solid] border-[#ddd] rounded-[4px] box-border"
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />

          <label className="block">To :</label>
          <input
            className="block p-[10px] mt-[10px] mb-[20px] w-full border-[1px] border-[solid] border-[#ddd] rounded-[4px] box-border"
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />

          <label className="block">Agenda :</label>
          <input
            className="block p-[10px] mt-[10px] mb-[20px] w-full border-[1px] border-[solid] border-[#ddd] rounded-[4px] box-border"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="block">Time Range</label>
          <input
            className="block p-[10px] mt-[10px] mb-[20px] w-full border-[1px] border-[solid] border-[#ddd] rounded-[4px] box-border"
            type="text"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          />

          <button
            className="bg-[blueviolet] border-[0] text-[#fff] p-[10px] rounded-[4px] cursor-pointer"
            disabled={isDisable}
          >
            Submit
          </button>
        </form>
        <button
          className="bg-[rgb(32,_199,_46)] border-[0] text-[#fff] p-[10px]  rounded-[4px] cursor-pointer mt-[10px]"
          onClick={handleUpdate}
          disabled={!isDisable}
        >
          update
        </button>
      </div>
      <br />
      <h1>Contributers</h1>
      <div>
        <form onSubmit={handleContributesubmit}>
          <label className="block">Name</label>
          <input
            className="block p-[10px] mt-[10px] mb-[20px] w-full border-[1px] border-[solid] border-[#ddd] rounded-[4px] box-border"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="block">Contribution</label>
          <input
            className="block p-[10px] mt-[10px] mb-[20px] w-full border-[1px] border-[solid] border-[#ddd] rounded-[4px] box-border"
            type="text"
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
          />
          <label className="block">Profile Image</label>
          <input
            className="block p-[10px] mt-[10px] mb-[20px] w-full border-[1px] border-[solid] border-[#ddd] rounded-[4px] box-border"
            type="file"
            ref={inputfile}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button className="bg-[#2b37e2] border-[0] text-[#fff] p-[10px] rounded-[4px] cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Sessionform;
