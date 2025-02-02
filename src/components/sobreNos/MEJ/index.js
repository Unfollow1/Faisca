import styles from './mej.module.css'
import Image from "next/image"
import StyledText from "@/components/textoEstilizado/textoEstilizado"

function MEJ({ tittle, phrase, mainImg, brasilJrImg, NejImg, fejersImg, designUFRGSImg}) {
    return (
        <div className={styles.container}>
            <Image className={styles.imge} src={mainImg} alt={"error"} width={944} height={1124} />
            <div className={styles.bar}></div>
            <div className={styles.rightContent}>
                <h1><StyledText text={tittle}/></h1>
                <p><StyledText text={phrase}/></p>
                <div className={styles.apoiadores}>
                    <Image className={styles.logos} src={brasilJrImg} width={1000} height={1000} alt="brasil" />
                    <Image className={styles.nejpoa} src={NejImg} width={1000} height={1000} alt="NejPoa" />
                    <Image className={styles.fejers} src={fejersImg} width={1000} height={1000} alt="Fejers" />
                    <Image className={styles.logos} src={designUFRGSImg} width={1000} height={1000} alt="design ufrgs" />
                </div>
            </div>
        </div>
    )
}

export default MEJ;