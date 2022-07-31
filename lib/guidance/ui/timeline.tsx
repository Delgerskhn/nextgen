import { Heading, Stack } from "@chakra-ui/react";
import {
  AiFillFilter,
  AiOutlineFieldTime,
  AiOutlineTeam,
} from "react-icons/ai";
import { BiWalk } from "react-icons/bi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export const Timeline = () => {
  return (
    <Stack maxW={"70%"} mx={"auto"} w="full" py="10">
      <VerticalTimeline>
        <Heading
          textAlign={"center"}
          fontSize="3xl"
          position="absolute"
          left={0}
          right={0}
        >
          ХУГАЦАА
        </Heading>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //   contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2022.07.01 – 08.15"
          iconStyle={{ background: "white", color: "#013365" }}
          icon={<AiOutlineFieldTime />}
          dateClassName="time-line-date"
        >
          <h3 className="vertical-timeline-element-title">
            ТӨСӨЛ ХҮЛЭЭН АВАХ ХУГАЦАА
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022.08.16 – 08.30"
          iconStyle={{ background: "white", color: "#013365" }}
          icon={<AiFillFilter />}
          dateClassName="time-line-date"
        >
          <h3 className="vertical-timeline-element-title">
            ТӨСӨЛ СОНГОН ШАЛГАРУУЛАХ ХУГАЦАА
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022.09.01 – 09.15"
          iconStyle={{ background: "white", color: "#013365" }}
          icon={<AiOutlineTeam />}
          dateClassName="time-line-date"
        >
          <h3 className="vertical-timeline-element-title">
            ТӨСЛИЙН БАГИЙГ ЧАДАВХИЖУУЛАХ ХУГАЦАА
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022.09.16 – 11.15"
          iconStyle={{ background: "white", color: "#013365" }}
          icon={<BiWalk />}
          dateClassName="time-line-date"
        >
          <h3 className="vertical-timeline-element-title">
            ТӨСӨЛ ҮРГЭЛЖЛЭХ ХУГАЦАА
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Stack>
  );
};
