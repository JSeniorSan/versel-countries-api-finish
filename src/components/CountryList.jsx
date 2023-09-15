import styled from "styled-components";
import React from "react";
import styles from "../style/scss/index.module.scss";
import CountryUi from "../UI/CountryUI";
import { useSelector } from "react-redux";
import {
  selectFilterState,
  selectFilterSearch,
} from "../store/controls/controls-selectors";
import { useNavigate } from "react-router-dom";
const CountryListContainer = styled.article`
  padding: 1rem;
  background-color: var(--colorMain);
  color: var(--colorText);
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  grid-template-rows: auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    min-width: 280px;
  }
`;
function CountryList() {
  const fisterFull = useSelector(selectFilterState);

  const stateData = useSelector((state) =>
    selectFilterSearch(state.countryReducer, fisterFull)
  );
  const navigate = useNavigate();
  const allCountriesUi = stateData.map((element, i) => {
    const geo = navigator.language;
    const adaptivePopulation = new Intl.NumberFormat(geo).format(
      element.population
    );

    return (
      <CountryUi
        onclick={() => navigate(`country/${element.name.common}`)}
        image={element.flags.png}
        title={element.name.common}
        population={adaptivePopulation}
        region={element.region}
        capital={element.capital.join(", ")}
        imageAlt={element.flags.alt}
        key={i}
      />
    );
  });

  return (
    <CountryListContainer className={styles.adaptiveArticle}>
      {allCountriesUi}
    </CountryListContainer>
  );
}

export default React.memo(CountryList);
