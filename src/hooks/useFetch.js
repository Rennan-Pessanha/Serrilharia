import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  //   const httpConfig = (data, method) => {
  //     if (method == "POST") {
  //       setConfig({
  //         method:
  //       })
  //     }
  //   };

  useEffect(() => {
    let resJson;
    (async () => {
      const res = await fetch(url, {
        headers: { "Content-Type": "applicantion/json" },
        body: JSON.stringify(data),
      });
      resJson = await res.json();
    })();
    setData(resJson);
  }, [url]);

  return { data };
};
