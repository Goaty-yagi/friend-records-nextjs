
import ModaleSpinner from "./ModalSpinner";
import { useAppSelector } from "@/redux/hooks";


export default function CustomModalSpinner() {
  const { modalSpinner,isAuthenticated } = useAppSelector((state) => state.auth);
 
  return (
    <>
      <ModaleSpinner open={modalSpinner} close={!modalSpinner} top={isAuthenticated?'172px':'0'}/>
    </>
  );
}
