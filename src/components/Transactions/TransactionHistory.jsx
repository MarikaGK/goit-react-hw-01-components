import css from './Transactions.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead className={css.thead}>
      <tr>
        <th className={css.tType}>Type</th>
        <th className={css.tAmount}>Amount</th>
        <th className={css.tCurrency}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr className={css.tr} key={id}>
          <td className={css.tType}>{type}</td>
          <td className={css.tAmount}>{amount}</td>
          <td className={css.tCurrency}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
