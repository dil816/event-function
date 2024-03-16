import { useEffect } from "react";
import Sessionform from "../components/Sessionform";
import AjendaDetail from "../components/AjendaDetail";
import useAjendacontext from "../hooks/useAjendacontext";
import SideNavbar from "../components/SideNavbar";

const Ajendas = () => {
  //const [ajendas, setAjendas] = useState(null);
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
  return (
    <>
      <div className="flex flex-wrap [@media_screen_and(max-width:700px)]:flex-col">
        <SideNavbar />
        <div className="flex-[55%] bg-[#f1f1f1] p-[20px]">
          <div className="sessions">
            {ajenda &&
              ajenda.map((ajend) => (
                <AjendaDetail key={ajend._id} ajend={ajend} />
              ))}
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
