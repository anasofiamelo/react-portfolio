import { Navbar } from "./components";
function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
// const myRef = useRef();
// const [myElementIsVisible, setMyElementIsVisible] = useState();

// useEffect(() => {
//   const observer = new IntersectionObserver((entries) => {
//     const entry = entries[0];
//     setMyElementIsVisible(entry.isIntersecting);
//   });

//   observer.observe(myRef.current);
// }, []);
