import { useForm } from 'react-hook-form';
import { BiSearchAlt } from 'react-icons/bi';
import styles from './styles.module.css';

type Props = {};

const keywords = [
  '藍芽耳機',
  '藍芽喇叭',
  '藍芽鍵盤',
  '藍芽滑鼠',
  '藍芽鍵盤滑鼠組',
  'Apple AirPods',
  'Apple AirPods Pro',
  'Apple AirPods Max',
];

const Header = (props: Props) => {
  const { register, handleSubmit, watch, setValue } = useForm();

  const currentKeyword = watch('keyword');
  const keywordFilter = keywords.filter(
    (keyword) => keyword.includes(currentKeyword) && keyword !== currentKeyword,
  );

  const onSubmit = (data: any) => console.log(data);

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input {...register('keyword')} />
        <button type='submit'>
          <BiSearchAlt />
        </button>
        {!!keywordFilter.length && (
          <ul className={styles.keywordsDropDown}>
            {keywordFilter.map((keyword, index) => (
              <li key={keyword} onClick={() => setValue('keyword', keyword)}>
                {keyword}
              </li>
            ))}
          </ul>
        )}
      </form>
    </header>
  );
};

export default Header;
