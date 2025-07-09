import { Box } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AppContextProvider, useAppContext } from "./context/appContext";

function useVercelAnalytics() {
  const location = useLocation();
  useEffect(() => {
    if (window.va) {
      window.va('pageview');
    }
  }, [location]);
}

function App() {
  const { username, setUsername, routeHash } = useAppContext();

  if (routeHash) {
    if (routeHash.endsWith("&type=recovery")) {
      window.location.replace(`/login/${routeHash}`);
    }
    if (routeHash.startsWith("#error_code=404"))
      return (
        <div>
          <p>This link has expired</p>
          <a href="/" style={{ cursor: "pointer" }} variant="link">
            Back to app
          </a>
        </div>
      );
  }
  return (
    <Provider>
      <AppContextProvider>
        <Box bg="gray.100">
          <Router>
            <VercelAnalyticsWrapper>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Header />
                      <Chat />
                      <Footer />
                    </>
                  }
                />
                <Route path="*" element={<p>Not found</p>} />
              </Routes>
            </VercelAnalyticsWrapper>
          </Router>
        </Box>
      </AppContextProvider>
    </Provider>
  );
}

function VercelAnalyticsWrapper({ children }) {
  useVercelAnalytics();
  return children;
}

export default App;
