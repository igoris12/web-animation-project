import { useReducer } from 'react';
import LoadingPage from "./components/LoadingPage/LoadingPage";
import Page from "./components/page/Page";
import OptionsReducer from "./reducers/OptionsReducer";
import OptionsContext from "./reducers/OptionsContext";

function App() {
  const [opotions, dispatch] = useReducer(OptionsReducer, { animation: 1 })
  return (
    <OptionsContext.Provider value={{ optionsState: opotions, optionsDispatch: dispatch }}>
      <div className="App">
        <LoadingPage />
        <Page />
      </div>
    </OptionsContext.Provider>
  );
}

export default App;
