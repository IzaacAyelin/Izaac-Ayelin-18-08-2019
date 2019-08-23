
export const apiKey = 'F6rJH4IEQrOzGcZUX4Qh7BZ1WmH1GFug';
export const endPoints = {
    geoposition: `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=`,
    locationKey: 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/',
    autocompleteSearch: `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=`,
    currentConditions: `https://dataservice.accuweather.com/currentconditions/v1/`,
};