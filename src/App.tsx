import { Header, SendTransaction } from "./components";
import { AppKitProvider } from "./providers";

function App() {
  return (
    <AppKitProvider>
      <Header />
      <div className="max-w-7xl mx-auto p-4">
        <SendTransaction />
      </div>
    </AppKitProvider>
  );
}

export default App;
