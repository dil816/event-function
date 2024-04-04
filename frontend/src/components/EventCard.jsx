import { format } from "date-fns";
import { useEffect } from "react";
import useAjendacontext from "../hooks/useAjendacontext";
import AjendaDetail from "./AjendaDetail";
import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";
//import dayjs from "dayjs";
//import customParseFormat  from 'dayjs/plugin/customParseFormat'
//dayjs.extend(customParseFormat)

const EventCard = ({ evnt }) => {
  //const abc = dayjs(`${evnt.startTime}:00`, "HH:mm:ss");
  //console.log(abc);

  //const timeString12hr = new Date()
  //.toLocaleTimeString('en-US',
  // {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
  //);
  //console.log(timeString12hr);
  const { eventId } = useParams();
  const { ajenda, dispatch } = useAjendacontext();
  useEffect(() => {
    const fetchajenda = async () => {
      const response = await fetch("http://localhost:4000/api/ajendas");

      const data = await response.json();
      //console.log(data);
      if (response.ok) {
        //setAjendas(data);
        dispatch({ type: "GET_AJENDAS", payload: data });
      }
    };
    fetchajenda();
  }, [dispatch, eventId]);
  console.log(ajenda);
  return (
    <>
      <div className="flex flex-wrap [@media_screen_and(max-width:700px)]:flex-col">
        <div className="flex-[65%]  p-[30px]">
          <h1 className="mb-4 text-2xl font-semi bold leading-none tracking-tight text-gray-800">
            Event Details
          </h1>
          <div className="flex flex-col w-full bg-white rounded shadow-lg ">
            <div
              className="w-full h-64 bg-top bg-cover rounded-t"
              style={{
                backgroundImage: `url(../public/images/${evnt.photo})`,
              }}
            ></div>
            <div className="flex flex-col w-full md:flex-row">
              <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                <div className="md:text-3xl">
                  {format(new Date(evnt.startDate), "MMM")}
                </div>
                <div className="md:text-6xl">
                  {format(new Date(evnt.startDate), "dd")}
                </div>
                <div className="md:text-xl">
                  {format(
                    new Date(`1970-01-01T` + `${evnt.startTime}:00`),
                    "p"
                  )}
                </div>
              </div>
              <div className="p-4 font-normal text-gray-800 md:w-3/4">
                <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
                  {evnt.eventTitle}
                </h1>
                <p className="leading-normal">{evnt.description}</p>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2  mt-2">
                  {`#${evnt.eventType}`}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2  mt-2">
                  {`📍 ${evnt.location}`}
                </span>
                <div className="flex flex-row items-center mt-4 text-gray-700">
                  <div className="w-1/2">Mercedes-Benz Superdome</div>
                  <div className="w-1/2 flex justify-end">
                    <img
                      src="https://collegefootballplayoff.com/images/section_logo.png"
                      alt=""
                      className="w-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProfileCard />
        </div>
        <div className="flex-[35%] p-[20px]">
          <h1 className="mb-4 mt-4 text-2xl font-semi bold leading-none tracking-tight text-gray-800">
            Event Sessions
          </h1>
          {ajenda &&
            ajenda.map((ajend) => {
              if (ajend.eventId == eventId) {
                return <AjendaDetail key={ajend._id} ajend={ajend} />;
              }
            })}
        </div>
      </div>
    </>
  );
};

export default EventCard;
