import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PageContainer from "./Components/PageContainer";
import { ThemeProvider } from "./ThemeContext";
import routes from "./utils/routes";
import ReducerProvider from "./ReducerContext";

// import { API_URL } from "./constants";

const App = () => {
  return (
    <ThemeProvider>
      <ReducerProvider>
        <PageContainer>
          <Navbar />
          <Switch>
            {routes.map((route, i) => {
              const { path, component: Component, exact } = route;
              return (
                <Route
                  key={i}
                  path={path}
                  exact={exact}
                  render={(routerProps, i) => {
                    return <Component key={`route_${i}`} {...routerProps} />;
                  }}
                />
              );
            })}
            {/* <Route component={NotFound} /> */}
          </Switch>
        </PageContainer>
      </ReducerProvider>
    </ThemeProvider>
  );
};

export default App;
