import Router from "@/Components/Router";
import Layout from "@/Components/Layout";
import Header from "@/Components/Header";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
