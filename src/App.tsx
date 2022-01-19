import { BrowserRouter as Router } from "react-router-dom";
import { FormProvider } from "./contexts/FormContext";

import { MainRouter } from "./router";

const App = () => {
  return (
    <FormProvider>
      <Router>
        <MainRouter></MainRouter>
      </Router>
    </FormProvider>

  );
}


export default App