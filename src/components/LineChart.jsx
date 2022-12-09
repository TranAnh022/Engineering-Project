import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import Col from "react-bootstrap/Col";
import { savePriceAndDate } from "../reducers/materialReducer";
import { useDispatch } from "react-redux";

const urlBase =
  "https://metals-api.com/api/timeseries?access_key=1q001ahpb5c5p8yb9vp0852f96qouvc877kp6kxa1jj726961p74yyfw42lp&start_date=2022-01-01&end_date=2022-01-13&base=EURO";

// const urlBackend = "http://127.0.0.1:8000/api/products/";

const DrawLineChart = ({ composition }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const id = JSON.parse(localStorage.getItem("material"))[0].id;

  useEffect(() => {
    fetchData(composition);
  }, []);
  const fetchData = async (composition) => {
    if (composition == "Fe") {
      await axios
        // .get(`${urlBackend}`)
        .get(`${urlBase}&symbols=IRON`)
        .then((response) => {
          const priceArr = Object.values(response.data.rates);
          console.log(priceArr)
          const list = priceArr.map((data) => {
            return Object.values(data)[0]?.toFixed(2);
          });
          setData(list);
          dispatch(savePriceAndDate(response.data.rates,id=47));
        })
        .catch((err) => console.log(err));
    }
    if (composition == "Cu") {
      await axios
        //.get(`${urlBackend}`)
        .get(`${urlBase}&symbols=LME-XCU`)
        .then((response) => {
          const priceArr = Object.values(response.data.rates);
          const list = priceArr.map((data) => {
            return Object.values(data)[0]?.toFixed(2);
          });
          setData(list);
        })
        .catch((err) => console.log(err));
    }
    if (composition == "Cr") {
      await axios
        //.get(`${urlBackend}`)
        .get(`${urlBase}&symbols=STEEL-SC`)
        .then((response) => {
          const priceArr = Object.values(response.data.rates);
          const list = priceArr.map((data) => {
            return Object.values(data)[0]?.toFixed(2);
          });
          setData(list);
        })
        .catch((err) => console.log(err));
    }
    if (
      composition == "Ni" ||
      composition == "Mo" ||
      composition == "Mn" ||
      composition == "Mg"
    ) {
      await axios
        .get(`${urlBase}&symbols=${composition.toUpperCase()}`)
        .then((response) => {
          const priceArr = Object.values(response.data.rates);
          const list = priceArr.map((data) => {
            return Object.values(data)[0]?.toFixed(2);
          });
          setData(list);
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
              text: `Price Of ${composition} By Month(2022)`,
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

const LineChart = ({ sortedArr }) => {
  return (
    <div className="container p-5 d-flex algin-center justify-evenly">
      {sortedArr?.map((m) => {
        return (
          <Col className="gap-3">
            <DrawLineChart composition={m[0]} />
          </Col>
        );
      })}
    </div>
  );
};

export default LineChart;
