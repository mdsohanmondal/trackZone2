import ClockCard from '../../components/cards/ClockCard';

const Home = () => {
  return (
    <div className=" w-full min-h-screen px-10 bg-zinc-100">
      <h1 className="text-2xl">All Clocks</h1>
      <h4 className="text-md">4 clocks</h4>
      <div className="grid grid-cols-3 gap-2">
        <ClockCard />
        <ClockCard />
        <ClockCard />
        <ClockCard />
        <ClockCard />
      </div>
    </div>
  );
};

export default Home;
