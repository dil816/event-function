import propTypes from "prop-types";
import useAjendacontext from "../hooks/useAjendacontext";

const AjendaDetail = ({ ajend }) => {
  //const Navigate = useNavigate();
  const { ajenda, dispatch } = useAjendacontext();

  const handleUpdate = async () => {
    //Navigate(`/admin/ajenda/UpdateAjenda/${ajend._id}`);
    //setAjendas(data);
    dispatch({ type: "GET_ID", payload: ajenda, payload1: ajend._id });
  };

  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:4000/api/ajendas/${ajend._id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log(data.error);
    }

    if (response.ok) {
      console.log("delete success");
      dispatch({ type: "DELETE_AJENDA", payload: data });
    }
  };

  return (
    <div className="bg-[#fff] w-auto h-[120px] rounded-[20px] mx-[auto] my-[20px] p-[15px] relative [box-shadow:2px_2px_5px_rgba(0,_0,_0,_0.05)]">
      <h3 className="m-0 px-[6px] py-[0] text-[1.2em]">{ajend.date}</h3>
      <p className="ml-[0] mr-[0] my-[0] px-[6px] py-[0] text-[0.8em] text-[#555]">{`${ajend.startTime} - ${ajend.endTime}`}</p>
      <h4 className="m-0 px-[6px] py-[0] text-[1em] text-[#555]">
        {ajend.title}
      </h4>
      <span className="left-[40px] px-[6px] py-[0] text-[#333] text-[0.8em]">
        {ajend.timeRange} min
      </span>
      <button
        className="absolute top-[20px] right-[20px] w-[70px] cursor-pointer bg-[#fff] p-[6px] text-[rgb(19,_241,_30)] border-[2px] border-[solid] border-[rgb(19,241,30)] rounded-[20px] "
        onClick={handleUpdate}
      >
        Edit
      </button>
      <button
        className="absolute bottom-[10px] right-[20px] w-[70px] cursor-pointer bg-[#fff] p-[6px] text-[rgb(226,_43,_43)] border-[2px] border-[solid] border-[rgb(226,43,43)] rounded-[20px]"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

AjendaDetail.propTypes = {
  ajend: propTypes.object,
};

export default AjendaDetail;
