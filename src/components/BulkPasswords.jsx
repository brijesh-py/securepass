import { useSelector } from "react-redux";
import Display from "./Display";

const BulkPasswords = () => {
  const bulkPasswords = useSelector((state) => state.bulkPasswords);

  return (
    <div>
      {bulkPasswords?.map((bulkPassword, key) => (
        <Display key={key} bulkPassword={bulkPassword} />
      ))}
    </div>
  );
};
export default BulkPasswords;
