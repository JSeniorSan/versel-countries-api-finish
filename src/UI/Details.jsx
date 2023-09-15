import styles from "../style/scss/index.module.scss";
import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { neibThunk } from "../store/details/details-actions";
import { selectNeib } from "../store/details/details-selectors";

const ButtonCountry = styled.button`
  padding: 10px;
  background-color: var(--colorHeader);
  border-radius: 5px;
  color: var(--colorText);
  border: none;
  box-shadow: var(--colorGrayInfo) 0 0 5px 1px;
  &:hover {
    background-color: #6fadc6a9;
  }
`;

export default function Details({ detailInfo, push }) {
  const geo = navigator.language;
  const adaptivePopulation = new Intl.NumberFormat(geo).format(
    detailInfo.population
  );
  const dispatch = useDispatch();
  const neib = useSelector(selectNeib);

  useEffect(() => {
    if (detailInfo.borders) {
      dispatch(neibThunk(detailInfo.borders));
    }
  }, []);

  return (
    <div className={styles.countryInfoDiv2__clicked}>
      <div className={styles.container__image}>
        <img
          src={detailInfo.flags.png}
          alt={detailInfo.name.common}
          className={styles.image}
        />
      </div>
      <div className={styles.countryInfoDiv2__main}>
        <div>
          <div className={styles.country}>{detailInfo.name.common}</div>
          <div className={styles.text_div}>
            <div className={styles.page}>
              <b>Native Name:</b>
            </div>
            <div className={styles.text_div__content}>
              {detailInfo.name.official}
            </div>
          </div>
          <div className={styles.text_div}>
            <div className={styles.page}>
              <b>Population:</b>
            </div>
            <div className={styles.text_div__content}>{adaptivePopulation}</div>
          </div>
          <div className={styles.text_div}>
            <div className={styles.page}>
              <b>Region:</b>
            </div>
            <div className={styles.text_div__content}>{detailInfo.region}</div>
          </div>
          <div className={styles.text_div}>
            <div className={styles.page}>
              <b>Sub Region:</b>
            </div>
            <div className={styles.text_div__content}>
              {detailInfo.subregion}
            </div>
          </div>
          <div className={styles.text_div}>
            <div className={styles.page}>
              <b>Capital:</b>
            </div>
            <div className={styles.text_div__content}>
              {detailInfo.capital.join(", ")}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.countryInfoDiv2__endContent}>
        <div>
          <div className={styles.text_div}>
            <div className={styles.page}>
              <b>Top Level Domain:</b>
            </div>
            <div className={styles.text_div__content}>
              {detailInfo.tld.join(", ")}
            </div>
          </div>
          <div className={styles.text_div}>
            <div className={styles.page}>
              <b>Currencies:</b>
            </div>
            <div className={styles.text_div__content}>
              {Object.values(detailInfo.currencies)[0].name}
            </div>
          </div>
          <div className={styles.text_div}>
            <div className={styles.page}>
              <b>Languages:</b>
            </div>
            <div className={styles.text_div__content}>
              {Object.values(detailInfo.languages).join(", ")}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.countriesDiv}>
        <h4>Border Countries:</h4>
        <div className={styles.btn_div}>
          {neib.map((countryName) => {
            return (
              <ButtonCountry
                children={countryName}
                onClick={() => push(`/country/${countryName}`)}
                key={countryName}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
