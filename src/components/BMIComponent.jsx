import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import HomeNavbar from "../components/HomeNavbar";
import Footer from "./Footer";
import BMIResult from "./BMIResult";

const BMIComponent = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);
  const [user_id, setUserId] = useState("");

  // Auth Login
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      const storedUserId = localStorage.getItem("user_id");
      setUserId(storedUserId);
    }
  }, [navigate]);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const calculateBMI = async () => {
    const url = `https://api-healthycare-dev.up.railway.app/bmi/${user_id}`;
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);

    const heightInMeters = heightInCm / 100; // Convert height to meters

    const bmi = weightInKg / (heightInMeters * heightInMeters);

    let status_id;
    if (bmi < 18.5) {
      status_id = 1; // Underweight
    } else if (bmi >= 18.5 && bmi < 25) {
      status_id = 2; // Normal
    } else if (bmi >= 25 && bmi < 30) {
      status_id = 3; // Overweight
    } else {
      status_id = 4; // Obesity
    }

    const data = {
      status_id,
      result: bmi.toFixed(2),
      date: new Date().toISOString().split("T")[0],
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        setResult(responseData.data.result);
        console.log("Data berhasil ditambahkan!");
      } else {
        console.log("Gagal menambahkan data");
        alert("BMI Failed");
      }
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
    }
  };

  return (
    <div className="kelas-page">
      <HomeNavbar />
      <div className="kelas min-vh-10">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">BMI Kalkulator</h1>
              <p className="text-center">
                Panduan Anda untuk membantu Diet Gizi Seimbang
              </p>
            </Col>
          </Row>

          <Row className="text-center justify-content-center shadow rounded-3">
            <Col>
              <div className="mb-3">
                <label htmlFor="age" className="mt-3 mb-1 fw-medium">
                  Masukan Usia :{" "}
                </label>
                <br />
                <input type="number" placeholder="20" required />
              </div>

              <div className="mb-3">
                <label htmlFor="gender" className="fw-medium">
                  Masukan Gender :
                </label>
                <br />
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                <label htmlFor="male">Laki-laki</label>
                <br />
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  required
                />
                <label htmlFor="female">Perempuan</label>
              </div>

              <div className="mb-3">
                <label htmlFor="weight" className="mb-1 fw-medium">
                  Masukan Berat (kg):{" "}
                </label>
                <br />
                <input
                  type="number"
                  value={weight}
                  placeholder="60"
                  onChange={handleWeightChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="height" className="mb-1 fw-medium">
                  Masukan Tinggi (cm):{" "}
                </label>
                <br />
                <input
                  type="number"
                  value={height}
                  placeholder="170"
                  onChange={handleHeightChange}
                  required
                />
              </div>

              <button
                className="mb-5 btn btn-success rounded-1"
                onClick={calculateBMI}
              >
                Hitung BMI
              </button>
              <br />
              {result && (
                <p className="text-center">Hasil BMI anda: {result}</p>
              )}
            </Col>
          </Row>

          <Row className="text-center justify-content-center">
            <Col>
              <BMIResult />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default BMIComponent;
