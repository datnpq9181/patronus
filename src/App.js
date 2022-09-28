import { React, useState } from "react";
import "./App.css";
import { TimePicker, InputNumber, Button, Space, Select } from "antd";

import {
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
} from "@ant-design/icons";

const { Option } = Select;

let data = {
  day: null,
  month: null,
  year: null,
  hour: null,
}

const onChangeDay = (value) => {
  data.day = value;
};

const onChangeMonth = (value) => {
  data.month = value;
};

const onChangeYear = (value) => {
  data.year = value;
};

const onChangeHour = (value) => {
  data.hour = value;
};


const onSearch = (value) => {
  console.log("Tìm:", value);
};

const ThanSo = (value) => {
  console.log(data.day);
  console.log(data.month);
  console.log(data.year);
  console.log(data.hour)
}

const App = () => (
  <div className="App">
    <Space direction="vertical" align="center" wrap={true} size="medium">
      <h1>Patronus Internal</h1>

      <Select
        showSearch
        placeholder="Chọn ngày sinh"
        optionFilterProp="children"
        onChange={onChangeDay}
        onSearch={onSearch}
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

      <Select
        showSearch
        placeholder="Chọn tháng sinh"
        optionFilterProp="children"
        onChange={onChangeMonth}
        onSearch={onSearch}
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

      <InputNumber
        min={1950}
        max={2022}
        placeholder="Chọn năm sinh"
        style={{ width: 150 }}
        onChange={onChangeYear}
      />

      <Select
        showSearch
        placeholder="Chọn giờ sinh"
        optionFilterProp="children"
        onChange={onChangeHour}
        onSearch={onSearch}
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
      </Select>
      <br />
      <Button type="primary" shape="round" size="large" onClick={ThanSo}>
        <CheckCircleTwoTone twoToneColor="#52c41a" />
        Xem Thần Số Học
      </Button>
      <br />
      <Button type="dashed" shape="round" size="large">
        <HeartTwoTone twoToneColor="#eb2f96" />
        Xem Mệnh Khuyết
      </Button>
      <br />
      <Button type="dashed" shape="round" size="large">
        <SmileTwoTone />
        Xem Lá Số Tử Vi
      </Button>
    </Space>
  </div>
);

export default App;
