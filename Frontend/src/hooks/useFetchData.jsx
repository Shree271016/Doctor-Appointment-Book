
import { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        
        if (!token) {
          throw new Error("Please login to access this resource");
        }

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        });

        const result = await response.json();
        
        if (!response.ok) {
          throw new Error(result.message || `HTTP error! status: ${response.status}`);
        }

        if (!result.success) {
          throw new Error(result.message);
        }

        setData(result.data);

      } catch (error) {
        setError(error.message);
        // Auto-logout if 401 received
        if (error.message.includes("401")) {
          localStorage.removeItem("token");
          window.location.replace("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};