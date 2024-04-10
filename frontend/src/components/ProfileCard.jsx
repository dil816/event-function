const ProfileCard = ({ contributor }) => {
  const deletehandler = async () => {
    const response = await fetch(
      `http://localhost:4000/api/contributors/${contributor._id}`,
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
      //dispatch({ type: "DELETE_AJENDA", payload: data });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center pb-10 m-8">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={`../public/images/${contributor.profileImage}`}
          alt="Profile image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">
          {contributor.name}
        </h5>
        <span className="text-sm text-gray-500">
          {contributor.contribution}
        </span>
        <button
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-1 border border-red-500 hover:border-transparent rounded mt-2"
          onClick={deletehandler}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default ProfileCard;
