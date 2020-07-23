import React, { useState } from "react";
import { useDispatch, useSelector,shallowEqual } from "react-redux";
import GeneralResult from "./components/generalData";
import FullData from "./components/fullData";
import { setActiveUser } from "./store/actions/actions";
import "./App.css";

const App = () => {
  const [filter, setFilter] = useState(""); 

  const dispatch = useDispatch();

  const selectedUser = useSelector(state => state.activeUser, shallowEqual);
  
  const data = useSelector(state => state.users);
  const filterData = () => data.filter(item =>
    item.general.lastName.toLowerCase().includes(filter.toLowerCase())
  );  

  const handler = e => {
    setFilter(e.target.value);
  };

  const filteredData = filter.length ? filterData(data, filter) : [];
  const shouldShowResults = filteredData.length > 0;
  const shouldShowNoResults = filter.length > 0 && !filteredData.length;
  
  return (
    <div className="App">
    <h1>CLIENTS DATABASE</h1>
      <input placeholder="Search..." onChange={handler} />
      <div className="container">        
        {shouldShowResults && (
        <ul>
          {filteredData.map((item, index) => (
            <GeneralResult
              key={index}
              avatar={item.general.avatar}
              firstName={item.general.firstName}
              lastName={item.general.lastName}              
              click={() => dispatch (setActiveUser(item))}
            />
          ))}
        </ul>
      )}
      {shouldShowNoResults && <div>No results</div>}
      {selectedUser && (
        <ul>
          {[selectedUser].map((user, index) => (
            <FullData
              key={index}
              avatar={user.general.avatar}
                  firstName={user.general.firstName}
                  lastName={user.general.lastName}
                  company={user.job.company}
                  title={user.job.title}
                  email={user.contact.email}
                  phone={user.contact.phone}
                  street={user.address.street}
                  city={user.address.city}
                  zipCode={user.address.zipCode}
                  country={user.address.country}              
            />
          ))}
        </ul>
      )}        
      </div>
      <div className="copyright">&copy; Developed by Leonid Markov 2020</div>     
    </div>
  );
};

export default App;
