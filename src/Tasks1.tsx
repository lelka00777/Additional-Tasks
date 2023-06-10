import { DataType } from "./App";

export type PropsType = {
  data: DataType;
};

export const Tasks1 = (props: PropsType) => {
  return (
    <div>
      <h1>{props.data.title}</h1>
      

      {props.data.tasks.map((el) => {
        return (
          <>
            <h3>
              <input type="checkbox" checked={el.isDone} />
              {el.title}
            </h3>
            {/* <span>{el.title}</span> */}
          </>
        );
      })}
      <ul>
        {props.data.students.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
};
