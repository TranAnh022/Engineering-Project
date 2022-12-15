import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import Col from "react-bootstrap/Col";
import { savePriceAndDate } from "../reducers/materialReducer";
import { useDispatch, useSelector } from "react-redux";

const urlBase = `https://metals-api.com/api/timeseries?access_key=${process.env.REACT_APP_API_METAL}&start_date=2022-01-04&end_date=2022-01-16&base=EURO`;

const DrawLineChart = ({ composition }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(composition);
  }, []);

  const fetchData = async (composition) => {
    if (composition === "Fe") {
      await axios
        .get(`${urlBase}&symbols=IRON`)
        .then((response) => {
          const rates = response.data.rates;
          const priceArr = Object.values(rates);

          const list = priceArr.map((data) => {
            return Object.values(data)[0]?.toFixed(2);
          });
          setData(list);
          dispatch(savePriceAndDate({ composition, rates }));
        })
        .catch((err) => console.log(err));
    }
    if (composition === "Cu") {
      await axios
        .get(`${urlBase}&symbols=LME-XCU`)
        .then((response) => {
          const rates = response.data.rates;
          const priceArr = Object.values(rates);
          const list = priceArr.map((data) => {
            return Object.values(data)[0]?.toFixed(2);
          });
          setData(list);
          dispatch(savePriceAndDate({ composition, rates }));
        })
        .catch((err) => console.log(err));
    }
    if (composition === "Cr") {
      await axios
        .get(`${urlBase}&symbols=STEEL-SC`)
        .then((response) => {
          const rates = response.data.rates;
          const priceArr = Object.values(rates);
          const list = priceArr.map((data) => {
            return Object.values(data)[0]?.toFixed(2);
          });
          setData(list);
          dispatch(savePriceAndDate({ composition, rates }));
        })
        .catch((err) => console.log(err));
    }
    if (composition === "Ni" || composition === "Mo" || composition === "Mg") {
      await axios
        .get(`${urlBase}&symbols=${composition.toUpperCase()}`)
        .then((response) => {
          const rates = response.data.rates;
          const priceArr = Object.values(rates);
          const list = priceArr.map((data) => {
            return Object.values(data)[0]?.toFixed(2);
          });
          setData(list);
          dispatch(savePriceAndDate({ composition, rates }));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      {data.length > 0 && (
        <Chart
          series={[
            {
              name: "Desktops",
              data: data,
            },
          ]}
          type="line"
          height={350}
          options={{
            chart: {
              height: 350,
              type: "line",
              zoom: {
                enabled: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "straight",
            },
            title: {
              text: `${composition}'s price By Month(2022)`,
              align: "left",
            },
            grid: {
              row: {
                colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.5,
              },
            },
            xaxis: {
              categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            },
            yaxis: [
              {
                axisBorder: {
                  show: true,
                  color: "#000000",
                },
                labels: {
                  style: {
                    colors: "#000000",
                    fontSize: "1rem",
                  },
                },
                title: {
                  text: "EURO per kg",
                  style: {
                    color: "#000000",
                    fontSize: "0.9rem",
                  },
                },
              },
            ],
          }}
        />
      )}
    </div>
  );
};

const LineChart = () => {
  const sortedArr = useSelector(({ sortedArrMaterial }) =>
    sortedArrMaterial.slice(0, 3)
  );

  return (
    <div className="container p-5 d-flex algin-center justify-evenly">
      {sortedArr?.map((m) => {
        return (
          <Col className="gap-3" key={m[0]}>
            <DrawLineChart composition={m[0]} />
          </Col>
        );
      })}
    </div>
  );
};

export default LineChart;
