import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAxios } from "../services/api";

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      const getVar = await getAxios(); // axios 호출
      const queryStr = location.search;
      console.log(queryStr);

      const params = new URLSearchParams(queryStr);
      const keyword = params.get("keyword");
      console.log(keyword);

      setKeyword(keyword); // keyword 상태 업데이트
    };

    fetchData(); // 비동기 데이터 가져오기
  }, [location.search]); // location.search가 변경될 때마다 useEffect 재실행

  const [keyword, setKeyword] = useState("");
  const location = useLocation();

  return <div>{keyword}</div>;
};

export default Home;
