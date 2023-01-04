import React from 'react';
import { useState } from 'react';

function App() {
  const [horizan, setHorizan] = useState(10);
  const [vertical, setVertical] = useState(10);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(10);
  const [color, setColor] = useState('black');
  const [colorBox, setColorBox] = useState('green');



  return (
    <div className='app'>
      <div className='control'>
        <div className='form-group'>
          <label>طول افقی</label>
          <input value={horizan} type="range" className="form-range"
            title="Choose your horizantal"
            min='-200' max='200' onChange={(e) => setHorizan(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>طول عمودی</label>
          <input value={vertical} type="range" className="form-range"
            title="Choose your vertical"
            min='-200' max='200' onChange={(e) => setVertical(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>تاری</label>
          <input value={blur} type="range" className="form-range"
            title="Choose your blur"
            min='0' max='200' onChange={(e) => setBlur(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>گسترش رنگ</label>
          <input value={spread} type="range" className="form-range"
            title="Choose your spread"
            min='-100' max='50' onChange={(e) => setSpread(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>رنگ سایه</label>
          <input value={color} type="color" className="form-range form-control form-control-color"
            title="Choose your color"
            onChange={(e) => setColor(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>رنگ جعبه</label>
          <input value={colorBox} type="color" className="form-range form-control form-control-color"
            title="Choose your colorBox"
            onChange={(e) => setColorBox(e.target.value)} />
        </div>
      </div>
      <div className='out-put'>
        <div className='box' style={{ boxShadow: `${horizan}px ${vertical}px ${blur}px ${spread}px ${color}`, background: `${colorBox}` }}>
          <p>{horizan}px {vertical}px {blur}px {spread}px {color}</p>
        </div>
      </div>


    </div>

  );
}

export default App;
