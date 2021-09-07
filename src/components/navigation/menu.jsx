import React, { useEffect, createRef } from "react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import facebook from "../../images/social/facebook.png";
import instagram from "../../images/social/instagram.png";
const Menu = () => {
  const navRef = createRef(null);

  useEffect(() => {
    gsap.from(navRef.current.children, {
      opacity: 0,
      stagger: 0.2,
      x: 30,
      duration: 1.4,
      ease: "power4.out",
      delay: 0.3,
    });
    // eslint-disable-next-line
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <MenuContent>
      <CompanyName onClick={scrollToTop}>A+B Architektura</CompanyName>
      <Ul ref={navRef}>
        {[
          { name: "Projekty", url: "/projects" },
          { name: "Architektura", url: "/architecture" },
          { name: " Wnętrza", url: "/entries" },
          { name: "kontakt", url: "/contact" },
        ].map((el, i) => {
          return (
            <li key={`ab-${i}`}>
              <MenuLink to={el.url} onClick={scrollToTop}>
                {el.name}
              </MenuLink>
            </li>
          );
        })}

        <li className="socialMediaItem">
          <ExternalLink
            href="https://www.facebook.com/AB-Architektura-777333362388913"
            id="fb"
          >
            <img src={facebook} alt="facebook" />
          </ExternalLink>
        </li>
        <li className="socialMediaItem">
          <ExternalLink href="https://www.instagram.com/aplusb_architektura/?hl=pl">
            <img src={instagram} alt="instagram" />
          </ExternalLink>
        </li>
      </Ul>
    </MenuContent>
  );
};
const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px 0 0;
`;
export const ExternalLink = styled.a`
  text-decoration: none;
  color: #000;
  padding: 0 15px;

  &:link {
    text-decoration: none;
    color: #000;
    outline: none;
  }
  &:visited {
    text-decoration: none;
    color: #000;
  }
  &.active {
    font-weight: bold;
  }

  &#fb {
    padding-left: 0;
  }
  img {
    height: 20px;
    padding: 0;
  }
`;

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  padding: 0 15px;

  &:link {
    text-decoration: none;
    color: #000;
    outline: none;
  }
  &:visited {
    text-decoration: none;
    color: #000;
  }
  &.active {
    font-weight: bold;
  }

  &#fb {
    padding-left: 0;
  }
  img {
    height: 20px;
    padding: 0;
  }
`;
const CompanyName = styled.p`
  align-self: flex-end;
  font-size: 0.9rem;
  font-weight: bold;
  padding-right: 2px;

  margin: 0;
  /* letter-spacing: 2px; */
`;
const Ul = styled.ul`
  display: flex;

  list-style: none;
  line-height: 30px;
  margin-bottom: -10px;
  li:last-of-type {
    a {
      padding: 0;
    }
  }
  .socialMediaItem {
    padding-top: 1%;
  }
`;

export default Menu;
