import CustomerList from "../component/CustomerList";
import EquipmentList from "../component/EquipmentList";
import { useCustomerContext } from "../hooks/useCustomerContext";
import { useEquipmentContext } from "../hooks/useEquipmentContext";
export default function Home() {
  const { state } = useCustomerContext();
  const { state: state2 } = useEquipmentContext();

  return (
    <div>
      <h2>Home</h2>
      <CustomerList list={state.customers} />
      <EquipmentList list={state2.equipments} />
    </div>
  );
}
