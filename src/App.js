import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((r, i) => {
            let Layout = DefaultLayout;
            if (r.layout) {
              Layout = r.layout;
            } else if (r.layout === null) {
              Layout = Fragment;
            }
            const Page = r.component;
            return (
              <Route
                key={i}
                path={r.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
