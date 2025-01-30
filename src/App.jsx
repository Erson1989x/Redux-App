import CreateCustomer from "./components/CreateCustomer/CreateCustomer";
import Customer from "./components/Customer/Customer";
import AccountOperations from "./components/AccountOperations/AccountOperations";
import BalanceDisplay from "./components/BalanceDisplay/BalanceDisplay";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
