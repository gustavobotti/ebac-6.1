import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { AppRoutes } from "./utils/routes";
import { Footer } from "./Components/Footer";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <AppRoutes />
            <Footer />
        </BrowserRouter>
    );
}

export default App;