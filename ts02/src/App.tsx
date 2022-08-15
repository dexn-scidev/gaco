import { useCallback, useReducer } from "react";
import { faker } from "@faker-js/faker";
import ProductList from "./ProductList";

type Item = {
  id: string;
  name: string;
  value: string;
};

const range = (from: number, to: number): number[] => {
  const r: number[] = [];
  for (let i = from; i < to; i++) {
    r.push(i);
  }
  return r;
};

const defaultItems: Item[] = range(0, 100).map((i) => ({
  id: String(i),
  name: faker.lorem.word(),
  value: "0",
}));

const ActionType = {
  REAPLCE: "REPLACE",
};

const actions = {
  replace: (id: string, value: string) => ({
    type: ActionType.REAPLCE as typeof ActionType.REAPLCE,
    payload: { id, value },
  }),
};

type Action = ReturnType<typeof actions.replace>;

const reducer = (items: Item[], action: Action): Item[] => {
  switch (action.type) {
    case ActionType.REAPLCE:
      return items.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, value: action.payload.value };

        return item;
      });
    default:
      return items;
  }
};

function App() {
  const [items, dispatch] = useReducer(reducer, defaultItems);

  const setValue = (id: string) =>
    useCallback((value: string) => {
      dispatch(actions.replace(id, value));
    }, []);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ProductList
            name={item.name}
            value={item.value}
            setValue={setValue(item.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default App;
