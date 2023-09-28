import style from './Layout.module.scss';

export interface ILayout {
  children: React.ReactNode;
}
export const Layout = ({ children }: ILayout) => {
  return <div className={style.layout}>{children}</div>;
};
