import { createContext } from "react";
import { useState } from "react";
export const TodoContext = createContext();
const Wrapper = (props) => { 
  const [todos, settodos] = useState([
    { id: "1", title: "do somthing", isCompleted: false },
  ]);

  return (
    <TodoContext.Provider value={[todos, settodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default Wrapper;
