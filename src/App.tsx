import Router from "@/Components/Router";
import Layout from "@/Components/Layout";
import Header from "@/Components/Header";
import { Provider } from "react-redux";
import store from "@/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Layout>
        <Router />
      </Layout>
    </Provider>
  );
}

export default App;
