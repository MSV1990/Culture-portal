import React, { Component } from 'react';

import Layout from '../Layout/Layout';

import Activity from './Activity/Activity';

import Person from './Person/Person';
import Timeline from './Timeline/Timeline';
import Video from './Video/Video';
import Gallery from './Gallery/Gallery';

import style from './style.module.css';
import SimpleMap from './Map/Map';

class Architect extends Component {
  constructor(props) {
    super(props);
    const {
      pathContext: {
        node,
      },
    } = props;
    this.data = node;
  }

  render() {
    const {
      name,
      img,
      vita,
      date,
      timelineData,
      videoId,
      work,
    } = this.data;
    return (
      <Layout>
        <div className={style.Container}>
          <Person name={name} img={img} vita={vita} date={date} />
          <Timeline timelineData={timelineData} />
          <Activity work={work} />
          <Video videoId={videoId} />
          <SimpleMap work={work} />
          <Gallery work={work} />
        </div>
      </Layout>
    );
  }
}

export default Architect;
