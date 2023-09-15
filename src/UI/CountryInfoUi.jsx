import Details from "./Details";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import styles from "../style/scss/index.module.scss";
import { BiArrowBack } from "react-icons/bi";
import { setCountryByName } from "../store/details/details-actions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCountryDetail } from "../store/details/details-selectors";
import { setClear } from "../store/details/details-actions";
const DetailedInfoContainer = styled.div`
  background-color: var(--colorMain);
  color: var(--colorText);
  padding: 30px 50px 5px 50px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 100vh;
`;

const Btn = styled.button`
  color: var(--colorText);
  background-color: var(--colorHeader);
  width: 100px;
  height: 50px;
  box-shadow: #7b797991 0 0 10px 1px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  margin-bottom: 30px;
  cursor: pointer;
`;

export default function CountryInfoUi() {
  const { name } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCountryByName(name));
    return () => {
      dispatch(setClear());
    };
  }, [name]);

  const detailInfo = useSelector(selectCountryDetail);
  console.log(detailInfo);

  const navigate = useNavigate();

  return (
    <DetailedInfoContainer className={styles.detailedInfoContainer}>
      <Btn onClick={() => navigate(-1)}>
        <BiArrowBack size={"20px"} /> Back
      </Btn>
      {detailInfo.status === "loading" && <h2>Loading...</h2>}
      {detailInfo.status === "error" && <h2>detailInfo.error</h2>}
      {detailInfo.status === "received" && (
        <Details detailInfo={detailInfo.countryInfo} push={navigate} />
      )}
    </DetailedInfoContainer>
  );
}
