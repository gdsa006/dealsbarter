import React, { createContext, useState } from 'react';

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    city: null,
    state: null,
  });

  const updateLocation = (newLocation) => {
    setLocation(newLocation);
  };

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Here, you can use latitude and longitude to fetch the city and state information
          // You can make an API call to a geocoding service or use a reverse geocoding library
          // Update the location state with the retrieved information
          setLocation({ city: 'Example City', state: 'Example State' });
        },
        (error) => {
          console.log('Error getting location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  return (
    <LocationContext.Provider value={{ location, updateLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationContext, LocationProvider };
