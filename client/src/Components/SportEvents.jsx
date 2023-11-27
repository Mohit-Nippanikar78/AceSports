import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WebImg from "../assets/images/web.png";
import PagersText from "../Elements/PagersText";

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #1d1f21;
  color: #fff;
  position: relative;
`;
//cursor: grab;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 0.5em;
`;
const ShoesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Shoes = styled(motion.div)`
  width: auto;
  height: 190px;
  z-index: 99;
  user-select: none;
  margin-right: 3em;
  margin-top: 4em;
  z: 10000;

  img {
    width: auto;
    height: 100%;
    user-select: none;
    rotate: 25deg;
    position: relative;
    top: -25px;
    right: -40px;
  }
`;

export default function DomainCard(props) {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-10, 10], [30, -30]);
  const rotateY = useTransform(x, [-10, 10], [-30, 30]);
  const [events, setEvents] = useState([
    {
      ename: "Cricket",
      epath: "cricket",
      eimg: "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/12/25/w1200X800/RahulAFP.jpg",
    },
    {
      ename: "Ring Football",
      epath: "ring-football",
      eimg: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/09/12/Photos/turf-kHJF--621x414@LiveMint.jpg",
    },
    {
      ename: "Tug of War",
      epath: "tug-of-war",
      eimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ILBDcgIVKmp7mlYgsCs3kqr6iKsg5M4Smg&usqp=CAU",
    },
    {
      ename: "Dodgeball",
      epath: "dodgeball",
      eimg: "https://www.gannett-cdn.com/presto/2019/06/09/USAT/efb48ebc-2c06-47c1-8588-d2e63b292c0a-AP_Dodgeball_Record.JPG",
    },
    {
      ename: "Goal O Flag",
      epath: "goal-o-flag",
      eimg: "https://kidsports.org/wp-content/uploads/2020/05/flag-football-2000x800.jpg",
    },
  ]);
  return (
    <div className="flex flex-col " ref={ref}>
      <div className="md:w-1/3 w-full m-auto">
        <PagersText
          inView={inView}
          text="sportevent"
          mColor="#fbbe01"
          dColor="#c89800"
        />
      </div>
      <div className="flex flex-col md:flex-row flex-wrap mx-20 justify-center ">
        {events.map(({ ename, epath, eimg }) => {
          return (
            <div className="my-16 md:my-12  md:mx-8">
              <CardWrapper>
                <CardContainer
                  className="w-72 h-56"
                  // style={{ x, y, rotateX, rotateY, z: 100 }}
                  // drag
                  // dragElastic={0.16}
                  // dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  // whileTap={{ cursor: "grabbing" }}
                >
                  <TopContainer>
                    <CircleWrapper>
                      <motion.div
                        className="domain-card-circle"
                        initial={{ top: "0em" }}
                        animate={{
                          top: "-4.2em",
                          transition: {
                            duration: 3,
                            ease: "circInOut",
                          },
                        }}
                      ></motion.div>
                    </CircleWrapper>
                    <ShoesWrapper>
                      <Shoes
                        style={{
                          x,
                          y,
                          rotateX,
                          rotateY,
                          rotate: "-25deg",
                          z: 10000,
                        }}
                        //drag
                        //dragElastic={0.12}
                        // whileTap={{ cursor: "grabbing" }}
                      >
                        <img src={eimg} className="rounded-xl shadow-2xl" />
                      </Shoes>
                    </ShoesWrapper>
                  </TopContainer>
                  <BottomContainer>
                    <ShoesDetails text={ename} epath={epath} />
                  </BottomContainer>
                </CardContainer>
              </CardWrapper>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5em 6px 0 6px;
  line-height: 1.1;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 9px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuyButton = styled.button`
  padding: 8px 14px;
  background-color: #fbbe01;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;

  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #fbbe01;
  }
`;

const NikeLogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 13px;
  }
`;

function ShoesDetails({ text, epath }) {
  let navigate = useNavigate();
  return (
    <DetailsContainer>
      <BuyButton
        onClick={() => {
          navigate(`/sport/${epath}`);
        }}
      >
        {text}
      </BuyButton>
    </DetailsContainer>
  );
}
