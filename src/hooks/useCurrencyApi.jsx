import { useEffect, useState } from "react";

function useCurrencyApi(){
    const [dataSet,setDataSet] = useState({});
 useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((response) => response.json())
    .then((data)=> setDataSet(data[currency]))
    console.log(dataSet)
 },[currency])
 return dataSet;
}
export default useCurrencyApi;