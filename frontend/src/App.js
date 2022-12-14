import { React, useState } from "react";
import "./App.css";
import { InputNumber, Button, Space, Select } from "antd";

import {
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
} from "@ant-design/icons";

const { Option } = Select;

function App() {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [hour, setHour] = useState();
  const [numerous, setNumerous] = useState();
  const [age, setAge] = useState();

  const handleDayChange = (value) => {
    console.log(value);
    setDay(value);
  };

  const handleMonthChange = (value) => {
    console.log(value);
    setMonth(value);
  };

  const handleYearChange = (value) => {
    console.log(value);
    setYear(value);
  };

  const handleHourChange = (value) => {
    console.log(value);
    setHour(value);
  };

  const calculateAge = (value) => {
    value = 36 - value;
    setAge(value);
    return value;
  };

  function getFinalValue(val) {
    //Process num to final sum
    const processValStr = Array.from(String(val));
    const processValNum = [];
    let sumVal = 0;

    for (var i = 0; i < processValStr.length; i++) {
      let temp = parseInt(processValStr[i], 10);
      processValNum.push(temp);
      sumVal += temp;
    }
    return sumVal;
  }

  function checkRes(val) {
    if (val > 11 || val === 22) return false;
  }
  const processNumerous = () => {
    //Button to active to process Than So
    console.log("Processing ...");
    var resDay = getFinalValue(day);
    var resMonth = getFinalValue(month);
    var resYear = getFinalValue(year);
    var numerous = resDay + resMonth + resYear;

    if (checkRes(numerous) === false) {
      numerous = getFinalValue(numerous);
    }
    console.log("Result: ", numerous);
    setNumerous(numerous);
    calculateAge(numerous);
  };

  return (
    <div className="App">
      <div class="center-screen">
        <Space direction="vertical" align="center" wrap={true} size="large">
          <h1>Patronus Internal</h1>

          <h2>
            Sinh ng??y {day} th??ng {month} n??m {year} v??o gi??? {hour}
          </h2>
          <h2> S??? ch??? ?????o c???a b???n l??: {numerous}</h2>
          <h2>
            C??c n??m tu???i ????ng ch?? ??: {age}, {age + 9}, {age + 18}, {age + 27}
          </h2>

          <div className="select-day">
            <Select
              id="day"
              showSearch
              placeholder="Ch???n ng??y sinh"
              optionFilterProp="children"
              onChange={handleDayChange}
              value={this}
              style={{ width: 150 }}
              filterOption={(input, option) =>
                option.children.toLowerCase().includes(input.toLowerCase())
              }
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
              <Option value="6">6</Option>
              <Option value="7">7</Option>
              <Option value="8">8</Option>
              <Option value="9">9</Option>
              <Option value="10">10</Option>
              <Option value="11">11</Option>
              <Option value="12">12</Option>
              <Option value="13">13</Option>
              <Option value="14">14</Option>
              <Option value="15">15</Option>
              <Option value="16">16</Option>
              <Option value="17">17</Option>
              <Option value="18">18</Option>
              <Option value="19">19</Option>
              <Option value="20">20</Option>
              <Option value="21">21</Option>
              <Option value="22">22</Option>
              <Option value="23">23</Option>
              <Option value="24">24</Option>
              <Option value="25">25</Option>
              <Option value="26">26</Option>
              <Option value="27">27</Option>
              <Option value="28">28</Option>
              <Option value="29">29</Option>
              <Option value="30">30</Option>
              <Option value="31">31</Option>
            </Select>
          </div>
          <div className="select-month">
            <Select
              id="month"
              showSearch
              placeholder="Ch???n th??ng sinh"
              optionFilterProp="children"
              onChange={handleMonthChange}
              value={this}
              style={{ width: 150 }}
              filterOption={(input, option) =>
                option.children.toLowerCase().includes(input.toLowerCase())
              }
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
              <Option value="6">6</Option>
              <Option value="7">7</Option>
              <Option value="8">8</Option>
              <Option value="9">9</Option>
              <Option value="10">10</Option>
              <Option value="11">11</Option>
              <Option value="12">12</Option>
            </Select>
          </div>
          <div className="select-year">
            <InputNumber
              min={1950}
              max={2022}
              placeholder="Ch???n n??m sinh"
              style={{ width: 150 }}
              onChange={handleYearChange}
            />
          </div>
          <div className="select-hour">
            <Select
              id="hour"
              showSearch
              placeholder="Ch???n gi??? sinh"
              optionFilterProp="children"
              onChange={handleHourChange}
              style={{ width: 150 }}
              filterOption={(input, option) =>
                option.children.toLowerCase().includes(input.toLowerCase())
              }
            >
              <Option value="1">T?? (23h-1h)</Option>
              <Option value="2">S???u (1h-3h)</Option>
              <Option value="3">D???n (3h-5h)</Option>
              <Option value="4">M???o (5h-7h)</Option>
              <Option value="5">Th??n (7h-9h)</Option>
              <Option value="6">T??? (9h-11h)</Option>
              <Option value="7">Ng??? (11h-13h)</Option>
              <Option value="8">M??i (13h-15h)</Option>
              <Option value="9">Th??n (15h-17h)</Option>
              <Option value="10">D???u (17h-19h)</Option>
              <Option value="11">Tu???t (19h-21h)</Option>
              <Option value="12">H???i (21h-23h)</Option>
              <Option value="null">
                <i>Kh??ng nh??? r??</i>
              </Option>
            </Select>
          </div>

          <Button
            type="primary"
            shape="round"
            size="large"
            onClick={processNumerous}
          >
            <CheckCircleTwoTone twoToneColor="#52c41a" />
            Xem Th???n S??? H???c
          </Button>
          <Button type="dashed" shape="round" size="large">
            <HeartTwoTone twoToneColor="#eb2f96" />
            Xem M???nh Khuy???t
          </Button>

          <Button type="dashed" shape="round" size="large">
            <SmileTwoTone />
            Xem L?? S??? T??? Vi
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default App;
