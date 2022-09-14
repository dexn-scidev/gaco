import { useInView } from "react-intersection-observer";

function App() {
  const { ref, inView } = useInView();

  console.log(inView);

  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "end" }}>
      <div style={{ position: "relative" }}>
        <div ref={ref} style={{ position: "absolute", bottom: "-100px" }}>
          hoge
        </div>
      </div>
    </div>
  );
}

export default App;
