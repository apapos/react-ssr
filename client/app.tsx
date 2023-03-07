import Layout from "@client/component/layout";
import { Route, Routes } from "react-router-dom";
import route from "@client/routes";
import { Suspense } from 'react';
export default function App() {
  const handleClick = () => {
    console.log('客户端点击事件执行。。。');
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <button onClick={handleClick}>客户端Button</button>
        <Routes>
          {
            route.map((el, idx) => {
              return (
                <Route key={idx} path={el.path} element={el.element}></Route>
              )
            })
          }
        </Routes>
      </Layout>
    </Suspense>
  );
}