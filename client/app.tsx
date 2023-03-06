import { Route, Routes } from "react-router-dom";
import routes from './routes'
import Layout from "./component/layout";

export default function App() {
  return (
    <html>
      <head>
        <title>Server Rendered App</title>
      </head>
      <body>
        <Layout>
          <Routes>
            {
              routes.map((route, keyIdx) => {
                return (
                  <Route key={keyIdx} path={route.path} element={route.element} />
                )
              })
            }
          </Routes>
        </Layout>
        <script src="./entry.js" />
      </body>
    </html>
  );
}