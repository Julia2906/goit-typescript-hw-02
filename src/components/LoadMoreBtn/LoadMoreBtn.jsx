import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={css.div}>
      <button className={css.button} onClick={onLoadMore} type="submit">
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
