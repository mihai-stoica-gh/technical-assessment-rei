import {useTranslations} from 'next-intl';
import Image from "next/image";
import styles from './Home.module.scss';

export default function Movie({movie}: any) {
    const t = useTranslations('HomePage');

    return (
        <div className={styles.container}>
        </div>
    )
}