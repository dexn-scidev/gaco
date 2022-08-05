import { useReducer, useEffect, useCallback, memo } from "react";

const Input = memo(({ id, value, onChange }) => {
  useEffect(() => {
    console.log(value);
  });

  return <input type="text" value={value} onChange={onChange} />;
});

const reducer = (state, action) => {
  switch (action.type) {
    case "REPLACE":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, value: action.payload.value }
          : item
      );
    default:
      return state;
  }
};

const defaultList = [
  { id: 1, value: "hoge" },
  { id: 2, value: "fuga" },
  { id: 3, value: "piyo" },
];

function App() {
  const [list, dispatch] = useReducer(reducer, defaultList);

  const handleChange = (id) =>
    useCallback((e) => {
      dispatch({
        type: "REPLACE",
        payload: { id, value: e.target.value },
      });
    }, []);

  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <Input
            id={item.id}
            value={item.value}
            onChange={handleChange(item.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default App;
