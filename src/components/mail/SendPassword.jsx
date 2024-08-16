import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useSendPassword from "../hooks/useSendPassword";
import Card from "../common/Card";
import Input from "../common/Input";
import Button from "../common/Button";
import Logo from "../common/Logo";
import { useForm } from "react-hook-form";
import { toggleMailModal } from "../../store/passwordSlice";

const SendPassword = () => {
  const form = useRef();
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const password = useSelector((state) => state.tempPassword);
  const { sendPassword, success } = useSendPassword(form);

  const sendEmail = (data) => {
    setDisabled(true);
    if (data.password === password) {
      sendPassword()
        .then(() => {
          if (success) {
            toast.success(" Password has been sent!");
            dispatch(toggleMailModal());
            reset();
            setDisabled(false);
          } else {
            toast.error("Password has been not sent!");
            setDisabled(false);
          }
        })
        .catch(() => {
          toast.error("Password has been not sent!");
          reset();
          setDisabled(false);
        });
    } else {
      toast.error("Don't sent custom message!");
      setDisabled(false);
    }
  };

  return (
    <div
      className="fixed flex items-center justify-center left-0 top-0 w-full h-screen p-3 z-10 "
      style={{ backgroundColor: "rgba(0,0,0,.9)" }}
    >
      <Card className="w-[400px] py-8 px-5 md:p-8 bg-zinc-100  dark:bg-zinc-950 rounded-md ">
        <Logo className="mb-4" />
        <p className="text-center mb-5 text-zinc-600 dark:text-zinc-400">
          Securely generate and send strong passwords directly to your email.
        </p>
        <form
          className="space-y-3"
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
        >
          <div className="flex items-center justify-between">
            <input
              {...register("password", {
                required: true,
              })}
              value={password}
              type="text"
              onChange={() => {}}
              name="password"
              className=" block w-full p-2 text-xl text-zinc-900 font-mono bg-zinc-200 dark:text-zinc-200 dark:bg-zinc-900 border-none rounded shadow outline-none"
              required
              readOnly
            />
          </div>
          <Input
            required
            disabled={disabled ? true : false}
            className={`${disabled && "cursor-not-allowed"}`}
            label="Full Name"
            name="to_name"
            {...register("to_name", {
              required: true,
            })}
          />
          <Input
            required
            disabled={disabled ? true : false}
            className={`${disabled && "cursor-not-allowed"}`}
            label="Email ID"
            name="to_email"
            {...register("to_email", {
              required: true,
            })}
          />
          <div className="flex items-center space-x-2">
            <Button
              className="capitalize block mx-auto"
              onClick={() => dispatch(toggleMailModal())}
            >
              Cancel
            </Button>
            <Button
              disabled={disabled ? true : false}
              type="submit"
              className={`capitalize w-full block mx-auto ${
                disabled && "disabled:bg-fuchsia-300 cursor-wait"
              }`}
            >
              Send Password
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SendPassword;
