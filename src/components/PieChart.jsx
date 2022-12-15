import React, { useState, useEffect } from "react";
import { priceComposition } from "../data/price";
import Chart from "react-apexcharts";
import { useDispatch } from "react-redux";
import { sortedMaterial } from "../reducers/sortedArrReducer";

const PieChart = ({ keys, values, other, otherValues, setMaterialPrice }) => {
  const [prices, setPrices] = useState([]);
  const [otherPrices, setOtherPrices] = useState([]);
  const [otherTotalPrice, setOtherTotalPrice] = useState();

  const dispatch = useDispatch();
  const othersPercentage = 100 - values.slice(-1)[0];

  let result = [];
  useEffect(() => {
    Prices();
  }, []);

  useEffect(() => {
    topPrice();
  }, []);

  if (!(keys && values)) return null;

  const Prices = () => {
    for (let i = 0; i <= priceComposition.length; i++) {
      for (let j = 0; j <= 12; j++) {
        if (Object.keys(priceComposition[j])[0] === keys[i]) {
          const price =
            (Object.values(priceComposition[j])[0] * values[i]) / 100;
          result.push(price);
        }
      }
    }
    setMaterialPrice(result?.reduce((prev, curr) => prev + curr, 0) * 100);
    setPrices(result);
    setOtherTotalPrice(
      result.slice(0,-1).reduce((prev, curr) => prev + Number(curr), 0)
    );
    setOtherPrices(result.slice(0, -1));
  };

  const combineArrays = () => {
    const arr = keys.reduce((acc, val, ind) => {
      acc[val] = result[ind];
      return acc;
    }, {});
    return arr;
  };

  // Choosing 3 expensive composition
  const topPrice = () => {
    let sortTable = [];
    const array = combineArrays();
    for (const composition in array) {
      sortTable.push([composition, array[composition]]);
    }
    sortTable.sort(function (a, b) {
      return b[1] - a[1];
    });
    dispatch(sortedMaterial(sortTable));
  };

  return (
    <div className="container d-flex text-center algin-center">
      <div>
        <h2>Composition by Percentage</h2>
        <div className="d-flex algin-center mt-5">
          <Chart
            series={[values.slice(-1)[0], othersPercentage]}
            type="pie"
            width="320"
            options={{
              title: {
                text: "Composition by Percentage",
                align: "right",
                margin: 10,
                padding: 5,
                offsetX: -20,
                offsetY: 0,
                floating: false,
                style: {
                  fontSize: "14px",
                  fontWeight: "bold",
                  fontFamily: undefined,
                  color: "#263238",
                },
              },
              labels: ["Fe", "others"],
              legend: {
                position: "left",
                offsetX: 20,
                offsetY: 20,
                fontSize: "14px",
                fontFamily: "Helvetica, Arial",
                fontWeight: 400,
                width: 90,
              },
            }}
          />
          <Chart
            series={otherValues.slice(0, -1)}
            type="pie"
            width="300"
            options={{
              title: {
                text: "Other",
                align: "center",
                margin: 10,
                offsetX: 50,
                offsetY: 0,
                floating: false,
                style: {
                  fontSize: "14px",
                  fontWeight: "bold",
                  fontFamily: undefined,
                  color: "#263238",
                },
              },
              labels: other.slice(0, -1),
              legend: {
                position: "left",
                offsetX: 20,
                offsetY: 20,
                fontSize: "14px",
                fontFamily: "Helvetica, Arial",
                fontWeight: 400,
                width: 90,
              },
              chart: {
                offsetX: -60,
              },
            }}
          />
        </div>
      </div>

      <div>
        <h2>Prices by Percentage</h2>
        <div className="d-flex algin-center mt-5">
          <Chart
            series={[prices.slice(-1)[0], otherTotalPrice]}
            type="pie"
            width="320"
            options={{
              title: {
                text: "Prices By Percentage",
                align: "right",
                margin: 10,
                padding: 5,
                offsetX: -20,
                offsetY: 0,
                floating: false,
                style: {
                  fontSize: "14px",
                  fontWeight: "bold",
                  fontFamily: undefined,
                  color: "#263238",
                },
              },
              labels: ["Fe", "Other"],
              legend: {
                position: "left",
                offsetX: 20,
                offsetY: 20,
                fontSize: "14px",
                fontFamily: "Helvetica, Arial",
                fontWeight: 400,
                width: 90,
              },
              chart: {
                offsetX: 40,
              },
            }}
          />
          <Chart
            series={otherPrices}
            type="pie"
            width="300"
            options={{
              chart: {
                width: 300,
                type: "pie",
              },
              labels: other.slice(0,-1),
              title: {
                text: "Other",
                align: "center",
                margin: 10,
                offsetX: 50,
                offsetY: 0,
                floating: false,
                style: {
                  fontSize: "14px",
                  fontWeight: "bold",
                  fontFamily: undefined,
                  color: "#263238",
                },
              },
              legend: {
                position: "left",
                offsetX: 20,
                offsetY: 20,
                fontSize: "14px",
                fontFamily: "Helvetica, Arial",
                fontWeight: 400,
                width: 90,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
