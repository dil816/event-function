import { useState, useEffect } from "react";
import Sessionform from "../components/Sessionform";
import AjendaDetail from "../components/AjendaDetail";

const Ajendas = () => {
  const [ajendas, setAjendas] = useState(null);

  useEffect(() => {
    const fetchajenda = async () => {
      const response = await fetch("http://localhost:4000/api/ajendas");

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setAjendas(data);
      }
    };
    fetchajenda();
  }, [setAjendas]);

  return (
    <div className="page">
      <div className="ajenda">
        <div className="sessions">
          {ajendas &&
            ajendas.map((ajenda) => (
              <AjendaDetail key={ajenda._id} ajenda={ajenda} />
            ))}
        </div>
        <Sessionform />
      </div>
    </div>
  );
};

export default Ajendas;
