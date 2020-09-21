import React from 'react';
// import TodoList from './components/Todo';
// import UseMemo from './components/UseMemo';
// import UseCallback from './components/UseCallback';
import UseContext from './components/UseContext';
import Alert from "./components/UseContext/Alert";
import {AlertProvider} from "./context/AlertContext";

function App() {
    return (
        <AlertProvider>
            <UseContext toggle={() => {}} />
            <Alert />
        </AlertProvider>
    )
}

export default App;