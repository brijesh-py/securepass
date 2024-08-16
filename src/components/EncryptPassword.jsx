import { useForm } from "react-hook-form";
import { toggleEncryptPassModal } from "../store/passwordSlice";
import Card from "./common/Card";
import Logo from "./common/Logo";
import { useRef } from "react";
import Button from "./common/Button";
import Input from "./common/Input";
import { useDispatch } from "react-redux";

const EncryptPassword = () => {

  const form = useRef();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const encryptPassword = (encrypt_key) => {
    dispatch(toggleEncryptPassModal(encrypt_key));
  };
  
  return (
    <div
      className="fixed flex items-center justify-center left-0 top-0 w-full h-screen p-3 z-10 "
      style={{ backgroundColor: "rgba(0,0,0,.9)" }}
    >
      <Card className="w-[400px] py-8 px-5 md:p-8 bg-zinc-100  dark:bg-zinc-950 rounded-md ">
        <Logo className="mb-4" />
        <p className="text-center mb-5 text-zinc-600 dark:text-zinc-400">
          Secure your generated password with custom <b>encrypted key</b>.
        </p>
        <form
          className="space-y-3"
          ref={form}
          onSubmit={handleSubmit(encryptPassword)}
        >
          <div>
            <Input
              {...register("encrypt_key", {
                required: true,
              })}
              type="text"
              onChange={() => {}}
              name="encrypt_key"
              className="w-full block"
              required
              placeholder="Enter key"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Button
              className="capitalize block mx-auto"
              onClick={() => dispatch(toggleEncryptPassModal())}
            >
              Cancel
            </Button>
            <Button type="submit" className={`capitalize w-full block mx-auto`}>
              Encrypt Password
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default EncryptPassword;
