import { IoMdTime } from 'react-icons/io';
import Button from '../../ui/buttons/Button';

const Navbar = () => {
  return (
    <div className="w-full m-1 flex items-center justify-between">
      <div className="left-side flex items-center justify-center gap-5">
        <div className="logo cursor-pointer flex items-center justify-center gap-2">
          <span>
            <IoMdTime className="text-4xl text-green-600" />{' '}
          </span>
          <h3 className="text-4xl">TrackZone</h3>
        </div>
        <div className="flex items-center justify-center">
          <span className="px-2 py-1 rounded">Local Time:</span>
          <span className="bg-zinc-100 px-1 py-1 rounded">06:69:00 AM</span>
        </div>
      </div>
      <div className="right-side">
        <div className="buttons">
          <Button dark>+ Add Clock</Button>
          <Button>+ Add Event</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
