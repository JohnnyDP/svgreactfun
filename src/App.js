import { Problem } from './comps/Problem';
import { Factor } from './comps/Factor';

const factors = [
  {name: "test1"},
  {name: "test2"},
  {name: "test3"},
]


const App = () => {
  return (
    <div style={{height:1000, width:1000}}>
      <svg style={{height:1000, width:1000}}>
      <line x1={"50%"} y1={"50%"} x2={200} y2={200} stroke="black"></line>
        <Problem x={"50%"} y={"50%"} />
        <Factor x={200} y={200} />
        <Factor x={300} y={200} />
        <Factor x={200} y={700} />
      </svg>
    </div>
  );
}

export default App;
