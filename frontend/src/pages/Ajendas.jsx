import { useEffect } from "react";
import Sessionform from "../components/Sessionform";
import AjendaDetail from "../components/AjendaDetail";
import useAjendacontext from "../hooks/useAjendacontext";

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
    <div className="page">
      <div className="ajenda">
        <div className="sessions">
          {ajenda &&
            ajenda.map((ajend) => (
              <AjendaDetail key={ajend._id} ajend={ajend} />
            ))}
        </div>
        <Sessionform />
      </div>
    </div>
  );
};

export default Ajendas;
