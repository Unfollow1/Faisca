import React from 'react';
import styles from "./structure.module.css";
import CardRightText from './CardRightText';
import CardLeftText from './CardLeftText';
import StyledText from "@/components/textoEstilizado/textoEstilizado"

function EstruturaFaisca({ tittle, phrase, imgOne, subTittleOne, textOne, imgTwo, subTittleTwo, subSubTittleTwo, textTwo, imgThree, subTittleThree, textThree, imgFour, subTittleFour, subSubTittleFour, textFour}) {
  return (
    <div className={styles.container}>
      <div className={styles.introContainer}>
        <h1><StyledText text={tittle}/></h1>
        <p>
          <StyledText text={phrase}/>
        </p>
      </div>

      <CardRightText
        imgPath={imgOne}
        erro={"error"}
        tittle={subTittleOne}
        text={textOne} />

      <CardLeftText
        imgPathLT={imgTwo}
        erroLT={"error"}
        tittleLT={subTittleTwo}
        subTittleLT={subSubTittleTwo}
        textLT={textTwo} />

      <CardRightText
        imgPath={imgThree}
        erro={"error"}
        tittle={subTittleThree}
        text={textThree} />

      <CardLeftText
        imgPathLT={imgFour}
        erroLT={"error"}
        tittleLT={subTittleFour}
        subTittleLT={subSubTittleFour}
        textLT={textFour} />

    </div>
  );
}

export default EstruturaFaisca;
