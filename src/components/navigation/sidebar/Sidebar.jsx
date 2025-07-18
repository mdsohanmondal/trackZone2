import DarkFilterBtn from '../../ui/buttons/DarkFilterBtn';
import FilterBtn from '../../ui/buttons/FilterBtn';

const Sidebar = () => {
  return (
    <div className="h-screen min-w-20 m-1 bg-white mr-3 px-4">
      <h3 className="text-xl">Filters</h3>
      <div className="min-w-52 border border-zinc-300 px-5 py-2 flex flex-col gap-5 mt-10 rounded-xl">
        <h2 className="text-xl font-normal">Timezone</h2>
        <div className="filter-buttons flex flex-col gap-2">
          <DarkFilterBtn typeTimezone="All Timezone" timezoneLength={4} />
          <FilterBtn typeTimezone="UTC-5" timezoneLength={2} eventLength={4} />
          <FilterBtn typeTimezone="UTC-5" timezoneLength={1} />
          <FilterBtn typeTimezone="UTC-5" timezoneLength={3} eventLength={9} />
          <FilterBtn typeTimezone="UTC-5" timezoneLength={1} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
