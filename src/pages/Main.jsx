import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePassword } from "../store/passwordSlice";
import {
  BulkPasswords,
  Display,
  Generate,
  Header,
  History,
  useAccessibility,
} from "../components";

const Main = () => {
  const generateBulkPasswords = useSelector(
    (state) => state.generateBulkPasswords
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(generatePassword());
  }, []);
  useAccessibility();
  return (
    <>
      <Header />
      {generateBulkPasswords ? <BulkPasswords /> : <Display />}
      <Generate />
      <History />
    </>
  );
};

export default Main;
