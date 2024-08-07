"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";

const MeetingTypeList = () => {
    useState
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard 
      img="/icons/add-meeting.svg"
      tittle="New Meeting"
      description="Starting an instant meeting"
      handleClick={}
      />
      <HomeCard />
      <HomeCard />
      <HomeCard />
    </section>
  );
};

export default MeetingTypeList;
