import axios from 'axios';




export const getPlacesData = async(type,sw,ne)=>{
    try {
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude:sw.lat ,
            tr_latitude:ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '4f21dd24ebmsh796d628a661a10dp17e35bjsnbf9c83b4fc40',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
       
        return data;
    } catch (error) {
        console.log(error);
    }
}