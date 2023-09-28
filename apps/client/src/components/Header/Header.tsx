import style from './Header.module.scss';

export interface IHeader {}
export const Header = ({}: IHeader) => {
  return <div className={style['header']}></div>;
};
