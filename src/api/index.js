import axios from 'axios';

const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async(sw,ne)=>{
    try {
        const {data:{data}} = await axios.get(URL, {
          params: {
            bl_latitude:sw.lat ,
            tr_latitude:ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '9a0b8ef610msh0fad83863f79465p1c8633jsnf2d829749394',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}