import Layout from "./component/layout";

export default function App() {
  const handleClick = () => {
    console.log('客户端点击事件执行。。。');

  }
  return (
    <Layout>
      <button onClick={handleClick}>客户端Button</button>
    </Layout>
  );
}