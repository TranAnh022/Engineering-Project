import React, { useState, useEffect } from "react";
import { priceComposition } from "../data/price";
import Chart from "react-apexcharts";
import { useDispatch } from "react-redux";
import { sortedMaterial } from "../reducers/sortedArrReducer";


const PieChart = ({ keys, values }) => {
  const [prices, setPrices] = useState([]);
  const dispatch = useDispatch();
  let result = [];
  useEffect(() => {
    sortPrices();
  }, []);

  useEffect(() => {
    topPrice();
  }, []);

  if (!(keys && values)) return null;

  const sortPrices = () => {
    for (let i = 0; i <= priceComposition.length; i++) {
      for (let j = 0; j <= keys.length+1; j++) {
        if (Object.keys(priceComposition[j])[0] === keys[i]) {
          const price =
            (Object.values(priceComposition[j])[0] * values[i]) / 100;
          result.push(price);
        }
      }
    }
    setPrices(result);
  };

  const combineArrays = () => {
    const arr = keys.reduce((acc, val, ind) => {
      acc[val] = result[ind];
      return acc;
    }, {});
    return arr;
  };

  const topPrice = () => {
    let sortTable = [];
    const array = combineArrays();
    for (const chemical in array) {
      sortTable.push([chemical, array[chemical]]);
    }
    sortTable.sort(function (a, b) {
      return b[1] - a[1];
    });
    dispatch(sortedMaterial(sortTable));
  };

  return (
    <div className="container d-flex justify-content-evenly text-center algin-center">
      <div>
        <h2> Chemical Position By Percentage</h2>
        <Chart
          series={values}
          type="pie"
          width="380"
          options={{
            chart: {
              width: 380,
              type: "pie",
            },
            labels: keys,
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200,
                  },
                  legend: {
                    position: "bottom",
                  },
                },
              },
            ],
          }}
        />
      </div>
      <div className="text-center">
        <h2>Prices by Percentage</h2>
        <Chart
          series={prices}
          type="pie"
          width="380"
          options={{
            colors: [
              "#F3B415",
              "#F27036",
              "#663F59",
              "#6A6E94",
              "#4E88B4",
              "#00A7C6",
              "#18D8D8",
              "#A9D794",
              "#46AF78",
              "#A93F55",
              "#8C5E58",
              "#2176FF",
              "#33A1FD",
              "#7A918D",
              "#BAFF29",
            ],
            chart: {
              width: 380,
              type: "pie",
            },
            labels: keys,
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200,
                  },
                  legend: {
                    position: "bottom",
                  },
                },
              },
            ],
          }}
        />
      </div>
      <div></div>

    </div>
  );
};

export default PieChart;
