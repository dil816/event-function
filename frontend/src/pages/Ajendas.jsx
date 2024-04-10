import { useEffect, useState } from "react";
import Sessionform from "../components/Sessionform";
import AjendaDetail from "../components/AjendaDetail";
import useAjendacontext from "../hooks/useAjendacontext";
import SideNavbar from "../components/SideNavbar";
import ProfileCard from "../components/ProfileCard";
import { useParams } from "react-router-dom";

const Ajendas = () => {
  const { eventId } = useParams();
  //const [ajendas, setAjendas] = useState(null);
  const [contributors, setContributors] = useState(null);

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
  }, [dispatch]);
  console.log(ajenda);

  useEffect(() => {
    const fetchcontributors = async () => {
      const response = await fetch("http://localhost:4000/api/contributors");

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setContributors(data);
      }
    };
    fetchcontributors();
  }, [setContributors]);

  return (
    <>
      <div className="flex flex-wrap [@media_screen_and(max-width:700px)]:flex-row">
        <SideNavbar />
        <div className="flex-[55%] bg-[#f1f1f1] p-[20px]">
          <h1>Sessions</h1>
          <div className="sessions">
            {ajenda &&
              ajenda.map((ajend) => {
                if (ajend.eventId == eventId) {
                  return <AjendaDetail key={ajend._id} ajend={ajend} />;
                }
              })}
          </div>
          <h1>Contributors</h1>
          <div className="grid grid-cols-2 gap-2 px-4 pt-4 ">
            {contributors &&
              contributors.map((contributor) => {
                if (contributor.eventId == eventId) {
                  return (
                    <ProfileCard
                      key={contributor._id}
                      contributor={contributor}
                    />
                  );
                }
              })}
          </div>
        </div>
        <div className="flex-[25%] p-[20px]">
          <Sessionform />
        </div>
      </div>
    </>
  );
};

export default Ajendas;
