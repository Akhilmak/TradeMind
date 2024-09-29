
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const timeSeries=[
  {
    keyword:"DIGITAL_CURRENCY_DAILY",
    key:"Time Series(Daily)",
    lable:"1 Day",
    value:1,
  },
  {
    keyword:"DIGITAL_CURRENCY_WEEKLY",
    key:"Time Series(Weekly)",
    lable:"1 Week",
    value:7,
  },
  {
    keyword:"DIGITAL_CURRENCY_MONTHLY",
    key:"Time Series(Monthly)",
    lable:"1 Month",
    value:30,
  },
  
]
const StockDataChart = () => {
  const[activeLable,setActiveLable]=useState("1 Day")
  const series = [
    {
      data: [
        [1726722331125, 62112.0777405805],
        [1726726709603, 61868.7049102662],
        [1726730622344, 62070.2877419622],
        [1726733856477, 62138.7789274923],
        [1726737540372, 62142.5519539995],
        [1726741417263, 62437.8754301105],
        [1726744809290, 62435.7177430573],
        [1726747649469, 62705.4650403173],
        [1726751791692, 63214.120516709],
        [1726755441189, 63409.8424246802],
        [1726759472840, 63060.5529160986],
        [1726761715551, 63156.5816751433],
        [1726765275097, 63691.9497185899],
        [1726770452120, 63710.849971934],
        [1726774033911, 63326.7496922206],
        [1726777746364, 63209.2792586548],
        [1726780878845, 63107.8596896527],
        [1726784333370, 62816.8189267821],
        [1726788500896, 63030.9141655786],
        [1726792165189, 62859.8812985034],
        [1726795564942, 62723.2104242519],
        [1726799096792, 62940.1309840489],
        [1726801990353, 63221.2595257817],
        [1726805337641, 63938.0673773021],
        [1726809341927, 63845.7978480014],
        [1726813075871, 63663.2675182086],
        [1726815852893, 63794.6504349843],
        [1726820690258, 63445.2679094072],
        [1726824222183, 63450.9862717779],
        [1726827024006, 63535.9394537943],
        [1726830776049, 63605.9177744603],
        [1726834386380, 63560.9556924566],
        [1726838408273, 62858.4891517502],
        [1726842677238, 63176.2774814086],
        [1726846566643, 63035.9619067263],
        [1726849955779, 62963.619087084],
        [1726852819139, 62977.9936207083],
        [1726855937861, 62340.3153826851],
        [1726859670216, 62898.9955216169],
        [1726863231163, 62741.9619142068],
        [1726867436556, 63275.8356417883],
        [1726870959713, 63218.7433462949],
        [1726873678779, 63133.4157791498],
        [1726877659860, 63112.8148547916],
        [1726882037941, 63137.6933524942],
        [1726884572491, 62927.8587861502],
        [1726889184452, 62901.8098821456],
        [1726892697689, 62903.3756844846],
        [1726895387759, 62814.0084952385],
        [1726898593240, 62913.7468428022],
        [1726902393571, 63014.1561646268],
        [1726907238339, 63062.5707295136],
        [1726909735813, 63034.28908934],
        [1726914584822, 63016.3634861319],
        [1726917981017, 63073.6613736921],
        [1726920312569, 63095.7530633388],
        [1726923682535, 63163.6042533926],
        [1726927531257, 63180.1753687934],
        [1726932676786, 63195.4597264264],
      ],
    },
  ];
  const options={
    chart:{
        id:"area-datetime",
        type:"area",
        height:"350",
        zoom:{
            autoScaleYaxis:true
        },
    },
    dataLabels:{
        enabled:false
    },
    xaxis:{
            type:"datetime",
            tickAmount:6
    },
    markers:{
        colors:["#fff"],
        strokeWidth:3,
        // strokeOpacity:1,
        strokeColor:"#fff",
        style:"hollow",
        size:0
    },
    tooltip:{
        theme:"dark"
    },
    fill:{
        type:"gradient",
        gradient:{
            shadeIntensity:1,
            inverseColors:false,
            opacityFrom:0.5,
            opacityTo:0.9,
            stops:[0,100]
        }
    },
    grid:{
        borderColor:"#47535E",
        strokeDashArray:4,
        show:true
    }
    
  }
  const handleActiveLable=(value)=>{
    setActiveLable(value)
  }
  return (<div>
    <div className="space-x-3">
      {timeSeries.map((item) => (
        <Button  onClick={() => handleActiveLable(item.lable)} variant={activeLable == item.lable ? "default" : "ghost"} key={item.lable}>{item.lable}</Button>
      ))}

    </div>
    <div id="chart-timelines">
<ReactApexChart options={options} series={series} type="area"/>
    </div>
  </div>
  );
};

export default StockDataChart;
