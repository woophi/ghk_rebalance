import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Grid } from '@alfalab/core-components/grid';
import { Typography } from '@alfalab/core-components/typography';
import { useCallback, useState } from 'react';
import gaz from './assets/gaz.png';
import luk from './assets/luk.png';
import smile from './assets/smile.png';
import { CompareLayout } from './compare/CompareLayout';
import { LongreadLayout } from './longread/LongreadLayout';
import { lrSt } from './longread/style.css';
import { Shape } from './Shape';
import { appSt } from './style.css';
import './utils/events';

export const App = () => {
  const [compareShow, setCompare] = useState(false);
  const [longreadShow, setLongread] = useState(false);

  const howToClick = useCallback(() => {
    window.gtag('event', '3135_how_we_evaluate_click');
    setLongread(true);
  }, []);
  const howToClose = useCallback(() => {
    window.gtag('event', '3135_alfa_rating_close_click');
    setLongread(true);
  }, []);

  const compareClose = useCallback(() => {
    window.gtag('event', '3135_comparison_close_click');
    setCompare(false);
  }, []);
  const compareClick = useCallback(() => {
    window.gtag('event', '3135_compare_click');
    setCompare(true);
  }, []);

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="medium" font="system" weight="semibold">
          Ребалансировка портфеля
        </Typography.TitleResponsive>

        <Typography.Text view="primary-medium">
          В вашем портфеле имеются бумаги, имеющие низкий Альфа-рейтинг. Предлагаем заменить на бумаги того же сектора с
          более высоким Альфа-рейтингом. Не является ИИР.
        </Typography.Text>

        <div className={appSt.banner} onClick={howToClick}>
          <img src={smile} width={40} height={40} />
          <Typography.Text view="component-primary">Как мы оцениваем бумаги</Typography.Text>
        </div>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h2" view="small" font="system" weight="semibold">
          Нефть и газ
        </Typography.TitleResponsive>
        <div className={appSt.bannersWrap}>
          <div className={appSt.banner}>
            <img src={gaz} width={48} height={48} className={appSt.bannerImg} />

            <div className={appSt.rowText}>
              <Typography.Text view="component-primary">Газпром</Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                GAZP
              </Typography.Text>
            </div>

            <div className={appSt.shapeContainer}>
              <Shape color="#FF5431" className={appSt.shapeBg} />
              <Typography.Text view="primary-small" color="primary-inverted" className={appSt.shapeText}>
                3,8
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
                7,9
              </Typography.Text>
            </div>
          </div>
        </div>

        <Grid.Row gutter={16}>
          <Grid.Col width="6">
            <ButtonMobile style={{ width: '100%' }} view="secondary" onClick={compareClick}>
              Сравнить
            </ButtonMobile>
          </Grid.Col>
          <Grid.Col width="6">
            <ButtonMobile
              style={{ width: '100%' }}
              view="primary"
              href="a-investments://CA?type=isinFromCurrent&value=RU0009024277"
              onClick={() => window.gtag('event', '3135_change_click')}
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
        onClose={howToClose}
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
        onClose={compareClose}
        titleAlign="center"
        stickyHeader
        hasCloser
      >
        <CompareLayout />
      </BottomSheet>
    </>
  );
};
