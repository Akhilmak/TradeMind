import { Button } from "@/components/ui/button";
import { fetchMarketChart } from "@/State/Coin/Action";
import { store } from "@/State/Store";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
const timeSeries = [
  {
    keyword: "DIGITAL_CURRENCY_DAILY",
    key: "Time Series(Daily)",
    lable: "1 Day",
    value: 1,
  },
  {
    keyword: "DIGITAL_CURRENCY_WEEKLY",
    key: "Time Series(Weekly)",
    lable: "1 Week",
    value: 7,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY",
    key: "Time Series(Monthly)",
    lable: "1 Month",
    value: 30,
  },
  {
    keyword: "DIGITAL_CURRENCY_YEARLY",
    key: "Time Series(Yearly)",
    lable: "1 Year",
    value: 365,
  },
];


const StockDataChart = ({coinId}) => {
  const dispatch=useDispatch();
  const {coin}=useSelector(store=>store)
  const [activeLable, setActiveLable] = useState(timeSeries[0]);
  useEffect(()=>{
    dispatch(fetchMarketChart({coinId,days:activeLable.value,jwt:localStorage.getItem("jwt")}))
  },[dispatch,coinId,activeLable]);

 
  const series = [
    {
      data: coin.marketChart.data,
    },
  ];
  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height:350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    markers: {
      colors: ["#fff"],
      strokeWidth: 3,
      // strokeOpacity:1,
      strokeColor: "#fff",
      style: "hollow",
      size: 0,
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.1,
        opacityFrom: 0.1,
        opacityTo: 0.4,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };
  const handleActiveLable = (value) => {
    setActiveLable(value);
  };

  return (
    <div>
      <div className="space-x-3">
        {timeSeries.map((item) => (
          <Button
            className="rounded-full"
            onClick={() => handleActiveLable(item)}
            variant={activeLable.lable == item.lable ? "default" : "ghost"}
            key={item.lable}
          >
            {item.lable}
          </Button>
        ))}
      </div>
      <div id="chart-timelines" >
        <ReactApexChart options={options} series={series} type="area" height={700}/>
      </div>
    </div>
  );
};

export default StockDataChart;
