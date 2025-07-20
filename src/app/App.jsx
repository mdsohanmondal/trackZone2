import ClockContextProvider from '../context/ClockContextProvider';
import RootLayout from '../layouts/RootLayout';

const App = () => {
  return (
    <div>
      <ClockContextProvider>
        <RootLayout />
      </ClockContextProvider>
    </div>
  );
};

export default App;
