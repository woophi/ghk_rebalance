import { List } from '@alfalab/core-components/list';
import { ProgressBar } from '@alfalab/core-components/progress-bar';
import { Typography } from '@alfalab/core-components/typography';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import gaz from '../assets/gaz.png';
import luk from '../assets/luk.png';
import { compSt } from './style.css';
import { useWindowListener } from './useEventListener';

export const CompareLayout = () => {
  return (
    <div className={compSt.container}>
      <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
        Потенциал роста
      </Typography.TitleResponsive>
      <CompareProgress
        leftCompany={{ value: 44, color: 'red' }}
        imoex={{ color: 'gray', value: 65 }}
        rightCompany={{ color: 'green', value: 90 }}
        sector={{ color: 'gray', value: 51 }}
        total={{
          color: 'negative',
          value: 44,
        }}
      />
      <div>
        <Typography.Text view="primary-medium" weight="bold" defaultMargins={false}>
          Газпром:
        </Typography.Text>
        <br />
        <Typography.Text view="primary-medium" defaultMargins={false}>
          Таргет аналитиков Альфа–Банка: 205 руб. Консенсус–прогноз: 152 руб.
        </Typography.Text>
      </div>
      <div>
        <Typography.Text view="primary-medium" weight="bold" defaultMargins={false}>
          Лукойл:
        </Typography.Text>
        <br />
        <Typography.Text view="primary-medium" defaultMargins={false}>
          Таргет аналитиков Альфа–Банка: 9206 руб. Консенсус–прогноз: 8937 руб.
        </Typography.Text>
      </div>
      <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
        Бизнес показатели
      </Typography.TitleResponsive>
      <CompareProgress
        leftCompany={{ value: 24, color: 'red' }}
        imoex={{ color: 'gray', value: 65 }}
        rightCompany={{ color: 'orange', value: 63 }}
        sector={{ color: 'gray', value: 45 }}
        total={{
          color: 'negative',
          value: 24,
        }}
      />
      <div>
        <Typography.Text view="primary-medium" weight="bold" defaultMargins={false}>
          Газпром:
        </Typography.Text>
        <br />
        <br />
        <Typography.Text view="primary-medium" defaultMargins={false}>
          Добыча и экспорт с 2022 года снизились, что негативно повлияло на финансовые результаты. Из-за прекращения поставок
          в Европу Газпром потерял две трети экспорта.
        </Typography.Text>
        <br />
        <Typography.Text view="primary-medium" defaultMargins={false}>
          Финансовые результаты за 2023 год ухудшились. Выручка снизилась на 27% до 8,5 трлн руб. Компания впервые за 25 лет
          закончила год с убытком. Долговая нагрузка значительно выросла, превысив прогноз менеджмента.
        </Typography.Text>
        <br />
        <Typography.Text view="primary-medium" defaultMargins={false}>
          Драйвер роста: подписание контракта на строительство газопровода Сила Сибири–2 для поставки в Китай через
          территорию Монголии до 50 млрд куб. м газа в год. Это позитивно для экспорта, однако сроки неизвестны.
        </Typography.Text>
      </div>
      <div>
        <Typography.Text view="primary-medium" weight="bold" defaultMargins={false}>
          Лукойл:
        </Typography.Text>
        <br />
        <br />
        <Typography.Text view="primary-medium" defaultMargins={false}>
          Финансовые результаты компании улучшаются. Высокие цены на нефть в совокупности с ослаблением рубля компенсируют
          потери от сокращения добычи.
        </Typography.Text>
        <Typography.Text view="primary-medium" defaultMargins={false}>
          Текущий уровень мультипликатора P/E предполагает дисконт к историческому уровню.
        </Typography.Text>
      </div>
      <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
        Дивиденды
      </Typography.TitleResponsive>
      <CompareProgress
        leftCompany={{ value: 18, color: 'red' }}
        imoex={{ color: 'gray', value: 65 }}
        rightCompany={{ color: 'green', value: 80 }}
        sector={{ color: 'gray', value: 58, adjustPosition: -20 }}
        total={{
          color: 'negative',
          value: 18,
        }}
      />

      <div>
        <Typography.Text view="primary-medium" weight="bold" defaultMargins={false}>
          Газпром:
        </Typography.Text>
        <br />
        <br />
        <Typography.Text view="primary-medium" defaultMargins={false}>
          Целевой уровень дивидендов — не менее 50% чистой прибыли по МСФО. Если чистый долг/EBITDA выше 2,5х, выплаты могут
          быть ниже.
        </Typography.Text>
        <br />
        <Typography.Text view="primary-medium" defaultMargins={false}>
          В 2023 году коэффициент чистый долг/EBITDA превысил 2,5х. Правительство рекомендовало отказаться от выплат по
          итогам года. По итогам 2024 года дивиденды также маловероятны.
        </Typography.Text>
      </div>

      <div>
        <Typography.Text view="primary-medium" weight="bold" defaultMargins={false}>
          Лукойл:
        </Typography.Text>
        <br />
        <br />
        <Typography.Text view="primary-medium" defaultMargins={false}>
          До 2023 года компания регулярно увеличивала выплаты акционерам, распределяя 100% свободного денежного потока (FCF).
          Выплаты 2 раза в год. По итогам 2023 года размер дивиденда чуть ниже 100%.
        </Typography.Text>
        <br />
        <Typography.Text view="primary-medium" defaultMargins={false}>
          Прогноз дивидендной доходности на горизонте 12 месяцев — более 12%.
        </Typography.Text>
      </div>

      <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
        Устойчивость
      </Typography.TitleResponsive>
      <CompareProgress
        leftCompany={{ value: 66, color: 'orange', adjustPosition: -25 }}
        sector={{ color: 'gray', value: 70 }}
        imoex={{ color: 'orange', value: 65, adjustPosition: -25 }}
        rightCompany={{ color: 'green', value: 96, css: { marginLeft: '14px' }, adjustPosition: -7 }}
        total={{
          color: 'attention',
          value: 60,
        }}
      />
      <Typography.Text view="primary-medium" defaultMargins={false}>
        Обе акции обладают высокой ликвидностью, входят в топ-10 бумаг «Народного портфеля» Московской биржи. Акции Лукойла
        занимают второе место в «Народном портфеле» с долей 14% и имеют максимальный вес в индексе МосБиржи 14%.
      </Typography.Text>

      <div>
        <Typography.Text view="primary-medium" weight="bold">
          Газпром. Потенциальные риски:
        </Typography.Text>
        <br />
        <br />
        <List tag="ul" marker="•">
          <List.Item>
            <Typography.Text view="primary-medium" defaultMargins={false}>
              Снижение или стагнация экспорта. Под вопросом продление поставок газа через Украину. Для роста экспорта
              потребуются высокие капитальные затраты, что ещё больше увеличит долговую нагрузку.
            </Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text view="primary-medium" defaultMargins={false}>
              Рост стоимости обслуживания долга при высоких ставках.
            </Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text view="primary-medium" defaultMargins={false}>
              Волатильность мировых цен на газ. В ближайшие годы ожидается большой объём новых поставок СПГ (Катар, США,
              Австралия). Цены останутся под давлением из-за роста предложения.
            </Typography.Text>
          </List.Item>
        </List>
      </div>

      <div>
        <Typography.Text view="primary-medium" weight="bold">
          Лукойл. Потенциальные риски:
        </Typography.Text>
        <br />
        <br />
        <List tag="ul" marker="•">
          <List.Item>
            <Typography.Text view="primary-medium" defaultMargins={false}>
              Возможное снижение цен на нефть и укрепление рубля.
            </Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text view="primary-medium" defaultMargins={false}>
              Снижение размера дивидендов ниже 100% FCF, как это произошло по итогам 2023 года
            </Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text view="primary-medium" defaultMargins={false}>
              Недостаток крупных долгосрочных проектов, которые могут обеспечить рост совокупной добычи.
            </Typography.Text>
          </List.Item>
        </List>
      </div>

      <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
        История торгов
      </Typography.TitleResponsive>
      <CompareProgress
        leftCompany={{ value: 36, color: 'red' }}
        sector={{ color: 'gray', value: 44 }}
        imoex={{ color: 'gray', value: 65 }}
        rightCompany={{ color: 'orange', value: 65 }}
        total={{
          color: 'negative',
          value: 36,
        }}
      />

      <Typography.Text view="primary-medium">
        В июне акции Газпрома снижались до исторических минимумов из-за ухудшения финансовых показателей и решения не
        выплачивать дивиденды. В июле котировки умеренно восстановились, после чего торгуются без устойчивого тренда.
      </Typography.Text>
      <Typography.Text view="primary-medium">
        С конца апреля акции Лукойла имеют тенденцию к снижению после закрытия реестра для выплаты дивидендов. После этого
        акции снижаются вместе с рынком. Возможен обратный выкуп у нерезидентов до 25% всех акций Лукойла, если его одобрит
        Правительственная комиссия.
      </Typography.Text>
    </div>
  );
};

type Props = {
  total: {
    value: number;
    color: 'positive' | 'attention' | 'negative';
  };
  sector: {
    value: number;
    color: 'gray' | 'green' | 'orange' | 'red';
    adjustPosition?: number;
  };
  leftCompany: {
    value: number;
    color: 'gray' | 'green' | 'orange' | 'red';
    adjustPosition?: number;
  };
  imoex: {
    value: number;
    color: 'gray' | 'green' | 'orange' | 'red';
    adjustPosition?: number;
  };
  rightCompany: {
    value: number;
    color: 'gray' | 'green' | 'orange' | 'red';
    css?: CSSProperties;
    adjustPosition?: number;
  };
};

const CompareProgress = ({ total, sector, leftCompany, imoex, rightCompany }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [[sectorPosition, leftCompanyPosition, imoexPosition, rightCompanyPosition], setDotsPositons] = useState<number[]>([
    0, 0, 0, 0,
  ]);

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.clientWidth;
      const sectorDot = (sector.value * width) / 100 - 6;
      const leftCompanyDot = (leftCompany.value * width) / 100 - 8;
      const imoexDot = (imoex.value * width) / 100 - 6;
      const rightCompanyDot = (rightCompany.value * width) / 100 - 8;
      setDotsPositons([sectorDot, leftCompanyDot, imoexDot, rightCompanyDot]);
    }
  }, [sector.value, leftCompany.value, imoex.value, rightCompany.value]);

  useWindowListener('resize', () => {
    if (ref.current) {
      const width = ref.current.clientWidth;
      const sectorDot = (sector.value * width) / 100 - 6;
      const leftCompanyDot = (leftCompany.value * width) / 100 - 8;
      const imoexDot = (imoex.value * width) / 100 - 6;
      const rightCompanyDot = (rightCompany.value * width) / 100 - 8;
      setDotsPositons([sectorDot, leftCompanyDot, imoexDot, rightCompanyDot]);
    }
  });
  return (
    <div className={compSt.progressContainer} ref={ref}>
      <ProgressBar
        className={total.color === 'negative' ? compSt.progressRed : compSt.progress}
        value={total.value}
        view={total.color}
      />
      <Typography.Text view="secondary-medium" color="secondary" className={compSt.se({ position: 'left' })}>
        0
      </Typography.Text>
      <Typography.Text view="secondary-medium" color="secondary" className={compSt.se({ position: 'right' })}>
        10
      </Typography.Text>
      <div
        className={compSt.dot({ color: sector.color, size: 's' })}
        style={{ left: sectorPosition + (sector.adjustPosition ?? 0) }}
      />
      <div
        className={compSt.dot({ color: leftCompany.color, size: 'm' })}
        style={{ left: leftCompanyPosition + (leftCompany.adjustPosition ?? 0) }}
      />
      <div
        className={compSt.dot({ color: imoex.color, size: 's' })}
        style={{ left: imoexPosition + (imoex.adjustPosition ?? 0) }}
      />
      <div className={compSt.dot({ color: rightCompany.color, size: 'm' })} style={{ left: rightCompanyPosition }} />

      <div className={compSt.textBottom} style={{ left: sectorPosition - 12 + (sector.adjustPosition ?? 0) }}>
        <Typography.Text view="secondary-medium">{sector.value / 10}</Typography.Text>
        <Typography.Text view="secondary-small" color="secondary">
          Сектор
        </Typography.Text>
      </div>
      <div className={compSt.textBottom} style={{ left: imoexPosition - 12 + (imoex.adjustPosition ?? 0) }}>
        <Typography.Text view="secondary-medium">{imoex.value / 10}</Typography.Text>
        <Typography.Text view="secondary-small" color="secondary">
          IMOEX
        </Typography.Text>
      </div>

      <div className={compSt.tagContainer} style={{ left: leftCompanyPosition - 22 + (leftCompany.adjustPosition ?? 0) }}>
        <div className={compSt.tag({ color: leftCompany.color })}>
          <img src={gaz} width={26} height={26} className={compSt.tagImg} />
          <Typography.Text view="primary-small" color="primary-inverted">
            {(leftCompany.value / 10).toLocaleString('ru')}
          </Typography.Text>
        </div>
        <div className={compSt.stick({ color: leftCompany.color })} />
      </div>

      <div className={compSt.tagContainer} style={{ left: rightCompanyPosition - 22 + (rightCompany.adjustPosition ?? 0) }}>
        <div className={compSt.tag({ color: rightCompany.color })}>
          <img src={luk} width={26} height={26} className={compSt.tagImg} />
          <Typography.Text view="primary-small" color="primary-inverted">
            {rightCompany.value === 80 || rightCompany.value === 90
              ? (rightCompany.value / 10).toFixed(1).replace('.', ',')
              : (rightCompany.value / 10).toLocaleString('ru')}
          </Typography.Text>
        </div>
        <div className={compSt.stick({ color: rightCompany.color })} style={rightCompany.css} />
      </div>
    </div>
  );
};
