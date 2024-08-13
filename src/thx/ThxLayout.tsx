import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import aLogo from '../assets/a_logo.png';
import { appSt } from '../style.css';
import { thxSt } from './style.css';
import { useTimeout } from './useTimeout';

export const ThxLayout = () => {
  useTimeout(() => window.location.replace('alfabank://longread?endpoint=v1/adviser/longreads/15885'), 5000);
  return (
    <>
      <div className={thxSt.container}>
        <img src={aLogo} className={thxSt.rocket} />
        <Typography.TitleResponsive font="system" tag="h1" view="large" defaultMargins weight="bold">
          Мы знаем, что вы хотели подать заявку
        </Typography.TitleResponsive>
        <Typography.TitleResponsive font="system" tag="h2" view="xsmall" defaultMargins weight="regular">
          Совсем скоро вы сможете выбрать ЦФА в нашем основном разделе.
        </Typography.TitleResponsive>
      </div>
      <Gap size={128} />
      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" href="alfabank://longread?endpoint=v1/adviser/longreads/15885">
          Буду ждать!
        </ButtonMobile>
      </div>
    </>
  );
};
