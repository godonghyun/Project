exports.sortHospitals = (hospitals) => {  //시 또는 도 별 정렬
  if (!hospitals || !Array.isArray(hospitals)) {
    return;
  }
  const compare = (a, b) => {
    return a.sidoNm < b.sidoNm
      ? -1
      : a.sidoNm > b.sidoNm
      ? 1
      : a.sgguNm < b.sgguNm
      ? -1
      : a.sgguNm > b.sgguNm
      ? 1
      : 0;
  };
  return hospitals.sort(compare);
};