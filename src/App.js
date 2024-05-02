import * as IO5 from "react-icons/io5";
import * as FI from "react-icons/fi";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {

  const [vertical, setVertical] = useState('0');
  const [horizontal, setHorizontal] = useState('0');
  const [blur, setBlur] = useState('20');
  const [spread, setSpread] = useState('10');
  const [shadowColor, setShadowColor] = useState('#222');
  const [bgColor, setBgColor] = useState('#0984e3');

  const copyShadow = () => {
    const val = document.querySelector('.codeBox p').textContent;
    navigator.clipboard.writeText(val);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "با موفقیت کپی شد"
    });
  }

  return (
    <div className="App vh-100 d-flex flex-column justify-content-between">
      <div className="main row m-0 p-0 h-100 d-flex align-items-center">
        <div className="col-lg-4 p-4 d-flex gap-3 flex-column">
          <div className="form-group d-flex align-items-center gap-2">
            <IO5.IoArrowDown />
            <input type="range" className="form-range" min={-200} max={200} value={vertical} onChange={(e) => setVertical(e.target.value)} />
            <IO5.IoArrowUp />
          </div>
          <div className="form-group d-flex align-items-center gap-2">
            <IO5.IoArrowForward />
            <input type="range" className="form-range" min={-200} max={200} value={horizontal} onChange={(e) => setHorizontal(e.target.value)} />
            <IO5.IoArrowBack />
          </div>

          <div className="form-group d-flex align-items-center gap-2">
            <IO5.IoDisc />
            <input type="range" className="form-range" min={0} max={100} value={blur} onChange={(e) => setBlur(e.target.value)} />
            <IO5.IoDiscOutline />
          </div>

          <div className="form-group d-flex align-items-center gap-2">
            <FI.FiMinimize2 />
            <input type="range" className="form-range" min={0} max={150} value={spread} onChange={(e) => setSpread(e.target.value)} />
            <FI.FiMaximize2 />
          </div>
          <div className="form-group d-flex align-items-center gap-5 color-box">
            <div className="d-flex align-items-center gap-2">
              <IO5.IoColorPalette />
              <label htmlFor="">سایه</label>
              <input type="color" value={shadowColor} onChange={(e) => setShadowColor(e.target.value)} />
            </div>
            <div className="d-flex align-items-center gap-2">
              <IO5.IoColorPalette />
              <label htmlFor="">پس زمینه</label>
              <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
            </div>
          </div>

        </div>
        <div className="col-lg-8 p-4 d-flex justify-content-center align-items-center h-100">

          <div className="exampleBox w-50 h-50 d-flex align-items-center justify-content-center"
            style={{ boxShadow: `${horizontal}px ${vertical}px ${blur}px ${spread}px ${shadowColor}`, backgroundColor: `${bgColor}` }}
          >
            <div className="codeBox p-2 d-flex align-items-center text-white gap-2" role="button" onClick={copyShadow}>

              <p className="p-0 m-0">box-shadow:{vertical}px {horizontal}px {blur}px {spread}px {shadowColor};</p>
              <IO5.IoCopySharp size={14} />
            </div>
          </div>

        </div>
      </div>

      <div className="footer text-center py-3 position-absolute bottom-0 start-0 end-0">
        <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" target="_blank" className="text-muted">حمید کامیاب</a></small>
      </div>
    </div>
  );
}

export default App;
