import React, { useState } from "react";
import "./App.css";
import { TimePicker, InputNumber, Button, Space, Select } from "antd";
import { ThanSoHoc } from "./features/checkThanSo.js";
import { MenhKhuyet } from "./features/checkMenhKhuyet.js";
import {
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
} from "@ant-design/icons";

const { Option } = Select;

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log("search:", value);
};

const App = () => (
  <div className="App">
    <Space direction="vertical" align="center" wrap={true} size="medium">
      <h1>Patronus Internal</h1>
      Ngày sinh{" "}
      <Select
        showSearch
        placeholder="Chọn ngày sinh"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
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
      Tháng sinh
      <Select
        showSearch
        placeholder="Chọn tháng sinh"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
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
      Năm sinh
      <InputNumber min={1950} max={2022} defaultValue={1999} />
      Giờ sinh
      <TimePicker value={this}></TimePicker>
      <br />
      <Button type="primary" shape="round" size="large" onClick={ThanSoHoc}>
        <CheckCircleTwoTone twoToneColor="#52c41a" />
        Xem Thần Số Học
      </Button>{" "}
      <br />
      <Button type="dashed" shape="round" size="large" onClick={MenhKhuyet}>
        <HeartTwoTone twoToneColor="#eb2f96" />
        Xem Mệnh Khuyết
      </Button>{" "}
      <br />
      <Button type="dashed" shape="round" size="large" onClick={MenhKhuyet}>
        <SmileTwoTone />
        Xem Lá Số Tử Vi
      </Button>
    </Space>
  </div>
);

export default App;
