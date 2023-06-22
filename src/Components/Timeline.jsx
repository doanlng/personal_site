// pulled from https://stephane-monnot.github.io/react-vertical-timeline/#/
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (
        <VerticalTimeline>
            <div className='justify-center text-6xl text-white font-bold'><p>Timeline</p></div>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(0,26,51, 0.55)', color: '#fff'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(0,26,51, 0.55)' }}
            date="Summer 2022"
            iconStyle={{ background: 'rgb(0,26,51)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">05/2022-08/2022</h3>
            <h4 className="vertical-timeline-element-subtitle">Vienna, VA</h4>
            <p>
            Software Engineering Intern @ Captech Consulting
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            contentStyle={{ background: 'rgb(0,26,51, 0.55)', color: '#fff'}}
            className="vertical-timeline-element--work"
            date="Aug 2021- May 2022"
            iconStyle={{ background: 'rgb(0,26,51)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">08/2021-05/2022</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
            Computer Science Tutor @ Mindframe Education
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(0,26,51, 0.55)', color: '#fff'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(0,26,51, 0.55)' }}
            date="Aug 2021 - Jan 2022"
            iconStyle={{ background: 'rgb(0,26,51)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">08/2021-01/2022</h3>
            <h4 className="vertical-timeline-element-subtitle">Blacksburg, VA</h4>
            <p>
            Undergraduate ML Research Assistant @ Virginia Tech
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(0,26,51, 0.55)', color: '#fff'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(0,26,51, 0.55)' }}
            date="Summer 2021"
            iconStyle={{ background: 'rgb(0,26,51)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">06/2021-08/2021</h3>
            <h4 className="vertical-timeline-element-subtitle">Reston, VA</h4>
            <p>
            CS Camp Counselor @ Mindframe Education
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(0,26,51, 0.55)', color: '#fff'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(0,26,51, 0.55)' }}
            date="Summer 2020"
            iconStyle={{ background: 'rgb(0,26,51)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">06/2020-08/2020</h3>
            <h4 className="vertical-timeline-element-subtitle">Midlothian, VA</h4>
            <p>
            Magnolia Green Aquatic Center Assistant Manager for SCMG
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(0,26,51, 0.55)', color: '#fff'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(0,26,51, 0.55)' }}
            date="Summer 2018 & 2019"
            iconStyle={{ background: 'rgb(0,26,51)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">05/2019-08/2019</h3>
            <h3 className="vertical-timeline-element-title">05/2018-08/2018</h3>
            <h4 className="vertical-timeline-element-subtitle">Midlothian, VA</h4>
            <p>
            Arbor Walk Head Lifeguard Assistant Manager for SCMG
            </p>
        </VerticalTimelineElement>
        </VerticalTimeline>

  )
}

export default Timeline