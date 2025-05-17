import Footer from "./components/Footer";
import Header from "./components/Header";
import { AppProvider } from "./context/AppContext";
import Home from "./pages/Home";

function App() {
    return (
        <AppProvider>
            <div className="min-h-screen ">
                <Header />
                <Home />
                <Footer />
            </div>
        </AppProvider>
    );
}

export default App;
