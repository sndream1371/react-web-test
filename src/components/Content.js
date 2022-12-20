import React from 'react';
import { dummyData } from '../db/jsonData';

const Content = () => {
  console.log('dummyData :', dummyData);

  // return <div> ---Content --- </div>;
  return dummyData?.map((value, idx) => (
    <div key={idx} className="contentList">
      <div className="contentId"> {value.id} </div>
      <div> {value.title} </div>
      <div> {value.completed.toString()} </div>
    </div>
  ));
};

export default Content;
