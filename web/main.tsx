import { renderToPipeableStream, RenderToPipeableStreamOptions } from "react-dom/server";
import App from './App'
export const render = (opt: RenderToPipeableStreamOptions) => {
  return renderToPipeableStream(<App />, opt);
}