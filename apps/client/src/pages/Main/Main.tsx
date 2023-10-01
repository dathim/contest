// import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Header from './Header';

// import style from './Main.module.scss';
import Header from '@/components/Header/Header';
import RegistrationPromo from '@/components/RegistrationPromo/RegistrationPromo';
import Posts from '@/components/Posts/Posts';
import Sidebar from '@/components/Sidebar/Sidebar';
import Footer from '@/components/Footer/Footer';

const sections = [
  { title: 'Главная', url: '#' },
  { title: 'Участницы', url: '#' },
  { title: 'Онлайн', url: '#' },
  { title: 'Галлерея', url: '#' },
  { title: 'Конкурс', url: '#' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: '2011, Фамиляи Имя Отчество', url: '#' },
    { title: '2012 , Фамиляи Имя Отчество', url: '#' },
    { title: '2013 , Фамиляи Имя Отчество', url: '#' },
    { title: '2014, Фамиляи Имя Отчество', url: '#' },
    { title: '2015, Фамиляи Имя Отчество', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.

export const Main = () => (
  <>
    <Container maxWidth="lg">
      <Header title="Blog" sections={sections} />
      <main>
        <RegistrationPromo post={mainFeaturedPost} />
        <Grid container spacing={4}></Grid>
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Posts
            title="From the firehose"
            posts={['1111', 'awdwdawd', 'dawdawd']}
          />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </main>
    </Container>
    <Footer
      title="Footer"
      description="Something here to give the footer a purpose!"
    />
  </>
);
