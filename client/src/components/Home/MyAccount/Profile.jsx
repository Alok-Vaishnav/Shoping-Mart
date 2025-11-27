import { useNavigate } from 'react-router-dom';
import { useContext , React} from 'react';
import { MyContext } from '../../../Context/MyContext';
import ClickAwayListener from 'react-click-away-listener';

function Profile() {
  const auth = localStorage.getItem("User");
  const navigate = useNavigate();
  const { setIsProfile } = useContext(MyContext);
  console.log(auth)

  function logout() {
    localStorage.clear(auth);
    navigate("/")

  }
  return (
    <ClickAwayListener onClickAway={() => setIsProfile(false)}>
      <div className="h-[44%] w-full md:w-full lg:w-full absolute bottom-0 ml-0 md:ml-0 lg:ml-[30%] z-[9999] flex flex-col">

        <div className="h-auto md:h-[45.4%] min-h-[80px] md:min-h-[100px] w-full border-b-2 border-[#7171713f] p-[10px_0] md:p-0">
          <h1 className="mt-2 md:mt-[15px] ml-4 md:ml-[15px] text-sm md:text-base lg:text-xl font-sans font-extralight">
            Hey👋
            {JSON.parse(auth).firstname}
          </h1>

          <h1 className="mt-2 md:mt-[15px] ml-4 md:ml-[15px] text-sm md:text-base lg:text-xl font-sans font-extralight">
            Your Email:
            {JSON.parse(auth).email}
          </h1>

          <li onClick={logout} className="mt-2 md:mt-[15px] ml-4 md:ml-[15px] text-sm md:text-base lg:text-xl font-sans font-extralight cursor-pointer list-none">Logout</li>
        </div>

        <div className="w-full h-auto md:h-[54%] min-h-[100px] md:min-h-[120px] p-[10px_0] md:p-0">
          <h1 className="mt-5 md:mt-[50px] ml-[10px] md:ml-5 lg:ml-[250px] text-2xl md:text-[32px] lg:text-[50px] text-center md:text-left">Work On It</h1>
        </div>
      </div>
    </ClickAwayListener>
  )
}

export default Profile;