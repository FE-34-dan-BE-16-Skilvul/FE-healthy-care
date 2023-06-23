// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// import HomeNavbar from "../components/HomeNavbar";
// import Footer from "./Footer";
// import BMIResult from "./BMIResult";

// const BMIComponent = () => {
//   const navigate = useNavigate();
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [result, setResult] = useState(null);
//   const [user_id, setUserId] = useState("");

//   // Auth Login
//   useEffect(() => {
//     if (!localStorage.getItem("token")) {
//       navigate("/login");
//     } else {
//       const storedUserId = localStorage.getItem("user_id");
//       setUserId(storedUserId);
//     }
//   }, [navigate]);

//   const handleWeightChange = (event) => {
//     setWeight(event.target.value);
//   };

//   const handleHeightChange = (event) => {
//     setHeight(event.target.value);
//   };

//   const calculateBMI = async () => {
//     const url = `https://api-healthycare-dev.up.railway.app/bmi/${user_id}`;
//     const weightInKg = parseFloat(weight);
//     const heightInCm = parseFloat(height);

//     const heightInMeters = heightInCm / 100; // Convert height to meters

//     const bmi = weightInKg / (heightInMeters * heightInMeters);

//     let status_id;
//     if (bmi < 18.5) {
//       status_id = 1; // Underweight
//     } else if (bmi >= 18.5 && bmi < 25) {
//       status_id = 2; // Normal
//     } else if (bmi >= 25 && bmi < 30) {
//       status_id = 3; // Overweight
//     } else {
//       status_id = 4; // Obesity
//     }

//     const data = {
//       status_id,
//       result: bmi.toFixed(2),
//       date: new Date().toISOString().split("T")[0],
//     };

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const responseData = await response.json();

//       if (response.ok) {
//         setResult(responseData.data.result);
//         toast.success("Data berhasil ditambahkan!");
//       } else {
//         toast.warn("Gagal menambahkan data");
//       }
//     } catch (error) {
//       console.log("Terjadi kesalahan:", error);
//     }
//   };

//   return (
//     <div className="kelas-page">
//       <HomeNavbar />
//       <div className="kelas min-vh-10">
//         <Container>
//           <Row className="justify-content-center">
//             <Col xs={12} sm={10} md={8} lg={6}>
//               <h1 className="fw-bold text-center">BMI Kalkulator</h1>
//               <p className="text-center">
//                 Panduan Anda untuk membantu Diet Gizi Seimbang
//               </p>

//               <Form className="text-center">
//                 <Form.Group className="mb-3">
//                   <Form.Label htmlFor="age" className="fw-medium">
//                     Masukan Usia:
//                   </Form.Label>
//                   <Form.Control type="number" placeholder="20" required />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label htmlFor="gender" className="fw-medium">
//                     Masukan Gender:
//                   </Form.Label>
//                   <div>
//                     <Form.Check
//                       inline
//                       type="radio"
//                       id="male"
//                       name="gender"
//                       label="Laki-laki"
//                       value="male"
//                       required
//                     />
//                     <Form.Check
//                       inline
//                       type="radio"
//                       id="female"
//                       name="gender"
//                       label="Perempuan"
//                       value="female"
//                       required
//                     />
//                   </div>
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label htmlFor="weight" className="fw-medium">
//                     Masukan Berat (kg):
//                   </Form.Label>
//                   <Form.Control
//                     type="number"
//                     value={weight}
//                     placeholder="60"
//                     onChange={handleWeightChange}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label htmlFor="height" className="fw-medium">
//                     Masukan Tinggi (cm):
//                   </Form.Label>
//                   <Form.Control
//                     type="number"
//                     value={height}
//                     placeholder="170"
//                     onChange={handleHeightChange}
//                     required
//                   />
//                 </Form.Group>

//                 <Button
//                   className="mb-5"
//                   variant="success"
//                   onClick={calculateBMI}
//                 >
//                   Hitung BMI
//                 </Button>
//               </Form>

//               {result && (
//                 <p className="text-center">
//                   Hasil BMI anda: <span className="fw-bold">{result}</span>
//                 </p>
//               )}
//             </Col>
//           </Row>

//           <Row className="text-center justify-content-center">
//             <Col>
//               <BMIResult />
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default BMIComponent;

//Edit
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import HomeNavbar from "../components/HomeNavbar";
import Footer from "./Footer";
import BMIResult from "./BMIResult";

const BMIComponent = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);
  const [user_id, setUserId] = useState("");
  const [bmiDescription, setBmiDescription] = useState("");

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
        const bmiDescription = getBmiDescription(bmi);
        setBmiDescription(bmiDescription);
        toast.success("Data berhasil ditambahkan!");
      } else {
        toast.warn("Gagal menambahkan data");
      }
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
    }
  };

  const getBmiDescription = (bmi) => {
    if (bmi < 18.5) {
      return "Badan anda terlalu kurus tingkatkan kalori tubuh anda.";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Berat anda sudah normal, pertahankan dan jaga kondisi tubuh.";
    } else if (bmi >= 25 && bmi < 30) {
      return "Anda kelebihan berat badan jalanin diet dan perbanyak olahraga.";
    } else {
      return "Anda mengalami Obesitas segera jaga kondisi badan anda dengan menjalani diet.";
    }
  };

  return (
    <div className="kelas-page">
      <HomeNavbar />
      <div className="kelas min-vh-10">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={10} md={8} lg={6}>
              <h1 className="fw-bold text-center">BMI Kalkulator</h1>
              <p className="text-center">
                Panduan Anda untuk membantu Diet Gizi Seimbang
              </p>

              <Form className="text-center">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="age" className="fw-medium">
                    Masukan Usia:
                  </Form.Label>
                  <Form.Control type="number" placeholder="20" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="gender" className="fw-medium">
                    Masukan Gender:
                  </Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      id="male"
                      name="gender"
                      label="Laki-laki"
                      value="male"
                      required
                    />
                    <Form.Check
                      inline
                      type="radio"
                      id="female"
                      name="gender"
                      label="Perempuan"
                      value="female"
                      required
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="weight" className="fw-medium">
                    Masukan Berat (kg):
                  </Form.Label>
                  <Form.Control
                    type="number"
                    value={weight}
                    placeholder="60"
                    onChange={handleWeightChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="height" className="fw-medium">
                    Masukan Tinggi (cm):
                  </Form.Label>
                  <Form.Control
                    type="number"
                    value={height}
                    placeholder="170"
                    onChange={handleHeightChange}
                    required
                  />
                </Form.Group>

                <Button
                  className="mb-5"
                  variant="success"
                  onClick={calculateBMI}
                >
                  Hitung BMI
                </Button>
              </Form>

              {result && (
                <div>
                  <p className="text-center">
                    Hasil BMI anda: <span className="fw-bold">{result}</span>
                  </p>
                  <p className="text-center">{bmiDescription}</p>
                </div>
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
