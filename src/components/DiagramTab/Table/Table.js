import React from 'react';
import styles from './Table.module.css';

const tableItem = [
  {
    title: 'Основные расходы',
    value: 8700,
  },
  {
    title: 'Продукты',
    value: 1300,
  },
  {
    title: 'Машина',
    value: 100,
  },
  {
    title: 'Забота о себе',
    value: 500,
  },
  {
    title: 'Забота о детях',
    value: 7500,
  },
  {
    title: 'Товары для дома',
    value: 1300,
  },
  {
    title: 'Образование',
    value: 20,
  },
  {
    title: 'Досуг',
    value: 7000,
  },
  {
    title: 'Другие расходы',
    value: 40,
  },
];
const colors = [
  '#FED057',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
];

export default function Table() {
  return (
    <div className={styles.container}>
      <p className={styles.head}>
        <b>Категория</b>
        <b>Сумма</b>
      </p>
      <ul>
        {tableItem.map((item, idx) => {
          return (
            <li className={styles.listItem} key={item.title}>
              <span
                style={{ backgroundColor: colors[idx] }}
                className={styles.marker}
              ></span>
              <div className={styles.itemContainer}>
                <span className={styles}>{item.title}</span>
                <span className={styles}>{item.value}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <p className={styles.total}>
        <b className={styles.totalItem}>
          <span>Расходы:</span>
          <span style={{ color: '#FF6596' }}>100300</span>
        </b>
        <b className={styles.totalItem}>
          <span>Доходы:</span>
          <span style={{ color: '#24CCA7' }}>10500</span>
        </b>
      </p>
    </div>
  );
}
