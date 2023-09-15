import { BsMoon } from "react-icons/bs";
import { setTheme } from "../store/themeSwitcher/theme-actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectTheme } from "../store/themeSwitcher/theme-selectors";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeadComponenta = styled.header`
  background-color: var(--colorHeader);
  width: 100%;
  height: 6rem;
  border-bottom: 1px solid black;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--colorText);
`;

const Title = styled.div`
  color: var(--colorText);
  padding: 20px;
  background-color: var(--colorHeader);
  font-weight: 700;
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
`;

const ThemeSwitcher = styled.div`
  display: flex;
  background-color: var(--colorHeader);
  justify-content: space-between;
  gap: 20px;
  margin-right: 10px;
  align-items: center;
  padding: 20px;
  cursor: pointer;
`;

const ThemeInfo = styled.div`
  color: var(--colorText);
`;

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const switchThemeHandler = () => {
    dispatch(setTheme(theme === "Light" ? "Dark" : "Light"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeadComponenta>
      <TitleWrapper>
        <Title onClick={() => navigate("/")}>Where in the world?</Title>
        <ThemeSwitcher onClick={switchThemeHandler}>
          <BsMoon size="30px" />
          <ThemeInfo>{theme + " " + "Mode"}</ThemeInfo>
        </ThemeSwitcher>
      </TitleWrapper>
    </HeadComponenta>
  );
}
