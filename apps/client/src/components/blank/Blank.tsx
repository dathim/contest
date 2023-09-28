import style from './Blank.module.scss';

export interface IBlank {}
export const Blank = ({}: IBlank) => {
  return <div className={style['blank']}></div>;
};
