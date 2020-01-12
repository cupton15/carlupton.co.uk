import React, { useState, useEffect, useRef } from 'react'

import styles from './timeline-event.module.css'

const TimelineEvent = (props) => {
    const [visible, setVisible] = useState(false)
    const domRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    })

    const timelineEventClass = [
        styles.timelineEvent,
        visible ? styles.visible : ''
    ].join(' ')

    return (
        <div className={timelineEventClass} ref={domRef}>
            {props.children}
        </div>
    )
}

export default TimelineEvent