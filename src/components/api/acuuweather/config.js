
export const apiKey = 'F6rJH4IEQrOzGcZUX4Qh7BZ1WmH1GFug';
export const endPoints = {
    geoposition: `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=`,
    locationKey: 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/',
    autocompleteSearch: `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=`,
    currentConditions: `http://dataservice.accuweather.com/currentconditions/v1/`,
};