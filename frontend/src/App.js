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
            Sinh ngày {day} tháng {month} năm {year} vào giờ {hour}
          </h2>
          <h2> Số chủ đạo của bạn là: {numerous}</h2>
          <h2>
            Các năm tuổi đáng chú ý: {age}, {age + 9}, {age + 18}, {age + 27}
          </h2>

          <div className="select-day">
            <Select
              id="day"
              showSearch
              placeholder="Chọn ngày sinh"
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
              placeholder="Chọn tháng sinh"
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
              placeholder="Chọn năm sinh"
              style={{ width: 150 }}
              onChange={handleYearChange}
            />
          </div>
          <div className="select-hour">
            <Select
              id="hour"
              showSearch
              placeholder="Chọn giờ sinh"
              optionFilterProp="children"
              onChange={handleHourChange}
              style={{ width: 150 }}
              filterOption={(input, option) =>
                option.children.toLowerCase().includes(input.toLowerCase())
              }
            >
              <Option value="1">Tí (23h-1h)</Option>
              <Option value="2">Sửu (1h-3h)</Option>
              <Option value="3">Dần (3h-5h)</Option>
              <Option value="4">Mẹo (5h-7h)</Option>
              <Option value="5">Thìn (7h-9h)</Option>
              <Option value="6">Tỵ (9h-11h)</Option>
              <Option value="7">Ngọ (11h-13h)</Option>
              <Option value="8">Mùi (13h-15h)</Option>
              <Option value="9">Thân (15h-17h)</Option>
              <Option value="10">Dậu (17h-19h)</Option>
              <Option value="11">Tuất (19h-21h)</Option>
              <Option value="12">Hợi (21h-23h)</Option>
              <Option value="null">
                <i>Không nhớ rõ</i>
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
            Xem Thần Số Học
          </Button>
          <Button type="dashed" shape="round" size="large">
            <HeartTwoTone twoToneColor="#eb2f96" />
            Xem Mệnh Khuyết
          </Button>

          <Button type="dashed" shape="round" size="large">
            <SmileTwoTone />
            Xem Lá Số Tử Vi
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default App;
