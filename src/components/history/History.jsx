import { useSelector } from "react-redux";
import Card from "../common/Card";
import Password from "./Password";

const History = () => {
  const passwords = useSelector((state) => state.passwordHistory);
  return (
    <Card>
      <div>
        <h2 className="text-zinc-800 text-xl capitalize  dark:text-zinc-300">
          Clipboard History
        </h2>
      </div>
      <div className="mt-2 max-h-[300px] overflow-scroll">
        {passwords?.map((password, key) => (
          <Password key={key} password={password} />
        ))}
        {passwords?.length === 0 && (
          <div className="text-center mt-2">
            <span className="text-zinc-500 dark:text-zinc-400">
              Auto Save Last 10 Passwords
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default History;
