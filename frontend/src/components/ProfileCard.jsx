const ProfileCard = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-4 pt-4 ">
        <div className="flex flex-col items-center pb-10 m-8">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="../public/images/images.jpeg-2.jpg"
            alt="Profile image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            Bonnie Green jsdkf
          </h5>
          <span className="text-sm text-gray-500">Visual Designer</span>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
