import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Effect from "../components/Effect";
import { useStore } from "zustand";
import checkStore from "../store/checkStore";
import { useEffect } from "react";

export default function MainLayout() {

  const {checks} = useStore(checkStore);
  const navigate = useNavigate();

  useEffect(() => {

    if(!checks.isStart) {
      navigate('/');
    }

  },[checks.isStart])


  return (
    <div className="bg-tuna-900 z-10">
      <Effect />
      {checks.isStart && <Navbar />}
      <Outlet />
    </div>
  );
}
