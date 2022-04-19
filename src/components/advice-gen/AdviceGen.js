import React, { useState, useEffect } from "react";
import axios from "axios";
import AdviceGenUI from "./AdviceGenUI";

const AdviceGen = () => {
  const [advice, setAdvice] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      if (response) {
        setError("");
        setLoading(false);
        setAdvice({
          id: response.data.slip.id,
          sentence: response.data.slip.advice,
        });
      }
    } catch (error) {
      setLoading(false);
      setAdvice(null);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <AdviceGenUI
      advice={advice}
      error={error}
      loading={loading}
      fetchAdvice={fetchAdvice}
    />
  );
};

export default AdviceGen;
