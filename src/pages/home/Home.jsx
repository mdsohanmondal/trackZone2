import { useContext } from 'react';
import ClockCard from '../../components/cards/ClockCard';
import ClockPopup from '../../components/popups/ClockPopup';
import EventPopup from '../../components/popups/EventPopup';
import ClockContext from '../../context/ClockContext';

const Home = ({
  isPopupOpen,
  setIsPopupOpen,
  isPopupOpenEvent,
  setIsPopupOpenEvent,
}) => {
  const { clockItems } = useContext(ClockContext);

  return (
    <div className=" w-full min-h-screen px-10 bg-zinc-100">
      <h1 className="text-2xl">All Clocks</h1>
      <h4 className="text-md">{clockItems.length} Clocks</h4>
      {isPopupOpen && <ClockPopup setIsPopupOpen={setIsPopupOpen} />}
      {isPopupOpenEvent && (
        <EventPopup setIsPopupOpenEvent={setIsPopupOpenEvent} />
      )}
      <div className="grid grid-cols-3 gap-2">
        {clockItems.length !== 0 ? (
          clockItems?.map((item) => (
            <ClockCard
              setIsPopupOpenEvent={setIsPopupOpenEvent}
              events={item.events}
              item={item}
              key={item.id}
            />
          ))
        ) : (
          <p>No clock yet</p>
        )}
      </div>
    </div>
  );
};

export default Home;
