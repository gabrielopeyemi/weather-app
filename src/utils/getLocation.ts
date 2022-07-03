export const getLocation = (setLocation: any) => {

    if (!navigator.geolocation) {
      return setLocation('Geolocation is not supported by your browser')
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(`${position.coords.latitude},${position.coords.longitude}`)
        return 
      }, () => {
        return setLocation('Unable to retrieve your location')
      });
    }
  }