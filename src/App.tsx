import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useCallback, useState } from 'react';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';

export const App = () => {
  const [cfaValue, setCFA] = useState(0);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState('');
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = useCallback(() => {
    setError('');
    if (!cfaValue) {
      setError('Введите количество ЦФА');
      return;
    }
    setLoading(true);
    // LS.setItem(LSKeys.ShowThx, true);
    setLoading(false);
    setThx(true);
    // sendDataToGA(checkedBox).then(() => {
    //   LS.setItem(LSKeys.ShowThx, true);
    //   setLoading(false);
    //   setThx(true);
    // });
  }, [cfaValue]);

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive tag="h1" view="medium" font="system" weight="medium">
          Заявка на покупку
        </Typography.TitleResponsive>

        <Gap size={96} />
      </div>
      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} onClick={submit} block className={appSt.btn} view="primary" hint={err}>
          <div className={appSt.btnContainer}>
            <div>
              <Typography.TitleResponsive font="system" tag="h2" view="xsmall" weight="bold">
                {cfaValue * 1000} ₽
              </Typography.TitleResponsive>
              <Typography.Text color="secondary-inverted" tag="p" view="primary-medium" defaultMargins={false}>
                Комиссия 0 ₽
              </Typography.Text>
            </div>
            <div className={appSt.btnArrow}>
              <CDNIcon name="glyph_chevron-right_m" color="#000000" />
            </div>
          </div>
        </ButtonMobile>
      </div>
    </>
  );
};
