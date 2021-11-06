import ReactDOM from "react-dom";
import { HelloReact } from "./Helloreact";

// 第一引数で関数を<>で囲うことでコンポーネントとして扱われている
ReactDOM.render(<HelloReact />, document.getElementById("root"));
