import { useContext } from "react";
import { TodoContext } from "../Wrapper";// Adjust the path as needed
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Create = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
 const [todos, settodos] = useContext(TodoContext);

  const submitHandler = (data) => {
    data.id = nanoid();
    data.isCompleted = "false";
    settodos([...todos, data]);
    toast.success("Task added successfully!",{
      autoClose: 1500,
    });
    reset();
  };

  return (
    <div className="w-[38%] p-7 border bg-teal-100">
      <h1 className="text-4xl text-center mb-7">Create Task</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title", { required: "title can't be empty" })}
          className="w-full border-1 bg-white border-gray-300 outline-0 px-7 py-3 rounded text-xl"
          type="text"
          placeholder="To-do Name"
        />
        <small className="px-4 test-base capitalize font-medium text-red-500">
          {errors?.title?.message}
        </small>
        <br />
        <br />
        <button className="w-full border-1 bg-emerald-500  outline-0 px-7 py-3 rounded text-xl active:scale-98">
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
