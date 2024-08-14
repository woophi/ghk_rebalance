import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Grid } from '@alfalab/core-components/grid';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import gaz from './assets/gaz.png';
import sber from './assets/sber.png';
import smile from './assets/smile.png';
import { CompareLayout } from './compare/CompareLayout';
import { Shape } from './Shape';
import { appSt } from './style.css';

export const App = () => {
  const [compareShow, setCompare] = useState(false);

  if (compareShow) {
    return <CompareLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <Typography.Text view="primary-medium">
          В вашем портфеле две бумаги имеют Альфа-рейтинг ниже чем бумаги из того же сектора
        </Typography.Text>

        <div className={appSt.banner}>
          <img src={smile} width={40} height={40} />
          <Typography.Text view="component-primary">Как мы оцениваем бумаги</Typography.Text>
        </div>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h2" view="small" font="system" weight="semibold">
          Финансовый сектор
        </Typography.TitleResponsive>
        <div className={appSt.bannersWrap}>
          <div className={appSt.banner}>
            <img src={sber} width={48} height={48} />

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
            <img src={gaz} width={48} height={48} />

            <div className={appSt.rowText}>
              <Typography.Text view="component-primary">Газпром</Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                GAZP
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
            <ButtonMobile style={{ width: '100%' }} view="primary">
              Заменить
            </ButtonMobile>
          </Grid.Col>
        </Grid.Row>
      </div>
    </>
  );
};
