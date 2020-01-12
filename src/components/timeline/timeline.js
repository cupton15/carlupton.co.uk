import React from 'react'

import styles from './timeline.module.css'
import TimelineEvent from './timeline-event/timeline-event'

const chaCha = [
    'To the left',
    'Take it back now y\'all',
    'One hop this time',
    'Right foot let\'s stomp',
    'Left foot let\'s stomp',
    'Cha cha real smooth'
]

const Timeline = () => (
    <div className={styles.timeline}>
        { chaCha.map(line => <TimelineEvent>{line}</TimelineEvent>) }
    </div>
)

export default Timeline