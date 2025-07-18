import Navbar from '../components/navigation/navbar/Navbar';
import Sidebar from '../components/navigation/sidebar/Sidebar';
import Home from '../pages/home/Home';

const RootLayout = () => {
  return (
    <div className="bg-[#eee] w-full min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50 border-b border-zinc-300 bg-white shadow-sm">
        <Navbar />
      </div>
      <div className="flex py-16 gap-10">
        <div className="w-72 fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white border-r border-zinc-200 shadow-sm">
          <Sidebar />
        </div>
        <div className="w-full pl-72">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;

// // const RootLayout = () => {
//   return (
// <div className="bg-[#eee] min-h-screen">
//   {/* Navbar */}
//   <header className="fixed top-0 left-0 w-full z-50 border-b border-zinc-300 bg-white shadow-sm">
//     <Navbar />
//   </header>

//   {/* Main layout container */}
//   <
//     div className="pt-16 flex">
//     {/* Sidebar */}
//     <aside className="w-64 fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white border-r border-zinc-200 shadow-sm">
//       <Sidebar />
//     </aside>

//     {/* Main content */}
//     <main className="ml-64 p-6 w-full">
//       <Home />
//     </main>
//   </>
// </div>
//   );
// };

// export default RootLayout;
