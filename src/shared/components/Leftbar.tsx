import { Link } from "react-router-dom";
import { rightbarData } from "../constants/data";

const Leftbar = () => {
  return (
    <div className="flex flex-col gap-2 w-1/6 text-xl min-w-[220px] h-full p-5">
      <div># Work</div>
      <div className="flex flex-col gap-2 pl-4 ">
        {rightbarData.work.map((data) => {
          return (
            <Link to={data.link}>
              <div className="">{data.name}</div>
            </Link>
          );
        })}
      </div>

      <div># Personal</div>
      <div className="flex flex-col gap-2 pl-4">
        {rightbarData.personal.map((data) => {
          return (
            <Link to={data.link}>
              <div className="">{data.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Leftbar;
