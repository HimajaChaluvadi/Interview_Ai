import React, { useEffect, useState } from "react";
import { features } from "../../utils/defaultData";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PageLoader from "../../component/PageLoader";
import toast from "react-hot-toast";
import { axiosInstance, endPoints } from "../../api/axios";

const UserDashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [Enrollexamtable, setEnrollexamtable] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handelToolsClick = (tool) => {
    navigate(tool.link);
    localStorage.setItem("activeItem", tool.name);
  };

  const getEnroll = async () => {
    try {
      setLoader(true);
      const { data } = await axiosInstance.get(endPoints.exam.getLatest, {
        withCredentials: true,
      });
      setEnrollexamtable(data?.data);
    } catch (error) {
      toast.error("Error fetching course info.", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getEnroll();
  }, []);

  return (
    <>
      <div className="mb-6 max-sm:mb-3">
        <h1 className="text-4xl font-semibold text-[#005151] leading-[60px] capitalize max-sm:text-3xl max-sm:mb-2">
          Welcome {currentUser?.first_Name} {currentUser?.last_Name} 🎉,
        </h1>
        <p className="font-normal text-base text-won-blue leading-4">
          Let’s land your dream job with Virtual Interview!

        </p>

        <h2 className="text-xl mt-10 font-semibold text-[#005151] relative text-center sm:text-left">
          Interview AI Tools
          <span className="absolute bottom-[-8px] left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-[100px] h-[2px] bg-[#005151]"></span>
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-3 gap-4 max-2xl:grid-cols-2 max-sm:grid-cols-1">
        {features.map((tool, index) => (
          <button
            onClick={() => handelToolsClick(tool)}
            key={index}
            className={`flex items-center bg-white rounded-lg p-2 w-full h-full cursor-pointer shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] max-sm:flex-col ${
              location.pathname === tool.link ? "bg-[#005151] text-white" : ""
            }`}
          >
            {/* Icon */}
            <div className="bg-[#e5f2ea] hover:bg-[#d9ece1] rounded-lg flex flex-col items-center justify-center w-[70px] h-[70px] max-sm:mb-4">
              <span className="text-xs text-center font-medium text-[#005151] mb-2">
                {tool?.title2}
              </span>
              <img src={tool.icon} alt={tool.title} className="w-[25px]" />
            </div>
            {/* Content */}
            <div className="ml-4 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {tool.title}
                </h3>
                <img src="/assets/nextarrow.png" alt="" className="w-[20px]" />
              </div>
              <p className="text-sm text-gray-500 text-left mt-0">
                {tool.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default UserDashboard;
