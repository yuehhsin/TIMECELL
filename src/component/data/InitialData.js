// eslint-disable-next-line import/prefer-default-export
export const InitialData = {
  MON: [],
  TUE: [],
  WED: [],
  THU: [],
  FRI: [],
  SAT: [],
  SUN: [],
};

const tbDataPush = (week, i) => {
  InitialData[week].push({
    time: i,
    event: '',
    color: '#F4F4F4',
    week,
  });
};

for (let i = 0; i < 24; i += 0.5) {
  tbDataPush('MON', i);
  tbDataPush('TUE', i);
  tbDataPush('WED', i);
  tbDataPush('THU', i);
  tbDataPush('FRI', i);
  tbDataPush('SAT', i);
  tbDataPush('SUN', i);
}
