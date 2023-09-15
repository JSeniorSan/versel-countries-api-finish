import styled from "styled-components";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setRegion } from "../store/controls/controls-actions";
import { selectFilterState } from "../store/controls/controls-selectors";
import Select from "react-select";
const SearchComponenta = styled.aside`
  display: flex;
  gap: 10px;
  border: 1px solid gray;
  padding: 5px;
  grid-column: 1/2;
  color: var(--colorText);
  background-color: var(--colorMain);
  margin-top: 15px;
  padding-left: 15px;
  border-radius: 3px;
  align-items: center;
`;

const FilterComponenta = styled.aside`
  border: none;
  padding: 10px;
  grid-column: 1/2;
  padding-left: 30px;
  color: var(--colorText);
  background-color: var(--colorMain);
  justify-self: end;
  padding-right: 0px;
`;

const FilterLineComponenta = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
  padding: 15px;
`;

const CustomSelect = styled(Select).attrs({
  styles: {
    control: (base) => ({
      ...base,
      color: "var(--colorText)",
      backgroundColor: "var(--colorMain)",
      border: "1px solid var(--colorGrayInfo)",
      boxShadow: "none",
    }),
    option: (base, state) => ({
      ...base,
      cursor: "pointer",
      color: "var(--colorText)",
      backgroundColor: state.isSelected
        ? "var(--colorGrayInfo)"
        : "var( --colorMain)",
    }),
  },
})`
  width: 250px;
  border: none;

  & * {
    color: var(--colorText) !important;
  }

  & > div[id] {
    background-color: var(--colorMain);
  }
`;

export default function SortPanel() {
  const filterState = useSelector(selectFilterState);
  const optionsMap = {
    Africa: {
      value: "Africa",
      label: "Африка",
    },
    Americas: {
      value: "Americas",
      label: "Америка",
    },
    Asia: {
      value: "Asia",
      label: "Азия",
    },
    Europe: {
      value: "Europe",
      label: "Европа",
    },
    Oceania: {
      value: "Oceania",
      label: "Океания",
    },
  };

  const options = Object.values(optionsMap);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    return dispatch(setSearch(e.target.value));
  };

  return (
    <section>
      <FilterLineComponenta>
        <SearchComponenta>
          <HiMiniMagnifyingGlass size={"20px"} />
          <input
            type="search"
            placeholder="Search for a country..."
            onChange={handleSearch}
          />
        </SearchComponenta>
        <FilterComponenta>
          <CustomSelect
            options={options}
            value={optionsMap[filterState.region]}
            onChange={(reg) => {
              dispatch(setRegion(reg?.value || ""));
            }}
            placeholder="Search for a country..."
            isClearable
            isSearchable={false}
          />
        </FilterComponenta>
      </FilterLineComponenta>
    </section>
  );
}
