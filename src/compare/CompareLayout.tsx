import { ProgressBar } from '@alfalab/core-components/progress-bar';
import { Typography } from '@alfalab/core-components/typography';
import { useEffect, useRef, useState } from 'react';
import gaz from '../assets/gaz.png';
import sber from '../assets/sber.png';
import { appSt } from '../style.css';
import { compSt } from './style.css';
import { useWindowListener } from './useEventListener';

export const CompareLayout = () => {
  return (
    <div className={appSt.container}>
      <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
        Потенциал роста
      </Typography.TitleResponsive>
      <CompareProgress />
      <Typography.Text view="primary-medium">
        Находим бумаги с наибольшим потенциалом роста от текущей цены к прогнозной. Учитываем прогнозы аналитиков Альфа-Банка
        и консенсус-прогнозы российских инвестдомов.
      </Typography.Text>

      <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
        Бизнес показатели
      </Typography.TitleResponsive>
      <CompareProgress />
      <Typography.Text view="primary-medium">
        Находим недооценённые акции по ключевым мультипликаторам P/E, P/S и EV/EBITDA, которые помогают оценить стоимость
        актива по отношению к прибыли, выручке и операционной эффективности. Также анализируем динамику роста выручки и
        прибыли.
      </Typography.Text>

      <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
        Дивиденды
      </Typography.TitleResponsive>
      <CompareProgress />
      <Typography.Text view="primary-medium">
        Выявляем сильные активы по ряду признаков: дивидендная доходность за последний год и прогнозное значение на
        следующий, значение индекса стабильности дивидендов DSI (показывает, насколько стабильно компания выплачивает
        дивиденды и увеличивает их размер из года в год).
      </Typography.Text>

      <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
        Устойчивость
      </Typography.TitleResponsive>
      <CompareProgress />
      <Typography.Text view="primary-medium">
        Чтобы найти бумаги с меньшим риском падения, изучаем волатильность за предыдущие 12 месяцев, долговую нагрузку —
        через показатель NetDebt/EBITDA и ликвидность — через обороты в прошлом.
      </Typography.Text>

      <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
        История торгов
      </Typography.TitleResponsive>
      <CompareProgress />
      <Typography.Text view="primary-medium">
        Оцениваем динамику цены актива за 30 и 365 дней. Определяем силу тренда и его направление: восходящий или нисходящий.
      </Typography.Text>
    </div>
  );
};

const CompareProgress = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [dotsPositons, setDotsPositons] = useState<number[]>([]);

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.clientWidth;
      const firstDot = (48 * width) / 100 - 6;
      const secondDot = (61 * width) / 100 - 8;
      const thirdDot = (68 * width) / 100 - 6;
      const fourthDot = (82 * width) / 100 - 8;
      setDotsPositons([firstDot, secondDot, thirdDot, fourthDot]);
    }
  }, []);

  useWindowListener('resize', () => {
    if (ref.current) {
      const width = ref.current.clientWidth;
      const firstDot = (48 * width) / 100 - 6;
      const secondDot = (61 * width) / 100 - 8;
      const thirdDot = (68 * width) / 100 - 6;
      const fourthDot = (82 * width) / 100 - 8;
      setDotsPositons([firstDot, secondDot, thirdDot, fourthDot]);
    }
  });
  return (
    <div className={compSt.progressContainer} ref={ref}>
      <ProgressBar className={compSt.progress} value={61} view="attention" />
      <Typography.Text view="secondary-medium" color="secondary" className={compSt.se({ position: 'left' })}>
        0
      </Typography.Text>
      <Typography.Text view="secondary-medium" color="secondary" className={compSt.se({ position: 'right' })}>
        10
      </Typography.Text>
      <div className={compSt.dot({ color: 'orange', size: 's' })} style={{ left: dotsPositons[0] }} />
      <div className={compSt.dot({ color: 'orange', size: 'm' })} style={{ left: dotsPositons[1] }} />
      <div className={compSt.dot({ color: 'gray', size: 's' })} style={{ left: dotsPositons[2] }} />
      <div className={compSt.dot({ color: 'green', size: 'm' })} style={{ left: dotsPositons[3] }} />

      <div className={compSt.textBottom} style={{ left: (dotsPositons[0] ?? 0) - 12 }}>
        <Typography.Text view="secondary-medium">4,8</Typography.Text>
        <Typography.Text view="secondary-small" color="secondary">
          Сектор
        </Typography.Text>
      </div>
      <div className={compSt.textBottom} style={{ left: (dotsPositons[2] ?? 0) - 12 }}>
        <Typography.Text view="secondary-medium">6,5</Typography.Text>
        <Typography.Text view="secondary-small" color="secondary">
          IMOEX
        </Typography.Text>
      </div>

      <div className={compSt.tagContainer} style={{ left: (dotsPositons[1] ?? 0) - 22 }}>
        <div className={compSt.tag({ color: 'orange' })}>
          <img src={sber} width={26} height={26} />
          <Typography.Text view="primary-small" color="primary-inverted">
            6,1
          </Typography.Text>
        </div>
        <div className={compSt.stick({ color: 'orange' })} />
      </div>

      <div className={compSt.tagContainer} style={{ left: (dotsPositons[3] ?? 0) - 22 }}>
        <div className={compSt.tag({ color: 'green' })}>
          <img src={gaz} width={26} height={26} />
          <Typography.Text view="primary-small" color="primary-inverted">
            8,2
          </Typography.Text>
        </div>
        <div className={compSt.stick({ color: 'green' })} />
      </div>
    </div>
  );
};
