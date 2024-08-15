import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Grid } from '@alfalab/core-components/grid';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import luk from './assets/luk.png';
import sber from './assets/sber.png';
import smile from './assets/smile.png';
import { CompareLayout } from './compare/CompareLayout';
import { LongreadLayout } from './longread/LongreadLayout';
import { lrSt } from './longread/style.css';
import { Shape } from './Shape';
import { appSt } from './style.css';

export const App = () => {
  const [compareShow, setCompare] = useState(false);
  const [longreadShow, setLongread] = useState(false);

  return (
    <>
      <div className={appSt.container}>
        <Typography.Text view="primary-medium">
          В вашем портфеле две бумаги имеют Альфа-рейтинг ниже чем бумаги из того же сектора. Не является ИИР.
        </Typography.Text>

        <div className={appSt.banner} onClick={() => setLongread(true)}>
          <img src={smile} width={40} height={40} />
          <Typography.Text view="component-primary">Как мы оцениваем бумаги</Typography.Text>
        </div>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h2" view="small" font="system" weight="semibold">
          Нефть и газ
        </Typography.TitleResponsive>
        <div className={appSt.bannersWrap}>
          <div className={appSt.banner}>
            <img src={sber} width={48} height={48} className={appSt.bannerImg} />

            <div className={appSt.rowText}>
              <Typography.Text view="component-primary">Сбербанк</Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                SBER
              </Typography.Text>
            </div>

            <div className={appSt.shapeContainer}>
              <Shape color="#FA9313" className={appSt.shapeBg} />
              <Typography.Text view="primary-small" color="primary-inverted" className={appSt.shapeText}>
                6,1
              </Typography.Text>
            </div>
          </div>
          <div className={appSt.connect} />
          <div className={appSt.banner}>
            <img src={luk} width={48} height={48} className={appSt.bannerImg} />

            <div className={appSt.rowText}>
              <Typography.Text view="component-primary">Лукойл</Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                LKOH
              </Typography.Text>
            </div>

            <div className={appSt.shapeContainer}>
              <Shape color="#0CC44D" className={appSt.shapeBg} />
              <Typography.Text view="primary-small" color="primary-inverted" className={appSt.shapeText}>
                8,2
              </Typography.Text>
            </div>
          </div>
        </div>

        <Grid.Row gutter={16}>
          <Grid.Col width="6">
            <ButtonMobile style={{ width: '100%' }} view="secondary" onClick={() => setCompare(true)}>
              Сравнить
            </ButtonMobile>
          </Grid.Col>
          <Grid.Col width="6">
            <ButtonMobile
              style={{ width: '100%' }}
              view="primary"
              href="alfabank://redirect_to_ai?link=a-investments://CA?type=isinFromCurrent&value=RU0009024277"
            >
              Заменить
            </ButtonMobile>
          </Grid.Col>
        </Grid.Row>
      </div>

      <BottomSheet
        title={
          <Typography.Text tag="p" view="component" weight="medium" defaultMargins={false}>
            Альфа-Рейтинг
          </Typography.Text>
        }
        open={longreadShow}
        onClose={() => setLongread(false)}
        titleAlign="center"
        stickyHeader
        hasCloser
        contentClassName={lrSt.btmContent}
      >
        <LongreadLayout />
      </BottomSheet>
      <BottomSheet
        title={
          <Typography.Text tag="p" view="component" weight="medium" defaultMargins={false}>
            Сравнение
          </Typography.Text>
        }
        open={compareShow}
        onClose={() => setCompare(false)}
        titleAlign="center"
        stickyHeader
        hasCloser
      >
        <CompareLayout />
      </BottomSheet>
    </>
  );
};
