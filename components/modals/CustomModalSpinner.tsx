
import ModaleSpinner from "./ModalSpinner";
import { useAppSelector } from "@/redux/hooks";

export default function CustomModalSpinner() {
  const { modalSpinner } = useAppSelector((state) => state.auth);
  return (
    <>
      <ModaleSpinner open={modalSpinner} close={!modalSpinner} />
    </>
  );
}
