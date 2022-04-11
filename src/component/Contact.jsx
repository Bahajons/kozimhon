import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { problem } from "./var/modul";

const Contact = () => {
  const [discount, setDiscount] = useState({})
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [job, setJob] = useState("")

  useEffect(() => {
    Get();
  }, [])

  const Get = () => {
    axios.get("http://api.kozimhon.uz/variable/")
      .then((res) => { setDiscount(res.data[0]) })
      .catch();
  }
  const error = () => {
    toast("Iltimos ma'lumotlarni to'ldiring!");
  }

  const success = () => {
    toast("Ma'lumotlaringiz muvaffaqiyatli yuborildi!");
  }

  const send = () => {
    if (name != "" & number != "" & job != "") {
      axios.post('http://api.kozimhon.uz/profile/', {
        full_name: name,
        phone_number: number,
        busines_type: job
      })
        .then(function (response) {
          success()
          setName("")
          setNumber("")
          setJob("")
        })
        .catch(function (error) {
          error()
        });
    }
    else {
      error()
    }
  }
  return (
    <>
      <div className="contact py-md-5 py-3">
        <div className="container">
          <ToastContainer />
          <h2 className="text-center">
          <span>35%</span> лик чегирма <span>20-апрел</span> гача амал қилади
            {/* <span>{discount.path}%</span> чегирма учун <span>{discount.sale}</span>та жой қолди */}
          </h2>
          <div className="row">
            <div className="col-md-6 py-5">
              <ul className="list-unstyled">
                {problem.map((item, index) => (
                  <li key={index}><p>{item}</p></li>
                ))}
              </ul>
            </div>
            <form action="" className="col-md-6 py-4">
              <h3 className="text-center">Рўйхатдан ўтинг</h3>
              <label htmlFor="name">Исмингизни киритинг</label>
              <input onChange={(e) => setName(e.target.value)} value={name} className="form-control" type="text" placeholder="Козимхон Тураев" id="name" />
              <label htmlFor="number">Номерингизни киритинг</label>
              <input onChange={(e) => setNumber(e.target.value)} value={number} mask="+\9\98(99)-999-99-99" maskChar=" " className="form-control" type="text" id="number" placeholder="+99 891 001 05 09" />
              <label htmlFor="job">Бизнес соҳангизни киритинг</label>
              <input onChange={(e) => setJob(e.target.value)} value={job} className="form-control" type="text" id="job" placeholder="Бизнес турини киритинг" />
              <button type="button" className="btn btn-lg btn-outline-light mt-3" onClick={() => send()}>Юбориш</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact;