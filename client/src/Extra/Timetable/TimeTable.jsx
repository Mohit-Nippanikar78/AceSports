import React, { useEffect, useState } from "react";
import { useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { timetable, timings } from "./data";

const TimeTable = () => {
  const [newSub, setNewSub] = useState(false);
  const [subjects, setSubjects] = useState([
    {
      subName: "Maths",
      subCount: 2,
      curCount: 0,
      strike: 1,
    },
    {
      subName: "Science",
      subCount: 3,
      curCount: 0,
      strike: 1,
    },
    {
      subName: "CPP prac",
      subCount: 2,
      curCount: 0,
      strike: 2,
    },
    {
      subName: "Dex prac",
      subCount: 4,
      curCount: 0,
      strike: 2,
    },
    {
      subName: "FCN",
      subCount: 5,
      curCount: 0,
      strike: 1,
    },
    {
      subName: "FCN prac",
      subCount: 4,
      curCount: 0,
      strike: 2,
    },
    // {
    //   subName: "DEX prac",
    //   subCount: 6,
    //   curCount: 0,
    //   strike: 3,
    // },
  ]);
  const [Ftimetable, setFtimetable] = useState(null);
  useEffect(() => {
    console.log(Ftimetable);
  }, [Ftimetable]);

  let newSubNameRef = useRef(null);
  let newSubCountRef = useRef(null);

  let newSubStrikeRef = useRef(null);
  const createTimetable = () => {
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    let tt = timetable;
    let subs = subjects;
    let subInd = 0;
    subs = subs.map((sub) => {
      return { ...sub, curCount: 0 };
    });
    console.log(tt, subs);

    label1: do {
      for (let time = 0; time < timings.length; time++) {
        for (let day = 0; day < tt.length; day++) {
          if (tt[day].timings[time].subName !== null) {
            continue;
          }

          // console.log(time, day);
          //console.log(tt[day].timings[time], subs[subInd]);

          if (subs[subInd] == undefined) break label1;
          if (subs[subInd].curCount < subs[subInd].subCount) {
            tt[day].timings[time].subName = subs[subInd].subName;
            if (subs[subInd]?.strike > 1) {
              console.log("bhari tidhar hu");
              tt[day].timings[time + 1].subName = subs[subInd].subName;
            }
          }
          //whole subjects and last all count are done
          if (
            subInd == subs.length - 1 &&
            subs[subInd].curCount == subs[subInd].subCount - 1
          ) {
            console.log("End karta hu mai");
            break label1;
          }
          //update current count
          if (subs[subInd].curCount < subs[subInd].subCount) {
            if (subs[subInd]?.strike > 1) {
              subs[subInd].curCount += 2;
            } else {
              subs[subInd].curCount++;
            }
          }

          //counts are done go to next subject
          if (
            subs[subInd].curCount == subs[subInd].subCount ||
            (subs[subInd].curCount == subs[subInd].subCount &&
              subs[subInd]?.strike)
          ) {
            console.log("next sub");
            subInd++;
            continue;
          }
        }
      }
    } while (0);

    console.log(tt, subs);
    setFtimetable(tt);
  };
  const addSubject = (e) => {
    e.preventDefault();
    let tempSub = {
      subName: newSubNameRef.current.value,
      subCount: parseFloat(newSubCountRef.current.value),
      curCount: 0,
      strike: parseInt(newSubStrikeRef.current.value),
    };
    setSubjects((prev) => [...prev, tempSub]);
    newSubNameRef.current.value = "";

    newSubCountRef.current.value = "";
  };
  return (
    <div>
      <div className="m-4">
        {/* <div class="grid 3  gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 required/:text-gray-300"
            >
              First name
            </label>
            <input 
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 required/:bg-gray-700 required/:border-gray-600 required/:placeholder-gray-400 required/:text-white required/:focus:ring-blue-500 required/:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 required/:text-gray-300"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 required/:bg-gray-700 required/:border-gray-600 required/:placeholder-gray-400 required/:text-white required/:focus:ring-blue-500 required/:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 required/:text-gray-300"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 required/:bg-gray-700 required/:border-gray-600 required/:placeholder-gray-400 required/:text-white required/:focus:ring-blue-500 required/:focus:border-blue-500"
              placeholder="Flowbite"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 required/:text-gray-300"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 required/:bg-gray-700 required/:border-gray-600 required/:placeholder-gray-400 required/:text-white required/:focus:ring-blue-500 required/:focus:border-blue-500"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
        </div> */}

        <div className="flex">
          <div class="font-bold mb-2">Subjects :</div>
          <div class="mx-4 overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 :text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 :bg-gray-700 :text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    Subject name
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Count
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Strike
                  </th>
                </tr>
              </thead>
              <tbody>
                {subjects.length == 0 && (
                  <tr class="bg-white :bg-gray-800">
                    <td class="py-4 px-6">...</td>
                    <td class="py-4 px-6">...</td>
                  </tr>
                )}
                {subjects.map((sub) => {
                  return (
                    <tr class="bg-white :bg-gray-800">
                      <td class="py-4 px-6">{sub.subName}</td>
                      <td class="py-4 px-6">{sub.subCount}</td>
                      <td class="py-4 px-6">{sub.strike}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div
            className="font-bold mb-3 cursor-pointer text-2xl flex items-end"
            onClick={() => {
              setNewSub(true);
            }}
          >
            +
          </div>

          {newSub && (
            <OutsideClickHandler
              onOutsideClick={() => {
                setNewSub(false);
              }}
            >
              <form
                className="flex-1 ml-16 border rounded-md p-2"
                onSubmit={addSubject}
              >
                <div>
                  <input
                    ref={newSubNameRef}
                    type="text"
                    id="website"
                    class=" mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 required/:bg-gray-700 required/:border-gray-600 required/:placeholder-gray-400 required/:text-white required/:focus:ring-blue-500 required/:focus:border-blue-500"
                    placeholder="New Subject Name"
                    required
                  />
                </div>
                <div>
                  <input
                    ref={newSubCountRef}
                    type="number"
                    class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 required/:bg-gray-700 required/:border-gray-600 required/:placeholder-gray-400 required/:text-white required/:focus:ring-blue-500 required/:focus:border-blue-500"
                    placeholder="New Subject Count"
                    required
                  />
                </div>
                <div>
                  <input
                    ref={newSubStrikeRef}
                    type="number"
                    class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 required/:bg-gray-700 required/:border-gray-600 required/:placeholder-gray-400 required/:text-white required/:focus:ring-blue-500 required/:focus:border-blue-500"
                    placeholder="Strike Count 1 or 2"
                    min={1}
                    max={2}
                    defaultValue={1}
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Add Subject
                </button>
              </form>
            </OutsideClickHandler>
          )}
        </div>

        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 required/:bg-gray-700 required/:border-gray-600 required/:focus:ring-blue-600 required/:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            class="ml-2 text-sm font-medium text-gray-900 required/:text-gray-400"
          >
            I agree with the{" "}
            <a
              href="#"
              class="text-blue-600 hover:underline required/:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center required/:bg-blue-600 required/:hover:bg-blue-700 required/:focus:ring-blue-800"
          onClick={createTimetable}
        >
          Submit
        </button>
      </div>

      {Ftimetable && (
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 required/:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 required/:bg-gray-700 required/:text-gray-400">
              <tr>
                <th scope="col" class="p-4">
                  <div class="flex items-center">Days</div>
                </th>
                {timings.map((item) => {
                  return (
                    <th scope="col" class="py-3 px-6">
                      {item.time}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {Ftimetable?.map((item) => {
                return (
                  <tr class="bg-white border-b required/:bg-gray-800 required/:border-gray-700 hover:bg-gray-50 required/:hover:bg-gray-600">
                    <td class="p-4 w-4">{item.day}</td>
                    {item.timings.map((dayItem) => {
                      return (
                        <th
                          scope="row"
                          class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap required/:text-white"
                        >
                          {dayItem.subName}
                        </th>
                      );
                    })}
                    {/* <td class="py-4 px-6">Silver</td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TimeTable;
