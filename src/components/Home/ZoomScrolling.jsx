import styles from '../../style/ZoomScrolling.module.css';
// eslint-disable-next-line no-unused-vars
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function ZoomScrolling() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale = useTransform(scrollYProgress, [0, 6], [1, 4]);

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                <motion.div style={{ scale }} className={styles.el}>
                    <div className={styles.imageContainer}>

                    </div>
                </motion.div>
            </div>

        </div>
    )
}