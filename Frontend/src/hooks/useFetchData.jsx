// import { token } from '../utils/config';
// import { useState, useEffect } from 'react';


// const useFetchData = (url) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true)
//       try {
//         const res = await fetch(url, {
     
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const result = await res.json();

//         if (!res.ok) {
//           throw new Error(result.message)
//         }

//         setData(result.data);
//         setLoading(false);

//       } catch (err) {
//         setLoading(false);
//         setError(err.message);

//       }
//     };
//     fetchData();
//   }, [url])
//   return {
//     data, loading, error,
//   }
// }

// export default useFetchData

// n02


// import { useState, useEffect } from 'react';

// export const useFetchData = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);

//       const token = localStorage.getItem("token");
//       try {
//         const response = await fetch(url, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${localStorage.getItem('token')}`,  // Ensure token is sent correctly
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch user data');
//         }

//         const result = await response.json();
//         if (result.success) {
//           setData(result.data);
//         } else {
//           throw new Error(result.message || 'Something went wrong');
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetchData;

import { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        setError("No authentication token found.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch user data");
        }

        const result = await response.json();
        setData(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
