import CreateCustomer from "./components/CreateCustomer/CreateCustomer";
import Customer from "./components/Customer/Customer";
import AccountOperations from "./components/AccountOperations/AccountOperations";
import BalanceDisplay from "./components/BalanceDisplay/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((store) => store.customer.fullName);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
