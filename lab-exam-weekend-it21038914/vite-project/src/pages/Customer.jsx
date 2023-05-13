import CustomerForm from "../component/CustomerForm";
import CustomerList from "../component/CustomerList";
import SingleCustomer from "../component/SingleCustomer";
import { useCustomerContext } from "../hooks/useCustomerContext";

export default function Customer() {
  const { state } = useCustomerContext();
  console.log(state);
  return (
    <div>
      <h2>Customer page</h2>
      <div
        style={{ margin: "20px", border: "1px solid black", width: "400px" }}
      >
        {state.customers.map((cus) => (
          <div>
            <SingleCustomer
              key={cus.id}
              id={cus.id}
              name={cus.name}
            ></SingleCustomer>
          </div>
        ))}
      </div>

      <CustomerForm />
      <div> {<CustomerList list={state.customers} />}</div>
    </div>
  );
}
