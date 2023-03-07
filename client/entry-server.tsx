import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from './app'

export const render = async (req) => {
    return renderToString(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
    );
}