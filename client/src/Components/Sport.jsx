import React from "react";
import { useInView } from "react-intersection-observer";
import { useParams } from "react-router-dom";
import PagersText from "../Elements/PagersText";

const Sport = () => {
  let { sportName } = useParams();

  return (
    <div>
      <div
        className="absolute w-screen h-screen  "
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.8) 38%,rgba(0, 0, 0, 1) 98%),url('https://s01.sgp1.cdn.digitaloceanspaces.com/article/169705-zeqmcmtscm-1643983242.jpeg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></div>
      {sportName == "cricket" && <SportCricket />}
      {sportName == "ring-football" && <SportRingFootball />}
      {sportName == "tug-of-war" && <SportTugOfWar />}
      {sportName == "dodgeball" && <SportDodgeball />}
      {sportName == "goal-o-flag" && <SportGoalOFlag />}
      {/* <div className="h-screen"></div> */}
    </div>
  );
};
const SportCricket = () => {
  let { ref, inView, entry } = useInView({ threshold: 1 });
  return (
    <div ref={ref} className="min-h-screen pt-16 bg-fixed bg-cover">
      <PagersText
        inView={inView}
        text="cricket"
        mColor="#fbbe01"
        dColor="#c89800"
      />
      <div className="text-white relative w-full flex justify-center">
        <ul className="list-disc m-8 font-mono text-base">
          <li>Entry fees : 3000rs per team</li>
          <li>
            Each inning would comprise 6.overs. Each inning should get over in
            30 minutes. Match will be played with hard tennis-ball{" "}
          </li>
          <li>Knock-out matches</li>
          <li>Team of 15 players(11 playing + 4 substitute)</li>
          <li>
            Only one Team per college is allowed to participate. If the player
            is found to not to be a part of the college the team would will be
            disqualified and strict actions would be taken against the team and
            player
          </li>
          <li> In case of a draw, Super over would be conducted</li>
          <li> Prizes: Winners and Runners Up.</li>
        </ul>
      </div>
    </div>
  );
};
const SportRingFootball = () => {
  let { ref, inView, entry } = useInView({ threshold: 1 });
  return (
    <div ref={ref} className="min-h-screen pt-16 bg-fixed bg-cover">
      <PagersText
        inView={inView}
        text="ringfootball"
        mColor="#fbbe01"
        dColor="#c89800"
      />
      <div className="text-white relative w-full flex justify-center">
        <ul className="list-disc m-8 font-mono text-base">
          <li>Entry fees - Rs.400 per team.</li>
          <li>
            Number of participants - 6 participants per team +2
            substitutes(maximum)
          </li>
          <li>
            In case of a tie, the schedule of the match will be disclosed on the
            day of the event.
          </li>
          <li>Studs are mandatory.</li>
          <li>Players in the same team must wear the same-coloured kit.</li>
          <li>Additional rules will be disclosed on the spot.</li>
          <li>Expected teams</li>
        </ul>
      </div>
    </div>
  );
};
const SportTugOfWar = () => {
  let { ref, inView, entry } = useInView({ threshold: 1 });
  return (
    <div ref={ref} className="min-h-screen pt-16 bg-fixed bg-cover">
      <PagersText
        inView={inView}
        text="tugofwar"
        mColor="#fbbe01"
        dColor="#c89800"
      />
      <div className="text-white relative w-full flex justify-center">
        <ul className="list-disc m-8 font-mono text-base">
          <li>
            Number of participants:– 6 participants per team +2
            substitutes(maximum)
          </li>
          <li>Entry fees per team=400</li>
          <li>An equal number of players pick up each end of the rope.</li>
          <li>
            The players begin tugging the rope when the referee gives the
            signal.
          </li>
          <li>Each player pulls backwards as hard as they can.</li>
          <li>
            The teams continue pulling until the centre of the rope (tape mark)
            crosses where the referee is standing.
          </li>
          <li>
            The game ends when the referee declares one team has successfully
            pulled the past the centre
          </li>
          <li>Expected 12 teams</li>
        </ul>
      </div>
    </div>
  );
};
const SportDodgeball = () => {
  let { ref, inView, entry } = useInView({ threshold: 1 });
  return (
    <div ref={ref} className="min-h-screen pt-16 bg-fixed bg-cover">
      <PagersText
        inView={inView}
        text="dodgeball"
        mColor="#fbbe01"
        dColor="#c89800"
      />
      <div className="text-white relative w-full flex justify-center">
        <ul className="list-disc m-8 font-mono text-base">
          <li>
            2 Female Participants mandatory, Number of participants – 5
            participants per team +2substitutes(maximum)
          </li>
          <li>
            The aim of dodgeball is to eliminate the opposing players from the
            game by hitting them with a live ball, or by catching live balls
            that have been thrown by the opposition.
          </li>
          <li>
            To start a game, each player must be touching their respective back
            net with at least one foot.
          </li>
          <li>
            Players must retreat and cross the attack line before making their
            first throw , or can pass the balls back to teammates positioned
            behind the attack line. Two feet must be behind the attack line for
            a throw to be valid.
          </li>
          <li>
            If a player catches a live ball thrown by the opposition, then the
            player who threw the ball is out. Additionally, an eliminated member
            of the catcher’s team may return to the field of play
          </li>
          <li>
            When a player is ‘out’ they must raise their hand and leave the
            field of play immediately, without interfering with play in any way
          </li>
          <li>
            Any player intentionally throwing a ball at an opposition player
            whose hand is raised will be ‘out’
          </li>
          <li>Players may pass the ball to teammates</li>
          <li>Players may put the ball on the ground</li>
          <li>Players are NOT permitted to kick or step on the ball</li>
          <li>
            Players must not lift or support their team-mates in catching,
            throwing, etc
          </li>
          <li>
            Eliminated players must not interfere with or touch any balls while
            ‘out’
          </li>
          <li>8 Teams expected</li>
        </ul>
      </div>
    </div>
  );
};
const SportGoalOFlag = () => {
  let { ref, inView, entry } = useInView({ threshold: 1 });
  return (
    <div ref={ref} className="min-h-screen pt-16 bg-fixed bg-cover">
      <PagersText
        inView={inView}
        text="goaloflag"
        mColor="#fbbe01"
        dColor="#c89800"
      />
      <div className="text-white relative w-full flex justify-center">
        <ul className="list-disc m-8 font-mono text-base">
          <li>No contact game.</li>
          <li>Each player will get a flagbelt with 3 flags.</li>
          <li>
            Teams need to score goals just related to hand ball rules and also
            save their flags.
          </li>
          <li>No dribbling</li>
          <li>
            Defensive team can only grab the flag if the offensive team has the
            possession of the ball.
          </li>
          <li>
            The flag can be only snatched one at a time from the player who has
            the ball in hand.
          </li>
          <li>
            If the player with the ball has his flag pulled by the opposition
            then the ball is dead and the game will restart from the start
          </li>
          <li>
            Scoring system:
            <ul className="list-disc ml-4 ">
              <li>Goal= 5 points</li>
              <li>Flag= 3 point</li>
            </ul>
          </li>
          <li>Expected teams= 8</li>
        </ul>
      </div>
    </div>
  );
};

export default Sport;
