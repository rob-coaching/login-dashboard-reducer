import { useContext } from "react";
import { DataContext } from "../store/DataProvider";

export const Dashboard = () => {

  const { state: { user } } = useContext(DataContext)

  return (
    <div className="dashboard p-5">
      <div className="grid place-items-center">
        <span className="text-center">{user?.email}</span>
        <img
          className="border-2"
          style={{ width: 150, height: 150 }}
          src={user?.avatar}
        />
      </div>
    </div>
  );
}