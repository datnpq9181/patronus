import React from 'react';
import { Button } from 'antd';
import './App.css';
import { CaretRightOutlined } from '@ant-design/icons'
const App = () => (
  <div className="App">

  <p>Ban Muon Lam Gi?</p><br />
    <Button type="primary" shape="round" size="large" onClick="activeXemThanSoHoc()"><CaretRightOutlined />Xem Than So Hoc</Button> <br /><br />

    <Button type="danger" href="https://www.google.com" shape="round" size="large"><CaretRightOutlined />Xem Menh Khuyet</Button> <br /><br />

    <Button type="dased" shape="round" size="large" onClick="activeXemLaSoTuVi()"><CaretRightOutlined />Xem La So Tu Vi</Button> <br /><br />


  </div>
);



export default App;
