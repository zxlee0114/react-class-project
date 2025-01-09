import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Modal } from "bootstrap";
// 建議外部資源先放，內部資源往後放
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const modalRef = useRef(null);
  const customModal = useRef(null);

  const openModal = () => {
    customModal.current.show()
  };

  const closeModal = () => {
    customModal.current.hide()
  }

  console.log(import.meta.env.VITE_APP_PATH); // 環境變數
  const { VITE_APP_PATH } = import.meta.env;

  useEffect(() => {
    (async () => {
      // const response = await axios.get("https://randomuser.me/api/");
      const response = await axios.get(VITE_APP_PATH);
      console.log(response);
      openModal();
      setTimeout(() => {
        closeModal();
      }, 2000);
    })();
  }, []);

  useEffect( () => {
    console.log(modalRef.current);
    // const myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
    customModal.current = new Modal(modalRef.current);
    // customModal.current.show()
  }, []);
  
  

  return (
    <>
    {/* 透過 JS 撰寫，可參考文件：https://getbootstrap.com/docs/5.3/components/modal/#via-javascript */}
    <button
          type="button"
          className="btn btn-primary"
          onClick={openModal}
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          ref={modalRef}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
    
    {/* 用 HTML 寫法，在 main.jsx 匯入 bootstrap 即可：即 import "bootstrap"
    <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>*/}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          className="btn btn-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
